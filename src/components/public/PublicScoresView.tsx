import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Loader2, Trophy, User, Layers } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';
import type { GroupMember, Stage } from '@/types/database';

interface PublicScoresViewProps {
  groupId: string;
  members: GroupMember[];
  stages: Stage[];
}

interface MemberScore {
  user_id: string;
  full_name: string;
  weighted_average: number | null;
  adjustment: number | null;
  final_score: number | null;
}

interface StageScore {
  user_id: string;
  stage_id: string;
  average_score: number | null;
  final_stage_score: number | null;
}

export default function PublicScoresView({ groupId, members, stages }: PublicScoresViewProps) {
  const [finalScores, setFinalScores] = useState<MemberScore[]>([]);
  const [stageScores, setStageScores] = useState<StageScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchScores();
  }, [groupId]);

  const fetchScores = async () => {
    try {
      // Fetch final scores
      const { data: finals } = await supabase
        .from('member_final_scores')
        .select('user_id, weighted_average, adjustment, final_score')
        .eq('group_id', groupId);

      // Build member names map
      const profileIds = [...new Set(finals?.map(f => f.user_id) || [])];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, full_name')
        .in('id', profileIds);
      
      const profileMap = new Map(profiles?.map(p => [p.id, p.full_name]) || []);

      if (finals) {
        setFinalScores(
          finals
            .map(f => ({
              ...f,
              full_name: profileMap.get(f.user_id) || 'Unknown',
            }))
            .sort((a, b) => (b.final_score || 0) - (a.final_score || 0))
        );
      }

      // Fetch stage scores
      const stageIds = stages.map(s => s.id);
      if (stageIds.length > 0) {
        const { data: sScores } = await supabase
          .from('member_stage_scores')
          .select('user_id, stage_id, average_score, final_stage_score')
          .in('stage_id', stageIds);
        if (sScores) setStageScores(sScores);
      }
    } catch (err) {
      console.error('Error fetching scores:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMember = (userId: string) => {
    setExpandedMembers(prev => {
      const next = new Set(prev);
      if (next.has(userId)) next.delete(userId);
      else next.add(userId);
      return next;
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (finalScores.length === 0) {
    return (
      <Card className="p-8">
        <div className="text-center">
          <Trophy className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
          <h3 className="font-medium text-lg mb-1">Chưa có điểm</h3>
          <p className="text-sm text-muted-foreground">Điểm chưa được chấm cho dự án này</p>
        </div>
      </Card>
    );
  }

  const sortedStages = [...stages].sort((a, b) =>
    new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Trophy className="w-5 h-5 text-primary" />
        Bảng điểm thành viên
      </h2>

      <div className="space-y-2">
        {finalScores.map((member, index) => {
          const isExpanded = expandedMembers.has(member.user_id);
          const memberStageScores = stageScores.filter(s => s.user_id === member.user_id);

          return (
            <Collapsible key={member.user_id} open={isExpanded} onOpenChange={() => toggleMember(member.user_id)}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      {/* Rank */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                        index === 0 ? 'bg-yellow-500/20 text-yellow-600' :
                        index === 1 ? 'bg-gray-400/20 text-gray-500' :
                        index === 2 ? 'bg-amber-600/20 text-amber-700' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>

                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {member.full_name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{member.full_name}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono text-sm font-bold px-3 py-1">
                          {member.final_score !== null ? member.final_score.toFixed(1) : '—'}
                        </Badge>
                        <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="ml-4 mt-2 p-3 rounded-lg bg-muted/40 border-l-2 border-primary/30 space-y-2">
                  {/* Weighted average */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Trung bình có trọng số</span>
                    <span className="font-mono">{member.weighted_average?.toFixed(2) ?? '—'}</span>
                  </div>
                  {member.adjustment !== null && member.adjustment !== 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Điều chỉnh</span>
                      <span className={`font-mono ${(member.adjustment || 0) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {(member.adjustment || 0) > 0 ? '+' : ''}{member.adjustment?.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Stage breakdown */}
                  {sortedStages.length > 0 && memberStageScores.length > 0 && (
                    <div className="pt-2 border-t space-y-1.5">
                      <p className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <Layers className="w-3 h-3" /> Điểm theo giai đoạn
                      </p>
                      {sortedStages.map((stage, si) => {
                        const ss = memberStageScores.find(s => s.stage_id === stage.id);
                        if (!ss) return null;
                        return (
                          <div key={stage.id} className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">GĐ {si + 1}: {stage.name}</span>
                            <span className="font-mono">{ss.final_stage_score?.toFixed(2) ?? ss.average_score?.toFixed(2) ?? '—'}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
}
