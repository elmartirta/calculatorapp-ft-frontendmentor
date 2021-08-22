
import ThemeToggle from "./ThemeToggle"

function Header() {
    return (
    <div id="header">
        <h1 id="logo">calc</h1>
        <div id="theme-selector">
        <label id="theme-label">THEME</label>
        <ThemeToggle></ThemeToggle>
        </div>
    </div>
  );
}

export default Header;