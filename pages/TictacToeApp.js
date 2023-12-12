import { useState } from 'react';
import Jatekter from '../komponensTicTacToe/JatekTer.js';
import TModel from '../model/Tmodel.js';
const tmodel=new TModel();
export default function TicTacToeApp(){

    const [lista, setLista] = useState(tmodel.getList());
  function kattintas(index) {
    console.log(index);
    tmodel.setAllapot(index);
    setLista(tmodel.getList());
    console.log(lista);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tictactoe</h1>


      </header>
      <article>
        <Jatekter lista={lista} kattintas={kattintas} />
      </article>
    </div>
  );
}