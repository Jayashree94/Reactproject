import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {}, "Iam a Div tag");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
