import { Token } from "components/token/Token";
import { TOKEN_TYPE } from "constants/globalConfigs";
import React from "react";
import { Card, ICard } from "./Card";

export interface ITaskCard extends ICard {
  token: TOKEN_TYPE;
}

export const TaskCard: React.VFC<ITaskCard> = ({ token, ...cardInfo }) => {
  return (
    <div>
      <Token tokenType={token} />
      <Card {...cardInfo} />
    </div>
  );
};
