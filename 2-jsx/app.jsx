let n = 0;

function numberFormat(n) {
    return n.toString().padStart(2, '0');
}

function render() {
    const items = [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4'
    ];
    const liste = items.map((item, key) => <li key={key}>{item}</li>)
    const title =
        <React.Fragment>
            <h1 className={"big-title"} id={"title" + n}>Hello World
                <span> {numberFormat(n)}</span>
            </h1>
            <ul>
                {liste}
            </ul>
        </React.Fragment>
    ReactDOM.render(title, document.querySelector('#app'));
}

render();
window.setInterval(() => {
    n++
    render();
}, 1000)
