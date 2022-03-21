import React from "react";
import { TOKEN_TYPE } from "constants/globalConfigs";
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { ChevronTripleRightIcon } from "components/icons/ChevronTripleRightIcon";
import { ChevronQuadrupleRightIcon } from "components/icons/ChevronQuadrupleRightIcon";

interface IToken {
  tokenType: TOKEN_TYPE;
}

const TOKEN_IMAGE = {
  [TOKEN_TYPE.BEFORE_2]: <ChevronRightIcon className="text-white" />,
  [TOKEN_TYPE.AFTER_1]: <ChevronDoubleRightIcon className="text-white" />,
  [TOKEN_TYPE.AFTER_2]: <ChevronTripleRightIcon className="text-white" />,
  [TOKEN_TYPE.AFTER_3]: <ChevronQuadrupleRightIcon className="text-white" />,
  [TOKEN_TYPE.FIRST]: <div>1</div>,
  [TOKEN_TYPE.SECOND]: <div>2</div>,
  [TOKEN_TYPE.THIRD]: <div>3</div>,
  [TOKEN_TYPE.FOURTH]: <div>4</div>,
  [TOKEN_TYPE.FIFTH]: <div>5</div>,
  [TOKEN_TYPE.LAST]: <div>Ω</div>,
};

export const Token: React.VFC<IToken> = ({ tokenType }) => {
  return (
    <div className="w-8 h-8 rounded-md bg-black  text-white ">
      {TOKEN_IMAGE[tokenType]}
    </div>
  );
};
