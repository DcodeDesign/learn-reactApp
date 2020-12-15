import 'babel-polyfill';
import React, {useEffect, useState, useMemo} from "react";
import {render} from 'react-dom';

function wait(duration){
    const t = Date.now();
    while (true) {
        if(Date.now() - t > duration) {
            return true;
        }
    }
}

function encode (number) {
    wait(1000)
    return Date.now()
}

function App() {
    const [name, setName] = useState('Jhon');
    const [number, setNumber] = useState(0);

    const onChange = function (e) {
        if(e.target.getAttribute('name') === 'name') {
            setName(e.target.value);
        }
        if(e.target.name === 'number') {
            setNumber(e.target.value);
        }
    }

    const encoded = useMemo(function() {
        return encode(number);
    }, [number])

    return (
        <div className={"container mt-5"}>
           <div className={"form-group"}>
                <label htmlFor={name}/>
                <input name={"name"} id={"name"} type={"text"} value={name} onChange={onChange}/>
            </div>
            <div className={"form-group"}>
                <label htmlFor={name}/>
                <input name={"number"} id={"number"} type={"number"} value={number}  onChange={onChange} />
            </div>
            {encoded}
        </div>
    )
}

render(
    <App />,
    document.getElementById('app')
)
