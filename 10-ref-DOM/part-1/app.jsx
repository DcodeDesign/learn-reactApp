class app extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.input = null;
        this.inputBis = React.createRef();

    }

    handleClick (e) {
        console.log(this.input.value);
        console.log(this.inputBis.current.value);
    }

    render() {
        return (
            <React.Fragment>
                <input type={"text"} ref={(ref) => this.input = ref}  />
                <input type={"text"} ref={this.inputBis}  />
                <button onClick={this.handleClick}> Test </button>
            </React.Fragment>
        );

    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
)
