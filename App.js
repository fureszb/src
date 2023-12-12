import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Jatekok from "./pages/Jatekok";
import TicTacToeApp from "./pages/TictacToeApp";
import LightOnApp from "./pages/LigthOnApp";
import Layout from "./Layout";
import NoPageApp from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Jatekok />} />
        <Route path="tictactoe" element={<TicTacToeApp />} />
        <Route path="lighton" element={<LightOnApp />} />
        <Route path="*" element={<NoPageApp />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
