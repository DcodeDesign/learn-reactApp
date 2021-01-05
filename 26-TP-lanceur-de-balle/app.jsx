import {render} from 'react-dom';
import React from 'react';

class ThrowBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nbrBall: 0,
            result: 0
        }
    }

    handleNbrBall = () => {
        let elem = document.getElementById('nbrBall')
        let nbrBall = parseInt(elem.value)
        if (nbrBall > 0) {
            this.setState({
                nbrBall
            })
        } else if (nbrBall <= 0) {
            this.setState({
                nbrBall: 0
            })
        }
    }

    handleThrowBall = () => {
        this.setState({
            result: this.state.nbrBall <= 0 ? this.state.result : this.state.result + 1,
            nbrBall: this.state.nbrBall <= 0 ? 0 : this.state.nbrBall - 1
        })
    }

    handleRestart = () => {
        this.setState({
            result: 0,
            nbrBall: 0
        })
    }

    render() {
        return (
            <>
                <h2 className={"text-center"}>Lanceur de balles de tennis</h2>
                <div className="text-center form-group mt-5">
                    <label htmlFor="nbrBall">Entrer un nombre de balle:</label>
                    <input id={"nbrBall"}
                           className={"text-center form-control"}
                           type={"number"}
                           name={"nbrBall"}
                           value={this.state.nbrBall}
                           onChange={this.handleNbrBall}
                    />
                </div>
                <button className={"btn btn-primary w-100"}
                        onClick={this.handleThrowBall}
                        disabled={!this.state.nbrBall}> Lancée une balle
                </button>
                <div>
                    <h3 className={"text-center mt-5"}> Balle(s) lancée(s): {this.state.result} </h3>
                </div>
                <div className="row">
                    <div className="col text-center mt-4">
                        <button className={"btn btn-primary"}
                                onClick={this.handleRestart}
                                disabled={!this.state.result}> recommencer
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

render(
    <div className={"container mt-5"}>
        <ThrowBall/>
    </div>,
    document.getElementById('root')
);
