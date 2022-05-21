import { useState } from 'react';

const TopBar = () => {
  const [theme, setTheme] = useState('Light Mode');

  const handleThemeChange = () => {
    const newTheme = (theme === 'Light Mode') ? 'Dark Mode' : 'Light Mode';
    setTheme(newTheme);
  };

  return (
    <div className="top-bar">
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
      <p>{theme}</p>
      <label htmlFor="toogle-dark">
        Dark Mode

        <input type="button" value="X" id="toogle-dark" onClick={handleThemeChange} />
      </label>
    </div>
  );
};

export default TopBar;
