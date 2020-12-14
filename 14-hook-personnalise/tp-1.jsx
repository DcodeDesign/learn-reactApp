import {render} from 'react-dom';
import React, {useState, useEffect} from 'react';
import "./style.css"

/**
 * @param init
 * @param step
 * @returns {(number|increment)[]}
 */
function useIncrement(init = 0, step = 1) {
    const [count, setCount] = useState(init)
    const increment = () => {
        setCount(c => c + step)
    }
    return [count, increment]
}

/**
 *
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
function Incrementer({id}) {
    const [count, increment] = useIncrement(10, 2)
    return (
        <button id={id} onClick={increment}>Increment: {count}</button>
    );
}

/**
 *
 * @param init
 * @param idElem
 * @returns [compteurVisible, toggle]
 */
function useToggle(init = 0, idElem) {

    const [compteurVisible, toggleCompteur] = useState(init)
    const toggle = () => {
        toggleCompteur(v => !v)
    }

    useEffect(() => {
            const elem = document.getElementById(idElem);
            if(compteurVisible) {
                elem.style.display = "inline"
            } else {
                elem.style.display = "none"
            }
        }
    );

    return [compteurVisible, toggle]
}

/**
 * @param init
 * @param step
 * @returns {number}
 */
function useAutoIncrement(init = 0, step = 1){
    const [initValue, increment] = useIncrement(init, step);
    useEffect(function (){
        const timer = window.setInterval(function () {
            increment();
        }, 1000);

        return (
            function(){clearInterval(timer)}
        );
    }, []);

    return initValue;
}


/**
 * @param idElem
 * @returns {JSX.Element}
 */
function Tp1({idElem}) {
    const [compteurVisible, toggleCompteur] = useToggle(true,idElem);
    const count = useAutoIncrement(0, 2);
    return (
        <>
            <label htmlFor={"toggle"}>Afficher compteur</label>
            <input type={"checkbox"} onChange={toggleCompteur} checked={compteurVisible}/>
            <br/>
            <Incrementer id={idElem}/>

            <div>{count}</div>
        </>
    )
}

/**
 * render()
 */
render(
    <>
        <Tp1 idElem={"elementer"}/>
        <hr />
        <Tp1 idElem={"elementer2"}/>
        <hr />
        <Tp1 idElem={"elementer3"}/>
        <hr />
    </>,
    document.getElementById('tp-1')
)
