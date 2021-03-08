import PropTypes from 'prop-types';
import style from './ex01welcome.module.css'

const Ex01welcome = (props) => {
    const {fname, lname} = props;
    return (
        <div>
            <h2 className={style.colorRed}> Welcome </h2>
            <h1 className={style.colorBlue} > {fname} {lname}</h1>
        </div>
    )
}

Ex01welcome.defaultProps = {
    fname: ''
}

Ex01welcome.propTypes = {
    fname: PropTypes.string ,
    lname: PropTypes.string.isRequired
}

export default Ex01welcome;

