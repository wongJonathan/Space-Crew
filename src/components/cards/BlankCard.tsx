import { COLOR } from "constants/globalConfigs";
import React from "react";
import { Card } from "./Card";

export const BlankCard: React.VFC = () => {
  return <Card value={0} color={COLOR.BLUE} isBlank />;
};
