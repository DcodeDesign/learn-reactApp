import React from "react";
import './App.css';
import {nanoid} from "nanoid";

import Ex01welcome from './components/ex-01-welcome/ex01welcome';
import Ex02Hello from './components/ex-02-hello/ex02Hello';
import Ex03ProductList from './components/ex-03-product-list/ex03ProductList';
import Ex04Compteur from './components/ex-04-compteur/ex04Compteur';

const products = [
    {id:nanoid(), nom: "slip", prix: 2.99, promo: false},
    {id:nanoid(), nom: "chaussette", prix: 1.60, promo: true},
    {id:nanoid(), nom: "t-shirt", prix: 4.99, promo: false},
    {id:nanoid(), nom: "pantalon", prix: 6.99, promo: false},
    {id:nanoid(), nom: "pull", prix: 5.99, promo: false},
    {id:nanoid(), nom: "chaussures", prix: 63.99, promo: true},
    {id:nanoid(), nom: "Bonnet", prix: 1.60, promo: false},
    {id:nanoid(), nom: "short", prix: 2.99, promo: false},
    {id:nanoid(), nom: "veste", prix: 52.99, promo: false},
    {id:nanoid(), nom: "chemise", prix: 22.99, promo: false},
    {id:nanoid(), nom: "casquette", prix: 3.99, promo: true},
    {id:nanoid(), nom: "training", prix: 3.99, promo: false}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/*<Ex01welcome fname={"Gravy"} lname={"Thomas"} />*/}
          {/*<Ex02Hello nom={"Gravy"} age={33} />*/}
          {/*<Ex03ProductList products={products} />*/}
          <Ex04Compteur step={1} />
      </header>
    </div>
  );
}

export default App;
