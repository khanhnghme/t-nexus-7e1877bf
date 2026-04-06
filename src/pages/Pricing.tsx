import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TNexusLogo } from '@/components/TNexusLogo';
import tNexusLogo from '@/assets/t-nexus-logo.png';
import tNexusText from '@/assets/t-nexus-text.png';

export default function Pricing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAFAFA] font-['NotionInter','Inter',sans-serif] text-slate-900">
      
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img src={tNexusLogo} alt="T-Nexus icon" className="h-8 w-8" />
            <img src={tNexusText} alt="T-Nexus text" className="hidden h-5 w-auto sm:block" />
          </Link>
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="h-9 px-4 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 pb-12">
        
        {/* Soft Pastel Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute left-1/2 top-[-5rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[100px]" />
          <div className="absolute left-[20%] top-[40%] h-[20rem] w-[20rem] rounded-full bg-purple-100/40 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-xl text-center">
          
          {/* Logo Text without white background container */}
          <div className="mb-10 flex justify-center">
            <TNexusLogo variant="text" width={120} className="opacity-90 drop-shadow-sm" />
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Pro Plans Coming Soon
            </div>
          </div>

          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Upgrade Your Team
          </h1>
          
          <p className="mx-auto mb-10 text-lg text-slate-600 leading-relaxed">
            Unlock advanced AI capacities, custom scoring metrics, and unlimited workspaces. T-Nexus Pro is actively under development.
          </p>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-blue-600 px-8 text-base font-medium text-white shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
