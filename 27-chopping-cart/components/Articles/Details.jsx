import React from 'react';

export class Details extends React.Component {
    render() {
        return (
            <>
                <div className="card">
                    <img className="card-img-top" src="https://via.placeholder.com/250x150"
                         alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">This is a longer card with supporting text below.</p>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor={"quantity"}>Quantités :</label>
                                <select className="form-control" id={"quantity"}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor={"colors"}>Couleurs :</label>
                                <select className="form-control" id={"colors"}>
                                    <option>Vert</option>
                                    <option>Jaune</option>
                                    <option>Blanc</option>
                                    <option>noir</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <button type={"button"} className={"btn btn-primary w-100"}> Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
