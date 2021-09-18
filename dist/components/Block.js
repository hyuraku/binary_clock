import React from "../../snowpack/pkg/react.js";
export const Block = React.memo(({value}) => {
  const blockColor = value === "1" ? "BlackBlock" : "WhiteBlock";
  return /* @__PURE__ */ React.createElement("div", {
    className: blockColor
  });
});
Block.displayName = "Block";
