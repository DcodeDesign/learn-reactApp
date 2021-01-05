import {render} from 'react-dom';
import React from 'react';

class Bissextile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        }
    }

    handleDate = (e) => {
        let date = parseInt(e.target.value);
        let message = "Faux";
        let calc = !((date % 4) !== 0 || ((date % 100) === 0 && (date % 400) === 0));
        if (calc) {
            message = "Vrai";
        }
        this.setState({
            result: message
        })
    }

    //

    render() {
        return (
            <>
                <h2 className={"text-center"}>Année bissextile</h2>
                <div className="text-center form-group mt-4">
                    <label htmlFor="input">Entrer une année:</label>
                    <input id={"input"}
                           className={"text-center form-control"}
                           type={"text"}
                           name={"input"}
                           placeholder={"1900..."}
                           onChange={this.handleDate}
                    />
                </div>
                <div>
                    <h3 className={"text-center"}> {this.state.result} </h3>
                </div>
            </>
        );
    }
}

render(
    <div className={"container mt-5"}>
        <Bissextile/>
    </div>,
    document.getElementById('root')
);
