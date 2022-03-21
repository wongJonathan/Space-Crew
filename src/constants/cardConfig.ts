import { COLOR } from "./globalConfigs";

export type IBackendCardInfo = {
  value: string; // 0 if blank
  color: string; // black if blank
  token: string; // NONE if not token
  isEnabled: string;
};

export enum COMM_TOKEN {
  HIGHEST = "HIGHEST",
  LOWEST = "LOWEST",
  ONLY = "ONLY",
  NONE = "NONE",
}

export type Orientation = "top" | "bottom";
