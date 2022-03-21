import { Card, ICard } from "components/cards/Card";
import { ITaskCard, TaskCard } from "components/cards/TaskCard";
import { Orientation } from "constants/cardConfig";
import React, { useState } from "react";

interface IPlayerView {
  orientation: Orientation;
  cards: ICard[];
  tasks: ITaskCard[];
  hideCards?: boolean;
}

export const PlayerView: React.VFC<IPlayerView> = ({
  orientation,
  cards,
  tasks,
  hideCards = false,
}) => {
  const [playedCard, setPlayedCard] = useState<ICard | null>(null);
  const [hasConfirmedCard, setHasConfirmedCard] = useState(false);

  const confirmCard = () => {
    setHasConfirmedCard(true);
  };

  const onSelectCard = (cardInfo: ICard) => () => {
    if (hasConfirmedCard) {
      return;
    }
    setPlayedCard(cardInfo);
  };

  return (
    <div className="flex flex-col justify-center gap-2">
      {playedCard && (
        <div>
          {!hasConfirmedCard && (
            <button className="w-100" onClick={confirmCard}>
              Confirm
            </button>
          )}
          <Card {...playedCard} />
        </div>
      )}
      <div
        className={`flex ${
          orientation === "top" ? "order-last" : ""
        } justify-center gap-2`}
      >
        {tasks.map((cardInfo) => (
          <TaskCard {...cardInfo} size="small" />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {cards.map((cardInfo) => (
          <Card
            {...cardInfo}
            isBlank={hideCards}
            onClick={onSelectCard(cardInfo)}
          />
        ))}
      </div>
    </div>
  );
};
