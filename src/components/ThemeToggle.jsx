
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { Sun, Moon } from 'lucide-react';
import { Switch } from './ui/switch';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);

  // Apply theme to document when it changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="theme-toggle">
      <Sun size={16} className="light-icon" />
      <Switch 
        checked={isDarkMode}
        onCheckedChange={() => dispatch(toggleTheme())}
      />
      <Moon size={16} className="dark-icon" />
    </div>
  );
};

export default ThemeToggle;
