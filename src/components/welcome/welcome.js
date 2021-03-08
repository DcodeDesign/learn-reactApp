import PropTypes from 'prop-types';
import style from './welcome.module.css'

const Welcome = (props) => {
    const {fname, lname} = props;
    return (
        <div>
            <h2 className={style.colorRed}> Welcome </h2>
            <h1 className={style.colorBlue} > {fname} {lname}</h1>
        </div>
    )
}

Welcome.defaultProps = {
    fname: ''
}

Welcome.propTypes = {
    fname: PropTypes.string ,
    lname: PropTypes.string.isRequired
}

export default Welcome;

