import React from 'react';

export class NavBar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">Shopping Cart</a>
                    <div className="form-inline">
                        <button type="button" className="btn btn-primary">
                            Panier <span className="badge badge-light">0</span>
                        </button>
                    </div>
                </nav>
            </>
        )
    }
}
