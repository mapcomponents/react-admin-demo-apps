import { useState } from "react";

import { Admin, Resource } from "react-admin";
import localStorageDataProvider from "./ra_components/lsDataProvider";
import { PoiEdit, PoiCreate, PoiShow, PoiList } from "./ra_components/Poi";
import {
  PropertyCreate,
  PropertyEdit,
  PropertyList,
  PropertyShow,
} from "./ra_components/Property";
import {
  RouteCreate,
  RouteEdit,
  RouteList,
  RouteShow,
} from "./ra_components/Route";
import GisLayout from "./ra_components/GisLayout";
import { MapLibreMap } from "@mapcomponents/react-maplibre";

import "maplibre-gl/dist/maplibre-gl.css";
import DataLayers from "./components/DataLayers";

const dataProvider = localStorageDataProvider({
  localStorageUpdateDelay: 2,
  defaultData: {
    pois: [{ id: 0, title: "poi", geom: "" }],
    properties: [{ id: 0, title: "property", geom: "" }],
    routes: [{ id: 0, title: "route", geom: "" }],
  },
});

function App() {
  return (
    <>
      <Admin dataProvider={dataProvider} layout={GisLayout}>
        <Resource
          name="pois"
          list={PoiList}
          show={PoiShow}
          edit={PoiEdit}
          create={PoiCreate}
        />
        <Resource
          name="properties"
          list={PropertyList}
          show={PropertyShow}
          edit={PropertyEdit}
          create={PropertyCreate}
        />
        <Resource
          name="routes"
          list={RouteList}
          show={RouteShow}
          edit={RouteEdit}
          create={RouteCreate}
        />
      </Admin>
      <MapLibreMap
        mapId="map_1"
        options={{
          zoom: 14.5,
          style:
            "https://wms.wheregroup.com/tileserver/style/klokantech-basic.json",
          center: [7.080590113226776, 50.740545567043426],
        }}
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />
      <DataLayers />
    </>
  );
}

export default App;
