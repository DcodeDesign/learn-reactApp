import React, {Component, lazy, Suspense} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect, withRouter, Prompt} from "react-router-dom";

const Home = (props) => {
    console.log(props.isLoggedIn);
    return (
        <div>
            {!props.isLoggedIn ? (
                <div>
                    <h1> Connexion </h1>
                    <button onClick={props.login}> Login</button>
                </div>
            ) : (
                <div>
                    <h1> Vous êtes connecté </h1>
                </div>
            )}
        </div>
    )
}

class Profile extends Component {

    render() {
        return (
            <div>
                <Prompt when={true} message={"Vous n'avez pas sauvegarder vos changement"}/>
                <div>
                    <h1> Bonjour !</h1>
                    <button onClick={this.props.logout}> Logout</button>
                </div>
            </div>
        )
    }
}

class Account extends Component {
    render() {
        return (<h1> Account </h1>);
    }
}

const LazyPage = lazy(() => import('./Page'));

const PrivateRoute = ({component: Component, path, ...rest}) => {
    return <Route path={path}
                  render={
                      (props) => rest.isLoggedIn ? <Component {...props} {...rest}/> : <Redirect to={"/home"}/>
                  }/>
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    logout = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    login = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <div className={"p-2 w-100 d-flex border flex-row"}>
                        <NavLink to={"/home"} activeClassName={"text-danger"} className={"m-2"}> Home </NavLink>
                        <NavLink to={"/profile"} activeClassName={"text-danger"} className={"m-2"}> Profile </NavLink>
                        <NavLink to={"/account"} activeClassName={"text-danger"} className={"m-2"}> Account </NavLink>
                        <NavLink to={"/page"} activeClassName={"text-danger"} className={"m-2"}> Page </NavLink>
                    </div>
                    <div style={{minHeight: '100vh'}}
                         className={"d-flex text-center flex-column justify-content-center"}>
                        <Suspense fallback={<div>Chargement en cours...</div>}>
                            <Switch>
                                <Route path={"/home"}
                                       render={() => <Home isLoggedIn={this.state.isLoggedIn} login={this.login}/>}/>
                                <PrivateRoute path={"/profile"}
                                              component={Profile}
                                              isLoggedIn={this.state.isLoggedIn}
                                              logout={this.logout}/>
                                <PrivateRoute path={"/account"}
                                              component={Account}
                                              isLoggedIn={this.state.isLoggedIn}
                                              logout={this.logout}/>
                                <Route path={"/page"} component={LazyPage}/>
                                <Redirect to={"/home"}/>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'))
