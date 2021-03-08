import './App.css';

import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Welcome fname={"Gravy"} lname={"Thomas"} />
      </header>
    </div>
  );
}

export default App;
