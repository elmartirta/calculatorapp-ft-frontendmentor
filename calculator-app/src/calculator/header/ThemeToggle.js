function ThemeToggle(){
    return (
    <div id="theme-selector">
        <label id="theme-label">THEME</label>
        <div id="theme-toggle" className="flex-grid">
            <div id="theme-indicators" className="flex-row">
                <label htmlFor="theme-1-button">1</label>
                <label htmlFor="theme-2-button">2</label>
                <label htmlFor="theme-3-button">3</label>
            </div>
            <div id="theme-switch" className="flex-row">
                <input type="radio" id="theme-1-button" name="background-theme" value="1"/>
                <input type="radio" id="theme-2-button" name="background-theme" value="2"/>
                <input type="radio" id="theme-3-button" name="background-theme" value="3"/>
            </div>
        </div>
    </div>
    );
}
export default ThemeToggle;