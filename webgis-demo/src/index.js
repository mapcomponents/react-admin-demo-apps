import { MapComponentsProvider } from "@mapcomponents/react-maplibre";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

let originalSetItem = localStorage.setItem;
localStorage.setItem = function () {
  originalSetItem.apply(this, arguments);
  const evt = new Event("storageItemUpdated", {
    bubbles: true,
    cancelable: false,
  });
  document.dispatchEvent(evt);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MapComponentsProvider>
      <App />
    </MapComponentsProvider>
  </React.StrictMode>
);
