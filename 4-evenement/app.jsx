/*
* Manual incrementor
*/
class ManualIncrementor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        }
    }

    increment(e) {
        // console.log(e) // synthetic event
        e.preventDefault()
        this.setState((state, props) => ({n: this.state.n + 1}))
    }

    render() {
        return (
            <div>
                <span> {this.state.n} </span>
                <button onClick={this.increment.bind(this)}>Incrémenter</button>
            </div>
        );

    }
}

function InitManualIncrementor() {
    return (
        <ManualIncrementor/>
    )
}

/*
* Auto Incrementor
*/
class AutoIncrementor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: this.props.start,
            incremented: null
        }
        this.toggle = this.toggle.bind(this);
        this.reset = this.reset.bind(this)
    }

    componentDidMount() {
        this.play();
    }

    componentwillUnmount() {
        window.clearInterval(this.state.incremented);
    }

    increment() {
        this.setState((state, props) => {
            return {n: this.state.n + this.props.step};
        })
    }

    stop() {
        window.clearInterval(this.state.incremented);
        this.setState({
            incremented :  null
        });
    }

    play() {
        window.clearInterval(this.state.incremented);
        this.setState({
            incremented: this.state.incremented = window.setInterval(this.increment.bind(this), 1000)
        });
    }

    toggle() {
        return this.state.incremented ? this.stop() : this.play();
    }

    label() {
        return this.state.incremented ? "Pause" : "Play";
    }

    reset() {
        this.stop();
        this.setState((state, props) => {
            return {n: this.props.start};
        })
    }

    render() {
        return (
            <div>
                incrementation : {this.state.n}
                <button onClick={this.reset}> Reset </button>
                <button onClick={this.toggle}> {this.label()} </button>
            </div>
        );
    }
}

AutoIncrementor.defaultProps = {
    start: 0,
    step: 1
}

function InitAutoIncrementor() {
    return (
        <div>
            <AutoIncrementor start={10} step={1}/>
            <AutoIncrementor start={10} step={10}/>
        </div>
    )
}


/*
* ReactDOM.render
*/
ReactDOM.render(
    <React.Fragment>
        <InitManualIncrementor/>
        <InitAutoIncrementor/>
    </React.Fragment>,
    document.querySelector("#root")
);

