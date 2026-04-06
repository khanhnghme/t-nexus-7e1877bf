import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ProjectInfo {
  projectId?: string;
  projectName?: string;
  zaloLink?: string | null;
}

interface DashboardLayoutContextType {
  projectInfo: ProjectInfo;
  setProjectInfo: (info: ProjectInfo) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleSidebar: () => void;
}

const DashboardLayoutContext = createContext<DashboardLayoutContextType | null>(null);

export function DashboardLayoutProvider({ children }: { children: ReactNode }) {
  const [projectInfo, setProjectInfoState] = useState<ProjectInfo>({});
  const [sidebarCollapsed, setSidebarCollapsedState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebar_collapsed');
      if (saved !== null) return saved === 'true';
      // Default: collapsed on mobile, expanded on desktop
      return window.innerWidth < 1024;
    }
    return false;
  });

  const setProjectInfo = useCallback((info: ProjectInfo) => {
    setProjectInfoState(info);
  }, []);

  const setSidebarCollapsed = useCallback((collapsed: boolean) => {
    setSidebarCollapsedState(collapsed);
    localStorage.setItem('sidebar_collapsed', String(collapsed));
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsedState(prev => {
      const next = !prev;
      localStorage.setItem('sidebar_collapsed', String(next));
      return next;
    });
  }, []);

  return (
    <DashboardLayoutContext.Provider value={{ projectInfo, setProjectInfo, sidebarCollapsed, setSidebarCollapsed, toggleSidebar }}>
      {children}
    </DashboardLayoutContext.Provider>
  );
}

export function useDashboardLayoutContext() {
  const ctx = useContext(DashboardLayoutContext);
  if (!ctx) throw new Error('useDashboardLayoutContext must be used within DashboardLayoutProvider');
  return ctx;
}
