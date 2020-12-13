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

function Checkbox({name, value, onChange, children}) {
    return (
        <div className={"form-group form-check"}>
            <input type={"checkbox"} checked={value} onChange={onChange} id={name} name={name}
                   className={"form-check-input"}/>
            <label htmlFor={"name"} className={"form-check-label"}> {children} </label>
        </div>
    )
}

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = Form.defaultProps;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    typeForm(e) {
        const type = e.target.type;
        switch (type) {
            case ('checkbox'):
                return e.target.checked
                break;
            case ('select-multiple'):
                return Array.from(e.target.selectedOptions).map(o => o.value)
                break;
            default:
                return e.target.value
        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = this.typeForm(e);
        this.setState({
            [name]: value
        })
    }

    multiSelector(e) {
        this.setState({
            noms: Array.from(e.target.selectedOptions).map(o => o.value)
        })
    }

    checked(e) {
        this.setState({
            checkTerms: e.target.checked
        })
    }

    messageChecked() {
        return this.state.checkTerms ? "oui" : "non";
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = JSON.stringify(this.state);
        console.log(data)
        this.setState(Form.defaultProps)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form className={"container mt-5"} onSubmit={this.handleSubmit}>

                            <Feild name={"nom"} value={this.state.nom} onChange={this.handleChange}> Ton nom :</Feild>

                            <div className={"form-group"}>
                                <label htmlFor={"desc"}>Ta description :</label> <br/>
                                <textarea id={"desc"} name={"desc"} value={this.state.desc} onChange={this.handleChange}
                                          className={"form-control"}/>
                            </div>

                            <div className={"form-group"}>
                                <label htmlFor={"genre"}>Ton genre :</label> <br/>
                                <select id={"genre"} name={"genre"} value={this.state.genre}
                                        onChange={this.handleChange}
                                        className={"form-control"}>
                                    <option value={"Femme"}>Femme</option>
                                    <option value={"Homme"}>Homme</option>
                                    <option value={"Autre"}>Autre</option>
                                </select>
                            </div>

                            <div className={"form-group"}>
                                <label htmlFor={"loisirs"}>Tes loisirs :</label> <br/>
                                <select id={"loisirs"} name={"loisirs"} value={this.state.loisirs}
                                        onChange={this.handleChange} className={"form-control"} multiple>
                                    <option value={"Sport"}>Sport</option>
                                    <option value={"Jeux video"}>Jeux video</option>
                                    <option value={"Film"}>Film</option>
                                    <option value={"Autres"}>Autres</option>
                                </select>
                            </div>

                            {/*<div className={"form-group form-check"}>
                                <input id={"checkTerms"} name={"checkTerms"} type={"checkbox"}
                                       checked={this.state.checkTerms} onChange={this.handleChange}
                                       className={"form-check-input"}/>
                                <label htmlFor={"checkTerms"}>J'accepte : <span>{this.messageChecked()}</span></label>
                            </div>*/}

                            <Checkbox name={"checkTerms"} value={this.state.checkTerms}
                                      onChange={this.handleChange}> J'accepte : <span>{this.messageChecked()}</span>
                            </Checkbox>

                            <div>
                                <button className={"btn btn-primary"}> Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6">
                        <div class={"mt-5"}>
                            <h3>je m'appelle {this.state.nom},</h3>
                            <p>{this.state.desc}</p>
                            <p>Je suis un(e) {this.state.genre}</p>
                            <p> J'aime : {this.state.loisirs}</p>
                            <p>J'accepte les termes du contrat : {this.messageChecked()}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Form.defaultProps = {
    nom: '',
    desc: '',
    genre: '',
    loisirs: [],
    checkTerms: false
}

/*
* ReactDOM.render
*/
ReactDOM.render(
    <React.Fragment>
        <Form/>
    </React.Fragment>,
    document.querySelector("#root")
);
