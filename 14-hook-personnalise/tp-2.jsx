import "babel-polyfill";
import React, {useEffect, useState} from "react";
import {render} from 'react-dom';

function useFetch (url) {
    const [state, setState] = useState({
        items: [],
        loading: true
    })
    useEffect(function () {
        (async function () {
            const response = await fetch(url);
            const responseData = await response.json();
            if (response.ok) {
                setState({
                    items: responseData,
                    loading: false
                });
            } else {
                console.log(JSON.stringify(responseData));
                setState({
                    items: [],
                    loading: false
                });
            }
        })()
    }, [])

    return [state.loading, state.items];
}

function TodoList() {
    const [loading, items] = useFetch('https://jsonplaceholder.typicode.com/todos');
    if(loading){
        return 'Chargement...'
    }
    let i = 0;
    return (
        <ul>
            {items.map(t => <li key={i++}> {t.title}</li>)}
        </ul>
    )
}


function PostTable() {
    const [loading, items] = useFetch('https://jsonplaceholder.typicode.com/comments');
    if(loading){
        return 'Chargement...'
    }
    let i = 0;
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contenu</th>
                </tr>
            </thead>
            <tbody>
            {items.map( t =>  <tr key={i++}>
                    <td>{t.name}</td>
                    <td>{t.email}</td>
                    <td>{t.body}</td>
                </tr>
            )}
            </tbody>

        </table>
    );
}

render(
    <>
        <PostTable/>
        <TodoList/>
    </>,
    document.getElementById('tp-2')
)

