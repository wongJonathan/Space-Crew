import { ICard } from "components/cards/Card";
import { ITaskCard } from "components/cards/TaskCard";
import { COLOR, TOKEN_TYPE } from "constants/globalConfigs";
import React from "react";
import { PlayerView } from "./components/playerView/PlayerView";

const TEST_CARDS: ICard[] = [
  { value: 9, color: COLOR.BLUE },
  { value: 3, color: COLOR.YELLOW },
  { value: 1, color: COLOR.GREEN },
  { value: 8, color: COLOR.RED },
  { value: 1, color: COLOR.ROCKET },
];

const TEST_TASKS: ITaskCard[] = [
  { value: 9, color: COLOR.BLUE, token: TOKEN_TYPE.AFTER_1 },
  { value: 3, color: COLOR.YELLOW, token: TOKEN_TYPE.BEFORE_2 },
  { value: 1, color: COLOR.GREEN, token: TOKEN_TYPE.FIRST },
  { value: 8, color: COLOR.RED, token: TOKEN_TYPE.LAST },
  { value: 1, color: COLOR.ROCKET, token: TOKEN_TYPE.THIRD },
];

export const MainGame: React.VFC = () => {
  return (
    <div className="grid-cols-3 grid-rows-3">
      <div className="Mission name" />
      <div className="Player 3" />
      <div className="Settings" />
      <div className="Player 2" />
      <div className="Table view" />
      <PlayerView orientation="south" tasks={TEST_TASKS} cards={TEST_CARDS} />
      <div className="Communication" />
      <div className="Your view" />
    </div>
  );
};
