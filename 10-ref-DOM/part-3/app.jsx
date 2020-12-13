class Field extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <input type={"text"} ref={this.props.forwardRef}/>
            </React.Fragment>
        )
    }
}

const FieldWithRef = React.forwardRef( (props, ref) =>{
    return (<Field forwardRef={ref} {...props} />);
});


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.input = React.createRef();
    }

    handleClick (e) {
        console.log(this.input.current.value);
    }

    render() {
        return (
            <React.Fragment>
                <FieldWithRef ref={this.input} label={"label"}/>
                <button onClick={this.handleClick}> Test </button>
            </React.Fragment>
        );

    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
)
