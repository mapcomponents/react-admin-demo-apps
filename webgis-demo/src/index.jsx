import { MapComponentsProvider } from "@mapcomponents/react-maplibre";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {DataContextProvider} from './context/DataContext'

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <MapComponentsProvider>
        <App />
      </MapComponentsProvider>
    </DataContextProvider>
  </React.StrictMode>
);
