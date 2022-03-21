import { Circle } from "components/icons/Circle";
import { COMM_TOKEN, Orientation } from "constants/cardConfig";
import { COLOR } from "constants/globalConfigs";
import React from "react";

export interface ICard {
  value: number;
  color: COLOR;
  isBlank?: boolean;
  size?: "small" | "large";
  enabled?: boolean;
  communication?: COMM_TOKEN;
  onClick?: () => void;
}

const COLOR_NAMES = {
  [COLOR.BLUE]: "Blue",
  [COLOR.GREEN]: "Green",
  [COLOR.RED]: "Red",
  [COLOR.YELLOW]: "Yellow",
  [COLOR.ROCKET]: "Rocket",
};

const NORMAL_HEIGHT = 12;
const NORMAL_WIDTH = 8;

export const Card: React.VFC<ICard> = ({
  value,
  color,
  isBlank = false,
  size = "large",
  onClick,
  enabled = true,
  communication = COMM_TOKEN.NONE,
}) => {
  const height = NORMAL_HEIGHT * (size === "large" ? 1 : 0.5);
  const width = NORMAL_WIDTH * (size === "large" ? 1 : 0.5);
  const canClick = enabled && !isBlank;

  const onCardSelect = () => {
    if (canClick && onClick) {
      onClick();
    }
  };
  return (
    <div className="flex flex-col items-center">
      {communication === COMM_TOKEN.HIGHEST && (
        <Circle aria-label={communication} />
      )}

      <div
        className={`rounded-lg flex flex-col justify-center items-center ${
          enabled ? "" : "brightness-75"
        }`}
        style={{
          backgroundColor: isBlank ? "black" : color,
          height: `${height}rem`,
          width: `${width}rem`,
          cursor: canClick && size !== "small" ? "pointer" : "auto",
        }}
        onClick={onCardSelect}
      >
        {!isBlank && (
          <>
            <div>{value}</div>
            <div>{COLOR_NAMES[color]}</div>
          </>
        )}
        {communication === COMM_TOKEN.ONLY && (
          <Circle aria-label={communication} />
        )}
      </div>
      {communication === COMM_TOKEN.LOWEST && (
        <Circle aria-label={communication} />
      )}
    </div>
  );
};
