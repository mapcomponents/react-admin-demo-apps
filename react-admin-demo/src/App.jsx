import { Admin, Resource } from "react-admin";
import localStorageDataProvider from "ra-data-local-storage";
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

import "maplibre-gl/dist/maplibre-gl.css";

const dataProvider = localStorageDataProvider({
  localStorageUpdateDelay:2,
  defaultData: {
    pois: [{ id: 0, title: "poi", geom: "" }],
    properties: [{ id: 0, title: "property", geom: "" }],
    routes: [{ id: 0, title: "route", geom: "" }],
  },
});

function App() {
  return (
    <>
      <Admin  dataProvider={dataProvider}>
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
    </>
  );
}

export default App;
