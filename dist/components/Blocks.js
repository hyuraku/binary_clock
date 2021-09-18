import React from "../../snowpack/pkg/react.js";
import {Block} from "./Block.js";
export const Blocks = React.memo(({value}) => {
  const value_arr = value.split("");
  const number = parseInt(value, 2);
  const blockList = value_arr.map((value2) => {
    return /* @__PURE__ */ React.createElement(Block, {
      value: value2
    });
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "Blocks"
  }, blockList, /* @__PURE__ */ React.createElement("h1", null, number));
});
Blocks.displayName = "BLocks";
