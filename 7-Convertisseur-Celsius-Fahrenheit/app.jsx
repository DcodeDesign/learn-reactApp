class Feild extends React.Component {
    render() {
        const {name, value, onChange, children} = this.props;
        return (
            <div className={"form-group"}>
                <label htmlFor={"name"}> {children} </label>
                <input type={"text"} value={value} onChange={onChange} id={name} name={name}
                       className={"form-control"}/>
            </div>
        );
    }
}

class AlertTemp extends React.Component {
    render() {
        const {celsius} = this.props;
        if (celsius < 100) {
            return (
                <div className={"alert alert-success"} role="alert">
                    Tout va bien, l'eau ne boue pas.
                </div>
            );
        } else {
            return (
                <div className={"alert alert-danger"} role="alert">
                    Attention, l'eau boue !
                </div>
            );
        }
    }
}

function celToFah(temp) {
    return (temp * 9 / 5) + 32
}

function fahToCel(temp) {
    return (temp - 32) * 5 / 9
}

function Button({children, type, ...props}) {
    return <button className={"m-1 btn btn-" + type} {...props}>{children}</button>
}

// La composition vient se substituer à l'héritage
function PrimaryButton({children, ...props}) {
    return <Button type="primary" {...props}>{children}</Button>
}

function SecondaryButton({children, ...props}) {
    return <Button type="secondary" {...props}>{children}</Button>
}

class Convertisseur extends React.Component {
    constructor(props) {
        super(props);
        this.state = Convertisseur.defaultProps;
        this.convertTempData = this.convertTempData.bind(this);
    }

    typeForm(e) {
        const type = e.target.type;
        switch (type) {
            case ('checkbox'):
                return e.target.checked;
            case ('select-multiple'):
                return Array.from(e.target.selectedOptions).map(o => o.value);
            default:
                return e.target.value
        }
    }

    typeTempCalc(e) {
        const name = e.target.name;
        switch (name) {
            case ('celsius'):
                return ({
                    [name]: this.typeForm(e),
                    fahrenheit: celToFah(this.typeForm(e))
                });
            case ('fahrenheit'):
                return ({
                    [name]: this.typeForm(e),
                    celsius: fahToCel(this.typeForm(e))
                });
            default:
                return e.target.value
        }
    }

    convertTempData(e) {
        let value = e.target.value;
        if (!isNaN(value)) {
            this.setState(this.typeTempCalc(e));
        }
    }

    render() {
        return (
            <form className={"container mt-5"}>
                <Feild name={"celsius"} value={this.state.celsius} onChange={this.convertTempData}>
                    Degré Celsius :
                </Feild>
                <Feild name={"fahrenheit"} value={this.state.fahrenheit} onChange={this.convertTempData}>
                    Degré Fahrenheit :
                </Feild>
                <AlertTemp celsius={this.state.celsius}/>
                <PrimaryButton> Envoyer </PrimaryButton>
                <SecondaryButton> Envoyer </SecondaryButton>
            </form>
        );
    }
}

Convertisseur.defaultProps = {
    celsius: 0,
    fahrenheit: 0
}

ReactDOM.render(
    <Convertisseur/>, document.querySelector("#root")
);
