import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import {Blocks} from "./Blocks.js";
const Clock = React.memo(() => {
  const [dateTime, setDateime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setDateime(new Date()), 1e3);
    return () => {
      clearInterval(id);
    };
  }, []);
  const hoursString = Padding(dateTime.getHours().toString(), 2);
  const minutesString = Padding(dateTime.getMinutes().toString(), 2);
  const secondString = Padding(dateTime.getSeconds().toString(), 2);
  const binaryHours10 = Padding(toBinaryString(hoursString[0]), 2);
  const binaryHours1 = Padding(toBinaryString(hoursString[1]), 4);
  const binaryMinutes10 = Padding(toBinaryString(minutesString[0]), 3);
  const binaryMinutes1 = Padding(toBinaryString(minutesString[1]), 4);
  const binarySeconds10 = Padding(toBinaryString(secondString[0]), 3);
  const binarySeconds1 = Padding(toBinaryString(secondString[1]), 4);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "BlockArea"
  }, /* @__PURE__ */ React.createElement(Blocks, {
    value: binaryHours10
  }), /* @__PURE__ */ React.createElement(Blocks, {
    value: binaryHours1
  }), /* @__PURE__ */ React.createElement(Blocks, {
    value: binaryMinutes10
  }), /* @__PURE__ */ React.createElement(Blocks, {
    value: binaryMinutes1
  }), /* @__PURE__ */ React.createElement(Blocks, {
    value: binarySeconds10
  }), /* @__PURE__ */ React.createElement(Blocks, {
    value: binarySeconds1
  })));
});
Clock.displayName = "Clock";
const Padding = (string, start_num) => {
  return string.toString().padStart(start_num, "0");
};
const toBinaryString = (string) => {
  return parseInt(string).toString(2);
};
export default Clock;
