import {render} from 'react-dom';
import React, {useState} from 'react';
import "./style.css"

function Compteur() {
    const [count, setCount] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        setCount(10);
    }

    return (
        <button onClick={handleClick}>Nombre : {count}</button>
    );
}

function CompteurBis() {
    const [state, setState] = useState({
        a: 1
    });

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        /*setState({
            count: 10
        });*/

        setState(state => {
            return {...state, count: 10}
        });
    }

    function handleClickBis(e) {
        e.preventDefault();
        setCount(c => c + 1);
    }

    function handleClickSecond(e) {
        e.preventDefault();
        setCount2(c => c + 2);
    }

    return (
        <div>
            <div onClick={handleClick}>{JSON.stringify(state)}</div>
            <div>
                <button onClick={handleClickBis}>Incrementer: {count}</button>
            </div>
            <div>
                <button onClick={handleClickSecond}>Incrementer: {count2}</button>
            </div>
        </div>
    );
}



function useIncrement(init, step) {
    const [count, setCount] = useState(init)
    const increment = () => {
        setCount(c => c + step);
    }

    return [count, increment]
}
function CompteurFinal() {
    const[count, increment] = useIncrement(0, 2);
    return (
        <div>
            <button onClick={increment}>Incrementer: {count}</button>
        </div>
    );
}

render(
    <div>
        <Compteur/>
        <CompteurBis/>
        <CompteurFinal />
    </div>,
    document.getElementById('root')
);
