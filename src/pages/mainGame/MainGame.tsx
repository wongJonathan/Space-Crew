import { ICard } from "components/cards/Card";
import { ITaskCard } from "components/cards/TaskCard";
import { COMM_TOKEN } from "constants/cardConfig";
import { COLOR, TOKEN_TYPE } from "constants/globalConfigs";
import React from "react";
import { PlayerView } from "./components/playerView/PlayerView";

const TEST_CARDS: ICard[] = [
  { value: 9, color: COLOR.BLUE },
  { value: 3, color: COLOR.YELLOW },
  { value: 1, color: COLOR.GREEN, communication: COMM_TOKEN.ONLY },
  { value: 8, color: COLOR.RED, communication: COMM_TOKEN.LOWEST },
  { value: 1, color: COLOR.ROCKET, communication: COMM_TOKEN.HIGHEST },
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
    <div className="grid grid-rows-3 w-screen h-screen">
      <div className="flex">
        <PlayerView
          hideCards
          orientation="top"
          tasks={TEST_TASKS}
          cards={TEST_CARDS}
        />
        <PlayerView
          hideCards
          orientation="top"
          tasks={TEST_TASKS}
          cards={TEST_CARDS}
        />
      </div>
      <div>
        <div className="Mission name" />
        <div className="Table view" />
      </div>
      <div className="flex">
        <PlayerView
          orientation="bottom"
          tasks={TEST_TASKS}
          cards={TEST_CARDS}
        />
        <div className="Communication" />
        <PlayerView
          orientation="bottom"
          hideCards
          tasks={TEST_TASKS}
          cards={TEST_CARDS}
        />
      </div>
    </div>
  );
};
