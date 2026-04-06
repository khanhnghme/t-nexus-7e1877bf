import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Download,
  FileText,
  FileSpreadsheet,
  Presentation,
  Image as ImageIcon,
  File,
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  FolderDown,
  FileEdit,
  Eye,
  Paperclip,
} from 'lucide-react';
import uehLogo from '@/assets/t-nexus-text-white.png';
import JSZip from 'jszip';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface TaskFileInfo {
  file_path: string;
  file_name: string;
  file_size: number;
  public_url: string;
  storage_name?: string;
}

interface TaskNote {
  id: string;
  version_name: string;
  content: string | null;
  created_at: string;
  updated_at: string;
}

interface NoteAttachment {
  id: string;
  note_id: string;
  file_name: string;
  file_path: string;
  file_size: number;
  storage_name: string;
  public_url: string;
  created_at: string;
}

const getFileIcon = (fileName: string, size: 'sm' | 'lg' = 'lg') => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  const iconClass = size === 'lg' ? 'w-16 h-16' : 'w-4 h-4';
  switch (ext) {
    case 'pdf': return <FileText className={`${iconClass} text-red-500`} />;
    case 'doc': case 'docx': return <FileText className={`${iconClass} text-blue-500`} />;
    case 'xls': case 'xlsx': case 'csv': return <FileSpreadsheet className={`${iconClass} text-green-500`} />;
    case 'ppt': case 'pptx': return <Presentation className={`${iconClass} text-orange-500`} />;
    case 'jpg': case 'jpeg': case 'png': case 'gif': case 'webp': return <ImageIcon className={`${iconClass} text-purple-500`} />;
    default: return <File className={`${iconClass} text-muted-foreground`} />;
  }
};

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
};

const isPreviewableImage = (fn: string) => ['jpg','jpeg','png','gif','webp','bmp','svg','ico'].includes(fn.split('.').pop()?.toLowerCase() || '');
const isPDF = (fn: string) => fn.toLowerCase().endsWith('.pdf');
const isOfficeDoc = (fn: string) => ['doc','docx','xls','xlsx','ppt','pptx'].includes(fn.split('.').pop()?.toLowerCase() || '');
const isTextFile = (fn: string) => ['txt','md','json','xml','html','css','js','ts','jsx','tsx','py','java','c','cpp','h','cs','php','rb','go','rs','sql','sh','bat','yaml','yml','toml','ini','cfg','log','csv'].includes(fn.split('.').pop()?.toLowerCase() || '');
const isVideoFile = (fn: string) => ['mp4','webm','ogg','mov','avi','mkv'].includes(fn.split('.').pop()?.toLowerCase() || '');
const isAudioFile = (fn: string) => ['mp3','wav','ogg','flac','aac','m4a','wma'].includes(fn.split('.').pop()?.toLowerCase() || '');

function PdfViewer({ fileUrl, fileName }: { fileUrl: string; fileName: string }) {
  const [useGoogleViewer, setUseGoogleViewer] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setUseGoogleViewer(false);
    timerRef.current = setTimeout(() => setUseGoogleViewer(true), 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [fileUrl]);

  const src = useGoogleViewer
    ? `https://docs.google.com/gview?url=${encodeURIComponent(fileUrl)}&embedded=true`
    : `${fileUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`;

  return (
    <div className="w-full h-full flex-1 min-h-0" style={{ minHeight: '400px' }}>
      <iframe
        ref={iframeRef}
        key={useGoogleViewer ? 'google' : 'direct'}
        src={src}
        className="w-full h-full border-0"
        title={fileName}
        allow="fullscreen"
        onLoad={() => { if (timerRef.current) clearTimeout(timerRef.current); }}
      />
    </div>
  );
}

function PublicNotesPanel({ notes, attachments }: { notes: TaskNote[]; attachments: NoteAttachment[] }) {
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(notes[0]?.id || null);

  const selectedNote = notes.find(n => n.id === selectedNoteId);
  const noteAttachments = attachments.filter(a => a.note_id === selectedNoteId);

  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
        <FileEdit className="w-10 h-10 mb-3 opacity-50" />
        <p className="text-sm">Chưa có ghi chú nào</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Note tabs */}
      <div className="p-2 border-b shrink-0">
        <ScrollArea className="w-full">
          <div className="flex gap-1.5">
            {notes.map((note) => (
              <button
                key={note.id}
                onClick={() => setSelectedNoteId(note.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs transition-colors shrink-0 ${
                  note.id === selectedNoteId
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted hover:bg-muted/80 border border-border/60'
                }`}
              >
                <FileText className="w-3 h-3" />
                <span className="max-w-[120px] truncate">{note.version_name}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Note content */}
      {selectedNote && (
        <div className="flex-1 overflow-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-sm">{selectedNote.version_name}</h3>
              <span className="text-xs text-muted-foreground">
                {format(new Date(selectedNote.updated_at), 'dd/MM/yyyy HH:mm', { locale: vi })}
              </span>
            </div>
            
            {selectedNote.content ? (
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap break-words text-sm font-sans bg-muted/30 p-3 rounded-md border">
                  {selectedNote.content}
                </pre>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">Ghi chú trống</p>
            )}

            {/* Attachments */}
            {noteAttachments.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <Paperclip className="w-3 h-3" />
                  File đính kèm ({noteAttachments.length})
                </h4>
                {noteAttachments.map((att) => (
                  <a
                    key={att.id}
                    href={att.public_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-md bg-muted/50 hover:bg-muted transition-colors text-sm"
                  >
                    {getFileIcon(att.file_name, 'sm')}
                    <span className="flex-1 truncate">{att.file_name}</span>
                    <span className="text-xs text-muted-foreground shrink-0">{formatFileSize(att.file_size)}</span>
                    <Download className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PublicTaskPreview() {
  const { projectSlug, taskSlug } = useParams<{ projectSlug: string; taskSlug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectName, setProjectName] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [files, setFiles] = useState<TaskFileInfo[]>([]);
  const [notes, setNotes] = useState<TaskNote[]>([]);
  const [noteAttachments, setNoteAttachments] = useState<NoteAttachment[]>([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);
  const [textContent, setTextContent] = useState<string | null>(null);
  const [isLoadingText, setIsLoadingText] = useState(false);
  const [showNotesSidebar, setShowNotesSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'notes'>('preview');

  useEffect(() => {
    if (!projectSlug || !taskSlug) return;
    fetchData();
  }, [projectSlug, taskSlug]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/public-task-files?projectSlug=${encodeURIComponent(projectSlug!)}&taskSlug=${encodeURIComponent(taskSlug!)}`,
        {
          headers: {
            'apikey': anonKey,
            'Authorization': `Bearer ${anonKey}`,
          },
        }
      );
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Failed to fetch');
      }
      const data = await res.json();
      setProjectName(data.project?.name || '');
      setTaskTitle(data.task?.title || '');
      setFiles(data.files || []);
      setNotes(data.notes || []);
      setNoteAttachments(data.noteAttachments || []);
      setCurrentFileIndex(0);
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra');
    } finally {
      setIsLoading(false);
    }
  };

  // Current file
  const currentFile = files[currentFileIndex] || null;
  const fileName = currentFile?.file_name || '';
  const fileSize = currentFile?.file_size || 0;
  const fileUrl = currentFile?.public_url || '';

  const canPreview = fileName ? (isPreviewableImage(fileName) || isPDF(fileName) || isOfficeDoc(fileName) || isTextFile(fileName) || isVideoFile(fileName) || isAudioFile(fileName)) : false;

  // Load text file content
  useEffect(() => {
    if (fileUrl && fileName && isTextFile(fileName)) {
      setIsLoadingText(true);
      fetch(fileUrl)
        .then(r => r.text())
        .then(text => { setTextContent(text); setIsLoadingText(false); })
        .catch(() => setIsLoadingText(false));
    } else {
      setTextContent(null);
    }
  }, [fileUrl, fileName]);

  const handleDownload = async () => {
    if (!fileUrl) return;
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = fileName;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    } catch (err) { console.error('Download error:', err); }
  };

  const handleDownloadAll = async () => {
    if (files.length === 0) return;
    setIsDownloadingAll(true);
    try {
      const zip = new JSZip();
      for (const file of files) {
        const response = await fetch(file.public_url);
        const blob = await response.blob();
        zip.file(file.file_name, blob);
      }
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url; a.download = `${taskTitle || 'task-files'}.zip`;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    } catch (err) { console.error('Download all error:', err); }
    finally { setIsDownloadingAll(false); }
  };

  const goToPrevFile = () => {
    if (currentFileIndex > 0) setCurrentFileIndex(currentFileIndex - 1);
  };

  const goToNextFile = () => {
    if (currentFileIndex < files.length - 1) setCurrentFileIndex(currentFileIndex + 1);
  };

  const getOfficeViewerUrl = (url: string) => {
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
  };

  const hasNotes = notes.length > 0;

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50 shrink-0">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                              <img src={uehLogo} alt="Logo" className="h-8 w-auto drop-shadow-md" loading="lazy" />
              <div className="hidden sm:block">
                <span className="font-semibold">Xem trước file</span>
                {taskTitle && (
                  <span className="text-primary-foreground/70 text-sm ml-2">• {taskTitle}</span>
                )}
              </div>
              <div className="sm:hidden">
                <h1 className="font-semibold text-sm truncate max-w-[200px]">
                  {taskTitle || 'Xem trước file'}
                </h1>
                {projectName && (
                  <p className="text-primary-foreground/70 text-xs">{projectName}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowNotesSidebar(!showNotesSidebar)}
                  className="gap-2"
                >
                  <FileEdit className="w-4 h-4" />
                  <span className="hidden sm:inline">Ghi chú</span>
                </Button>
              }
              {files.length > 0 && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleDownloadAll}
                  disabled={isDownloadingAll}
                  className="gap-2"
                >
                  {isDownloadingAll ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <FolderDown className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">Tải toàn bộ file</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* File Navigation Bar */}
      {files.length > 1 && (
        <div className="bg-muted/50 border-b shrink-0">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevFile}
                disabled={currentFileIndex <= 0}
                className="shrink-0 h-8 w-8"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <ScrollArea className="flex-1">
                <div className="flex gap-1.5 py-1">
                  {files.map((file, index) => (
                    <button
                      key={file.file_path}
                      onClick={() => setCurrentFileIndex(index)}
                      title={`${file.file_name} (${formatFileSize(file.file_size)})`}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs transition-colors shrink-0 ${
                        index === currentFileIndex
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-background hover:bg-muted border border-border/60'
                      }`}
                    >
                      {getFileIcon(file.file_name, 'sm')}
                      <span className="max-w-[100px] truncate">{file.file_name}</span>
                    </button>
                  ))}
                </div>
              </ScrollArea>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNextFile}
                disabled={currentFileIndex >= files.length - 1}
                className="shrink-0 h-8 w-8"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              <Badge variant="secondary" className="text-xs shrink-0 px-2">
                {currentFileIndex + 1}/{files.length}
              </Badge>
            </div>
          </div>
        </div>
      )}

      {/* Main Content with optional Notes Sidebar */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Preview Area */}
        <main className={`flex-1 flex flex-col px-4 py-3 overflow-auto min-h-0 ${showNotesSidebar ? 'hidden md:flex md:w-1/2 lg:w-2/3' : ''}`}>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Đang tải file...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <AlertCircle className="w-16 h-16 text-destructive mb-4" />
              <h2 className="text-xl font-semibold mb-2">Không thể tải file</h2>
              <p className="text-muted-foreground">{error}</p>
            </div>
          ) : files.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <File className="w-16 h-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">Chưa có file nào</h2>
              <p className="text-muted-foreground">Task này chưa có bài nộp file.</p>
            </div>
          ) : currentFile ? (
            <div className="flex flex-col flex-1 gap-3 min-h-0 w-full">
              {/* File Info Card */}
              <Card className="p-4">
                <div className="flex items-center gap-4">
                  {getFileIcon(fileName, 'sm')}
                  <div className="flex-1 min-w-0">
                    <h1 className="font-semibold truncate">{fileName}</h1>
                    <p className="text-sm text-muted-foreground">
                      {formatFileSize(fileSize)}
                    </p>
                  </div>
                  <Button onClick={handleDownload} className="gap-2 shrink-0">
                    <Download className="w-4 h-4" />
                    Tải xuống
                  </Button>
                </div>
              </Card>

              {/* Preview Area */}
              <Card className="overflow-hidden flex-1 flex flex-col min-h-0">
                {canPreview ? (
                  <div className="bg-muted/30 flex-1 flex flex-col min-h-0">
                    {isPreviewableImage(fileName) ? (
                      <div className="flex items-center justify-center p-2 sm:p-4 flex-1 min-h-[200px]">
                        <img
                          src={fileUrl}
                          alt={fileName}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                        />
                      </div>
                    ) : isPDF(fileName) ? (
                      <PdfViewer fileUrl={fileUrl} fileName={fileName} />
                    ) : isOfficeDoc(fileName) ? (
                      <div className="w-full flex-1 min-h-0" style={{ minHeight: '400px' }}>
                        <iframe
                          src={getOfficeViewerUrl(fileUrl)}
                          className="w-full h-full border-0"
                          title={fileName}
                          style={{ WebkitOverflowScrolling: 'touch', overflow: 'auto' }}
                          allow="fullscreen"
                        />
                      </div>
                    ) : isVideoFile(fileName) ? (
                      <div className="flex items-center justify-center p-4 flex-1 min-h-[200px]">
                        <video src={fileUrl} controls className="max-w-full max-h-full rounded-lg shadow-lg">
                          Trình duyệt không hỗ trợ phát video.
                        </video>
                      </div>
                    ) : isAudioFile(fileName) ? (
                      <div className="flex flex-col items-center justify-center p-8 flex-1 min-h-[200px]">
                        {getFileIcon(fileName)}
                        <h3 className="text-lg font-medium mt-4 mb-6">{fileName}</h3>
                        <audio src={fileUrl} controls className="w-full max-w-md">
                          Trình duyệt không hỗ trợ phát audio.
                        </audio>
                      </div>
                    ) : isTextFile(fileName) ? (
                      <div className="w-full flex-1 flex flex-col min-h-0" style={{ minHeight: '300px' }}>
                        {isLoadingText ? (
                          <div className="flex items-center justify-center h-full">
                            <Loader2 className="w-8 h-8 animate-spin text-primary" />
                          </div>
                        ) : (
                          <ScrollArea className="h-full flex-1">
                            <pre className="p-4 text-sm font-mono whitespace-pre-wrap break-words bg-muted/30">
                              {textContent || 'Không thể đọc nội dung file'}
                            </pre>
                          </ScrollArea>
                        )}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-12 min-h-[40vh] text-center">
                    {getFileIcon(fileName)}
                    <h2 className="text-xl font-semibold mt-6 mb-2">
                      Không thể xem trước file này
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      Định dạng file này không hỗ trợ xem trước trực tiếp. 
                      Vui lòng tải file về để xem nội dung.
                    </p>
                    <Button onClick={handleDownload} className="gap-2">
                      <Download className="w-4 h-4" />
                      Tải xuống
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          ) : null}
        </main>

        {/* Notes Sidebar */}
        {showNotesSidebar && (
          <aside className="w-full md:w-1/2 lg:w-1/3 border-l bg-background overflow-hidden flex flex-col">
            <div className="p-4 border-b shrink-0 flex items-center justify-between">
              <h2 className="font-semibold flex items-center gap-2">
                <FileEdit className="w-5 h-5 text-primary" />
                Ghi chú Task
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowNotesSidebar(false)}
                className="md:hidden"
              >
                <Eye className="w-4 h-4 mr-1" />
                Xem file
              </Button>
            </div>
            <div className="flex-1 overflow-auto">
              <PublicNotesPanel notes={notes} attachments={noteAttachments} />
            </div>
          </aside>
        )}
      </div>

      {/* Mobile Tabs - only show on mobile when notes sidebar is open */}
      {showNotesSidebar && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-2">
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'preview' ? 'default' : 'outline'}
              className="flex-1"
              onClick={() => {
                setActiveTab('preview');
                setShowNotesSidebar(false);
              }}
            >
              <Eye className="w-4 h-4 mr-2" />
              Xem file
            </Button>
            <Button
              variant={activeTab === 'notes' ? 'default' : 'outline'}
              className="flex-1"
              onClick={() => {
                setActiveTab('notes');
                setShowNotesSidebar(true);
              }}
            >
              <FileEdit className="w-4 h-4 mr-2" />
              Ghi chú
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
