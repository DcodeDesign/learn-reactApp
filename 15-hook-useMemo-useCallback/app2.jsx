import 'babel-polyfill';
import React, {useEffect, useState, useMemo, useCallback} from "react";
import {render} from 'react-dom';

const Button = React.memo(function ({onClick}) {
    console.log('render');
    return <button onClick={onClick}>Mon Bouton</button>;
})

function App() {
    const [count, setCount] = useState(0);

    function counter() {
        setCount(c => c + 1);
    }

    /*const handleClick = useMemo(
        function () {
            return () => {
                alert('Bonjour');
            }
        }, [])*/

    const handleClick = useCallback(() => {
        alert('Bonjour ' + count);
    }, [count])

    return (
        <div className="container mt-5">
            <Button onClick={handleClick}/>
            <button onClick={counter}>Increment {count}</button>
        </div>
    )
}

render(
    <App/>,
    document.getElementById('app')
)
