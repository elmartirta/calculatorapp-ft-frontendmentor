function Screen(props){
    return (
    <div id="screen" className="shadowed">
        <p id="screen-value">{props.value}</p>
    </div>
    );
}

export default Screen;