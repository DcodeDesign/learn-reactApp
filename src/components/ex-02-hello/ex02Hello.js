import PropTypes from 'prop-types';
import style from './ex02Hello.module.css'

const Ex02Hello = (props) => {
    const {nom, age} = props;
    return (
        <div>
            <h1 className={style.colorRed}> {nom} </h1>
            <p className={style.colorBlue} > {age} </p>
        </div>
    )
}

Ex02Hello.defaultProps = {
    age: 18
}

Ex02Hello.propTypes = {
    nom: PropTypes.string ,
    age: PropTypes.number
}

export default Ex02Hello;

