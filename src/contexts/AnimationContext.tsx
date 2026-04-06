import { createContext, useContext, ReactNode } from 'react';

interface AnimationContextType {
  animationsEnabled: boolean;
}

const AnimationContext = createContext<AnimationContextType>({ animationsEnabled: true });

export function useAnimations() {
  return useContext(AnimationContext);
}

export function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <AnimationContext.Provider value={{ animationsEnabled: true }}>
      {children}
    </AnimationContext.Provider>
  );
}
