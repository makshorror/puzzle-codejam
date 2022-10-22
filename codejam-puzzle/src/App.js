import React, {useState} from "react";
import './style/App.css';
import HeaderBlock from "./components/HeaderBlock";
import UpperBtns from "./components/UpperBtns";
import Counts from "./components/Counts";
import GemGame from "./components/GemGame";
import Size from "./components/Size";

function App() {
    let [size, setSize] = useState('4x4')


  return (
    <div className="App">
      <HeaderBlock/>

      <UpperBtns/>

      <Counts/>

      <GemGame/>

      <Size/>
    </div>
  );
}

export default App;
