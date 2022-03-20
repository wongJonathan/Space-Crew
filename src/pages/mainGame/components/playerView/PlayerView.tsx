import { Card, ICard } from "components/cards/Card";
import { ITaskCard, TaskCard } from "components/cards/TaskCard";
import React from "react";

type Orientation = "north" | "east" | "south" | "west";

interface IPlayerView {
  orientation: Orientation;
  hideCards?: boolean;
  cards: ICard[];
  tasks: ITaskCard[];
}

export const PlayerView: React.VFC<IPlayerView> = ({
  orientation,
  hideCards = false,
  cards,
  tasks,
}) => {
  return (
    <div className="grid grid-rows-2 items-end justify-center gap-2">
      <div className="flex justify-center gap-2">
        {tasks.map((cardInfo) => (
          <TaskCard {...cardInfo} size="small" />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {cards.map((cardInfo) => (
          <Card {...cardInfo} />
        ))}
      </div>
    </div>
  );
};
