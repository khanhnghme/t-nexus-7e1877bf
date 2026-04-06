import tNexusLogo from '@/assets/t-nexus-logo.png';
import tNexusText from '@/assets/t-nexus-text.png';
import tNexusTextWhite from '@/assets/t-nexus-text-white.png';

interface TNexusLogoProps {
  variant?: 'icon' | 'text' | 'full';
  className?: string;
  width?: number;
  /** Use white version for dark/colored backgrounds */
  light?: boolean;
}

export function TNexusLogo({ variant = 'full', className = '', width = 120, light = false }: TNexusLogoProps) {
  const textSrc = light ? tNexusTextWhite : tNexusText;

  if (variant === 'icon') {
    return (
      <img
        src={tNexusLogo}
        alt="T-Nexus"
        className={className}
        style={{ width, height: 'auto' }}
      />
    );
  }

  if (variant === 'text') {
    return (
      <img
        src={textSrc}
        alt="T-Nexus"
        className={className}
        style={{ width, height: 'auto' }}
      />
    );
  }

  // Full: icon + text side by side
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={tNexusLogo}
        alt="T-Nexus"
        style={{ height: width * 0.35, width: 'auto' }}
      />
      <img
        src={textSrc}
        alt="T-Nexus"
        style={{ width: width * 0.7, height: 'auto' }}
      />
    </div>
  );
}

export function TNexusIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <img
      src={tNexusLogo}
      alt="T-Nexus"
      className={className}
    />
  );
}
