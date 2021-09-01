function ThemeToggle(){
    return (
    <div id="theme-selector">
        <label id="theme-label">THEME</label>
        <div id="theme-toggle" class="flex-grid">
            <div id="theme-indicators" class="flex-row">
                <label for="theme-1-button">1</label>
                <label for="theme-2-button">2</label>
                <label for="theme-3-button">3</label>
            </div>
            <div id="theme-switch" class="flex-row">
                <input type="radio" id="theme-1-button" name="background-theme" value="1"/>
                <input type="radio" id="theme-2-button" name="background-theme" value="2"/>
                <input type="radio" id="theme-3-button" name="background-theme" value="3"/>
            </div>
        </div>
    </div>
    );
}
export default ThemeToggle;