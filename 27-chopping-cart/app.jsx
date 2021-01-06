import {render} from 'react-dom';
import React from 'react';
import {NavBar, Articles} from "./components";
import {DATAS} from "./data";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null
        }
    }

    componentWillMount() {
        this.setState({
            articles: DATAS
        })
    }

    render() {
        return (
            <>
                <NavBar/>
                <Articles articles={this.state.articles}/>
            </>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);
