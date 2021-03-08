import PropTypes from 'prop-types';
import style from './ex03ProductListItem.module.css'

const Ex03ProductListItem = (props) => {
    const {nom, prix, promo} = props;
    const isPromo = promo ? style.promo : style.notPromo
    const displayPromo = promo ? (<span className={style.displayPromo}>PROMO</span>) : null
    const formatPrix = prix.toLocaleString("fr-FR", {style:"currency", currency: "EUR"})
    return (
        <div className={`${isPromo} ${style.article}`} >
            { displayPromo }
            <h1 > {nom} </h1>
            <p> {formatPrix} </p>
        </div>
    )
}

Ex03ProductListItem.defaultProps = {
    nom: "pas de nom",
    promo: false
}

Ex03ProductListItem.propTypes = {
    nom: PropTypes.string ,
    prix: PropTypes.number.isRequired ,
    promo: PropTypes.bool
}

export default Ex03ProductListItem;
