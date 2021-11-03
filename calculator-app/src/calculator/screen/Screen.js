function Screen(props){
    return (
    <div id="screen" className={"shadowed " + props.theme}>
        <p id="screen-value">{props.value}</p>
    </div>
    );
}

export default Screen;