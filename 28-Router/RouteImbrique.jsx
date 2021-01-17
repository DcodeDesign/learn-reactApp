import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import ScrollTop from "./ScrollTop";

const Hello = () => {
    return (
        <div>
            <h1> Hello </h1>
        </div>
    )
}

const Home = (props) => {
    return (
        <div>
            <h1> Home </h1>
            <hr className={"w-100"}/>
            <div>
                <Link to={ props.match.url + "/sub1"} > Sub1</Link>
                <Link to={ props.match.url + "/sub2"} > Sub2 </Link>
            </div>
            <hr className={"w-100"}/>
            <div>
                <Switch>
                    <Route path={props.match.url + "/sub1"} render={() => (<h1>Sub1</h1>)}/>
                    <Route path={props.match.url + "/sub2"} render={() => (<h1>Sub2</h1>)}/>
                    <Redirect to={props.match.url + "/sub1"}/>
                </Switch>
            </div>

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
                             className={"d-flex text-center flex-center flex-column justify-content-center"}>
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
