import React from 'react';

export class Details extends React.Component {
    constructor(props) {
        super(props);
        this.quanti = []
    }

    quantityOptions = () => {
        for(let i = 1; i <= this.props.article.quantity; i++){
            this.quanti.push(<option>{i}</option>)
        }
    }

    render() {
        this.quantityOptions();
        console.log(this.quanti);
        return (
            <>
                <div className="card">
                    <img className="card-img-top" src="https://via.placeholder.com/250x150"
                         alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.article.title}</h5>
                        <p className="card-text">{this.props.article.description}</p>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor={"quantity"}>Quantités :</label>
                                <select className="form-control" id={"quantity"}>
                                    {this.quanti}
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor={"colors"}>Couleurs :</label>
                                <select className="form-control" id={"colors"}>
                                    {this.props.article.colors.map(elem => (
                                        <option>{elem}</option>
                                    ))}
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
