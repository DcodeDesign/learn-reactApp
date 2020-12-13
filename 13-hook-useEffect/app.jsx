import {render} from 'react-dom';
import React, {useState, useEffect} from 'react';
import "./style.css"

function useIncrement(init, step) {
    const [count, setCount] = useState(init)
    const increment = () => {
        setCount(c => c + step);
    }

    return [count, increment]
}
function Compteur() {
    const[count, increment] = useIncrement(0, 1);
    useEffect(() => {
        document.title = 'Compteur ' + count;

    }, [count]);

    useEffect(() => {
        // document.title = 'Compteur ' + count;
       const timer = window.setInterval(() => {
            increment()
        },1000)

        return function() {
           clearInterval(timer)
        }

    }, [])

    return (
        <div>
            <button onClick={increment}>Incrementer: {count}</button>
        </div>
    );
}

render(
    <div>
        <Compteur />
    </div>,
    document.getElementById('root')
);
