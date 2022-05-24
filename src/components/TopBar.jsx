import { useState } from 'react';

const TopBar = () => {
  const [theme, setTheme] = useState('Dark Mode');

  const handleThemeChange = () => {
    const newTheme = (theme === 'Light Mode') ? 'Dark Mode' : 'Light Mode';
    setTheme(newTheme);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-info">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>

      <div className="theme-switch">
        <p>{theme}</p>
        <label htmlFor="toggle-dark" className="switch">
          <input type="checkbox" id="toggle-dark" className="toggle-theme" onClick={handleThemeChange} />
          <span className="slider" />
        </label>
      </div>
    </div>
  );
};

export default TopBar;
