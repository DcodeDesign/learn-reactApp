import {Component} from 'react'
import style from './ex04Compteur.module.css'

class Ex04Compteur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handlerIncrement = () => {
        this.setState((state, props) => ({
            count: this.state.count + this.props.step
        }))
    }

    handlerReset = (e) => {
        e.preventDefault();
        this.setState((state, props) => ({
            count: this.state.count = 0
        }))
    }

    showReset = () => {
        const {count} = this.state;
        if(count > 0) {
            return (
                <button type="button"
                        onClick={this.handlerReset}>
                    reset
                </button>
            )
        }
    }

    render() {
        const {count} = this.state;

        return (
            <div>
                <h1> { count } </h1>
                <button className={style.btn} type="button"
                        onClick={this.handlerIncrement}>
                    + {this.props.step}
                </button>

                <br />
                {count > 0 ? (
                    <button className={style.btn} type="button"
                            onClick={this.handlerReset}>
                        reset
                    </button>
                ) : null}

                { this.showReset }
            </div>
        )
    }
}

export default Ex04Compteur;
