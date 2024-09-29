'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Flex, ToggleButton } from '@/once-ui/components';
import styles from '@/app/components/Header.module.scss';

import { routes, style } from '@/app/resources';
import { home, about, blog, work, gallery } from '@/app/resources';
import { ThemeToggle } from '@/app/components/ThemeToggle';

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = 'en-GB',
}) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? '';
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // On mount, set the theme based on localStorage value
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Function to toggle theme and update localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  console.log('style.theme', style.theme);
  return (
    <Flex
      style={{ height: 'fit-content' }}
      className={styles.position}
      as="header"
      zIndex={9}
      fillWidth
      padding="8"
      justifyContent="center"
    >
      <Flex
        hide="s"
        paddingLeft="12"
        fillWidth
        alignItems="center"
        textVariant="body-default-s"
      >
        <img
          src={
            theme === 'dark'
              ? '/images/jt-logo-dark.png'
              : '/images/jt-logo-light.png'
          }
          alt="Logo"
          style={{ width: '48px', height: '48px' }} // Adjust size and margin as needed
        />
      </Flex>
      <Flex
        background="surface"
        border="neutral-medium"
        borderStyle="solid-1"
        radius="m-4"
        shadow="l"
        padding="4"
        justifyContent="center"
      >
        <Flex gap="4" textVariant="body-default-s">
          {routes['/'] && (
            <ToggleButton
              prefixIcon="home"
              href="/"
              selected={pathname === '/'}
            >
              <Flex paddingX="2" hide="s">
                {home.label}
              </Flex>
            </ToggleButton>
          )}
          {routes['/about'] && (
            <ToggleButton
              prefixIcon="person"
              href="/about"
              selected={pathname === '/about'}
            >
              <Flex paddingX="2" hide="s">
                {about.label}
              </Flex>
            </ToggleButton>
          )}
          {routes['/work'] && (
            <ToggleButton
              prefixIcon="grid"
              href="/work"
              selected={pathname.startsWith('/work')}
            >
              <Flex paddingX="2" hide="s">
                {work.label}
              </Flex>
            </ToggleButton>
          )}
          {routes['/blog'] && (
            <ToggleButton
              prefixIcon="book"
              href="/blog"
              selected={pathname.startsWith('/blog')}
            >
              <Flex paddingX="2" hide="s">
                {blog.label}
              </Flex>
            </ToggleButton>
          )}
          {routes['/gallery'] && (
            <ToggleButton
              prefixIcon="gallery"
              href="/gallery"
              selected={pathname.startsWith('/gallery')}
            >
              <Flex paddingX="2" hide="s">
                {gallery.label}
              </Flex>
            </ToggleButton>
          )}
        </Flex>
      </Flex>
      <Flex
        hide="s"
        paddingRight="12"
        fillWidth
        justifyContent="flex-end"
        alignItems="center"
      >
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </Flex>
    </Flex>
  );
};
