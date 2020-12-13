let n = 0;

/*
function render() {
    const title = React.createElement(
        'h1', {}, 'Hello world ',
        React.createElement('span', {}, n)
    )

    ReactDOM.render(title, document.querySelector('#app'));

}

*/

function render() {
   document.querySelector('#app').innerHTML = '<h1>Hello world <pan>' + n + '</pan></h1> ' ;

}

render();

window.setInterval(() => {
    n++
    render();
}, 1000)
