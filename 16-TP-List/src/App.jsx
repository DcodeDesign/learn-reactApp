import {render} from 'react-dom';
import React from 'react';
import './style.css'

const LIST = [{
    name: 'Jhon',
    age: 31
}, {
    name: 'Henri',
    age: 45
}, {
    name: 'Thomas',
    age: 33
}, {
    name: 'Julie',
    age: 38
}, {
    name: 'Anna',
    age: 28
}]

let ComponentList = (props) => {
    return (
        <li>
            {props.person.name} {props.person.age}
            <button onClick={props.deletePerson}> X</button>
        </li>
    );
}

class InputList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        }
    }

    handlerInput = (e) => {
        let name = e.target.name;
        console.log(name);
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <form id={"form"} >
                    <input type={"text"}
                           placeholder="Name"
                           name={"name"}
                           value={this.state.name}
                           onChange={this.handlerInput}/>
                    <input type={"text"}
                           placeholder="Age"
                           name={"age"}
                           value={this.state.age}
                           onChange={this.handlerInput}/>
                           <button type={"submit"}>Envoyer</button>
                </form>
            </>
        );
    }

}

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: LIST,
            input: ''
        }
    }

    deletePerson = (index) => {
        let list = [...this.state.list];
        list.splice(index, 1)
        this.setState({list})
    }

    mapList = () => {
        return (
            this.state.list.map((li, index) => {
                return <ComponentList key={index}
                                      person={li}
                                      deletePerson={(index) => this.deletePerson(index)}/>
            })
        );
    }


    render() {
        return (
            <>
                <InputList/>
                <ul>
                    {this.mapList()}
                </ul>
            </>
        );
    }
}


render(
    <App/>,
    document.getElementById('root')
)


