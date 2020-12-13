/*function WelcomeFunct({name, children}) {
    // console.log(props);
    return (
        <div>
            <h1>Bonjour {name}</h1>
            <p>
                {children}
            </p>
        </div>
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this)
            , 1000)
    }

    componentwillUnmount() {
        window.clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>
                il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
            </div>
        )

    }
}

function Home() {
    return (
        <div>
            <WelcomeFunct name={"Jean"}> Bonjour Tout le monde</WelcomeFunct>
            <WelcomeFunct name={"Anne"}> Bonjour Tout le monde</WelcomeFunct>
            <Clock/>
        </div>
    )
}

ReactDOM.render(
    <Home/>,
    document.querySelector("#home")
)


class Welcome extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <Welcome name={"Jean"}> Hello Tout le monde</Welcome>,
    document.querySelector("#app")
)*/

class Incrementor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {n: this.props.start}
        this.incremented = null;
    }

   componentDidMount() {
        this.incremented = window.setInterval(this.increment.bind(this)
            , 1000)
    }

    componentwillUnmount() {
        window.clearInterval(this.incremented);
    }

    increment() {
        // this.setState({n: this.state.n + 1})
        this.setState((state, props) =>{
            return {n: this.state.n + this.props.step};
        } )
    }

    render() {
        return (
            <div>
                incrementation : {this.state.n}
            </div>
        );
    }
}

Incrementor.defaultProps = {
    start: 0,
    step: 1
}


function Home() {
    return (
        <div>
            <Incrementor start={10} step={1}/>
            <Incrementor start={10} step={10}/>
        </div>
    )
}

ReactDOM.render(
    <Home />,
    document.querySelector("#incrementor")
)
