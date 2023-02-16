import { AnimatedLogo } from "ekb";
import React from "react";
import ReactDOM from "react-dom/client";
import "ekb/style.css";

const rootNode = document.getElementById("logo");
if (rootNode) {
  const root = ReactDOM.createRoot(rootNode);
  root.render(
    React.createElement(AnimatedLogo, {
      radius: "clamp(80px, 30vw, 256px)",
      withLogoHover: false,
      shadowed: true,
    })
  );
}
