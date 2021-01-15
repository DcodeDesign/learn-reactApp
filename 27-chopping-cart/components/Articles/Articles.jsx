import React from 'react';
import {Details} from './Details'

export class Articles extends React.Component {
    render() {
        return (
            <>
                <div className={"container mt-3"}>
                    <div className="card-deck">
                        {this.props.articles.map((a, index) => (
                                <Details key={a.title + index} article={a}/>
                            )
                        )}
                    </div>
                </div>
            </>
        )
    }
}
