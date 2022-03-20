import { COLOR } from "constants/globalConfigs";
import React from "react";

export interface ICard {
  value: number;
  color: COLOR;
  isBlank?: boolean;
  size?: "small" | "large";
}

const COLOR_NAMES = {
  [COLOR.BLUE]: "Blue",
  [COLOR.GREEN]: "Green",
  [COLOR.RED]: "Red",
  [COLOR.YELLOW]: "Yellow",
  [COLOR.ROCKET]: "Rocket",
};

export const Card: React.VFC<ICard> = ({
  value,
  color,
  isBlank = false,
  size = "large",
}) => {
  return (
    <div
      className={`${
        size === "large" ? "h-64 w-32" : "h-32 w-16"
      } rounded-lg flex flex-col justify-center items-center`}
      style={{ backgroundColor: color }}
    >
      {!isBlank && (
        <>
          <div>{value}</div>
          <div>{COLOR_NAMES[color]}</div>
        </>
      )}
    </div>
  );
};
