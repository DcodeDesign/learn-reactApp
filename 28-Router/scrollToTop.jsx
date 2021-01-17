import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import ScrollTop from "./ScrollTop";

const Hello = () => {
    return (
        <div className={"mt-5"}>
            <h1> Top </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Hello </h1>
            <h1> Bottom </h1>
        </div>
    )
}


const Home = () => {
    return (
        <div className={"mt-5"}>
            <h1> Top </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Home </h1>
            <h1> Bottom </h1>

        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <ScrollTop>
                    <div>
                        <div className={"p-2 w-100 d-flex border fixed-top flex-row bg-white"}>
                            <NavLink to={"/home"} className={"m-2"} activeClassName={"text-danger"}> Home </NavLink>
                            <NavLink to={"/hello"} className={"m-2"} activeClassName={"text-danger"}> Hello </NavLink>
                        </div>
                        <div style={{minHeight: '100vh'}}
                             className={"d-flex text-center flex-center flex-column justify-content-center mt-5 mb-5"}>
                            <Switch>
                                <Route path={"/home"} component={Home}/>
                                <Route path={"/hello"} component={Hello}/>
                                <Redirect to={"/home"}/>
                            </Switch>
                        </div>
                    </div>
                </ScrollTop>
            </Router>
        )
    }
}

render(<App/>, document.getElementById('root'))
