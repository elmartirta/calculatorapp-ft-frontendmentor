function Screen(props){
    return (
    <div id="screen" className="shadowed theme-1">
        <p id="screen-value">{props.value}</p>
    </div>
    );
}

export default Screen;