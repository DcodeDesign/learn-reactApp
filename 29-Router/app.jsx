import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, NavLink, Redirect} from 'react-router-dom'

const Composant1 = (props) => {
    console.log(props);
    // props.history.push('/2');
    const isLoggedin = props.isLoggedin ? props.isLoggedin : false;
    const params = new URLSearchParams(props.location.search);
    console.log(params.get('name'))
    return (
        <div>
            { isLoggedin ?
                (
                    <h1> Composant 1 </h1>
                ) : (
                    <Redirect to={"/2"} />
                )
            }
        </div>

    );
}
const Composant2 = () => (<h1> Composant 2 </h1>)
const Composant5 = () => (<h1> Composant 5 </h1>)
const Composant6 = () => (<h1> Not Found </h1>)

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className={"p-2 w-100 d-flex border flex-row"}>
                        <Link to={ {pathname: '/user/123', search: '?name=test'} } className={"m-2"}>Composant 1</Link>
                        <Link to={"/2"} className={"m-2"}>Composant 2</Link>
                        <NavLink activeClassName="text-danger" activeStyle={{fontWeight:'bold'}} to={"/3"} className={"m-2"}>Render component</NavLink>
                        <NavLink activeClassName="text-danger" activeStyle={{fontWeight:'bold'}} to={"/4"} className={"m-2"}>Children component</NavLink>
                    </div>
                    <div style={{minHeight: '100vh'}} className={"d-flex text-center flex-column justify-content"}>
                        <Switch>
                            <Route exact path={"/user/:id"}  render={(props) => (<Composant1 {...props} isLoggedin={true} />)}/>
                            <Route path={"/2"} component={Composant2}/>
                            <Route path={"/3"} render={() => (<h1>Render component</h1>)}/>
                            <Route path={"/4"} children={() => (<h1>Children component</h1>)}/>

                            <Route path={"/5"} component={Composant5}/>
                            <Redirect from={"/123"} to={"/1"} />
                            <Route component={Composant6}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);
