import { useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * Forces light mode while this component is mounted.
 * When unmounted (navigating to a protected route), restores the user's saved theme.
 */
export function ForceLightMode({ children }: { children: React.ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // Save current theme before forcing light
    const previousTheme = resolvedTheme;

    // Only set if not already light to avoid unnecessary re-renders
    if (resolvedTheme !== 'light') {
      setTheme('light');
    }

    return () => {
      // Restore previous theme when leaving public page
      if (previousTheme && previousTheme !== 'light') {
        setTheme(previousTheme);
      }
    };
    // Run only once on mount — intentionally no deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
