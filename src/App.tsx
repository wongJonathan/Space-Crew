import React from "react";
import "./App.css";
import { Card, ICard } from "components/cards/Card";
import { COLOR } from "constants/globalConfigs";
import { MainGame } from "pages/mainGame/MainGame";

const TEST_CARDS: ICard[] = [
  { value: 9, color: COLOR.BLUE },
  { value: 3, color: COLOR.YELLOW },
  { value: 1, color: COLOR.GREEN },
  { value: 8, color: COLOR.RED },
  { value: 1, color: COLOR.ROCKET },
];

function App() {
  return (
    <div className="App">
      <MainGame />
    </div>
  );
}

export default App;
