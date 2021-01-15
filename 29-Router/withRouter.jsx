import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect, withRouter } from "react-router-dom";

const User = ({match}) => {
    return (
        <div>
            <h3>Profil de l'utilisateur :  {match.params.id}</h3>
        </div>
    );
}

const ListItemLink = ({ to, name, ...rest }) => (
    <Route
        path={to}
        children={() => (
            <li className="nav-item">
                <NavLink to={to} {...rest} activeClassName="active"
                         className="nav-link">{name}</NavLink>
            </li>
        )}
    />
);

const ShowTheLocationWithRouter = withRouter(({location}) => <div>L'URL (location) est {location.pathname} </div>);


const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul className="nav nav-pills nav-fill">
                    <ListItemLink to="/user/bob" name="Bob" />
                    <ListItemLink to="/user/jean" name="Jean" />
                    <ListItemLink to="/user/paul" name="Paul" />
                </ul>
            </nav>
            <Switch>
                <Route path="/user/:id" component={User} />
                <Route path="/" render={() => <div><h3>Sélectionnez un utilisateur</h3></div>} />
                <Redirect to="/"></Redirect>
            </Switch>
            <ShowTheLocationWithRouter />
        </div>

    </Router>

);

ReactDom.render(<AppRouter />, document.getElementById('root'));
