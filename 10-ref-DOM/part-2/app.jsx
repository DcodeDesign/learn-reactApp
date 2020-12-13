const Field = React.forwardRef(function Field (props, ref) {
    return (
        <React.Fragment>
            <input type={"text"} ref={ref}/>
        </React.Fragment>
    )
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
                <Field ref={this.input}/>
                <button onClick={this.handleClick}> Test </button>
            </React.Fragment>
        );

    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
)
