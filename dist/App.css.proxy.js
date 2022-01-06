// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  text-align: center;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.BlockArea {\n  width: 100vw;\n  max-width: 720px;\n  display: inline-flex;\n  align-items: flex-end;\n  margin-top: 100px;\n}\n\n.Blocks {\n  width: 25%;\n}\n\n.BlackBlock {\n  background-color: rgb(0, 0, 0);\n  width: 100%;\n  padding-top: 100%;\n  border-radius: 50%;\n}\n\n.WhiteBlock {\n  background-color: rgb(255, 255, 255);\n  width: 100%;\n  padding-top: 100%;\n  border-radius: 50%;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}