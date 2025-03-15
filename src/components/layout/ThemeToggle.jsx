
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '../ui/switch';
import { toggleTheme } from '../../store/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun size={18} className={`${isDarkMode ? 'text-muted-foreground' : 'text-yellow-500'}`} />
      <Switch 
        checked={isDarkMode}
        onCheckedChange={handleToggle}
        aria-label="Toggle theme"
      />
      <Moon size={18} className={`${isDarkMode ? 'text-blue-400' : 'text-muted-foreground'}`} />
    </div>
  );
};

export default ThemeToggle;
