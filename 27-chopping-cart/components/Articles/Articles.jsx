import React from 'react';
import {Details} from './Details'

export class Articles extends React.Component {
    render() {
        return (
            <>
                <div className={"container mt-3"}>
                    <div className="card-columns">
                        <Details />
                    </div>
                </div>
            </>
        )
    }
}
