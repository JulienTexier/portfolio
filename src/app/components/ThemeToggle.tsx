'use client';

import { IconButton } from '@/once-ui/components';

export function ThemeToggle({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <IconButton
      onClick={toggleTheme}
      icon={theme === 'light' ? 'moon' : 'sun'}
      aria-label={
        theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      }
    />
  );
}
