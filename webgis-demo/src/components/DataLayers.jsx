import React, { useEffect, useState } from "react";
import { parse as wellknownParse } from "wellknown";
import { featureCollection, feature } from "@turf/turf";
import { MlGeoJsonLayer } from "@mapcomponents/react-maplibre";

export default function DataLayers() {
  const [data, setData] = useState([]);

  const refreshData = () => {

      const storageDataTmp = localStorage.getItem("ra-data-local-storage");
      if (storageDataTmp) {
        console.log('update layers')
        const storageData = JSON.parse(storageDataTmp);
        const _data = Object.keys(storageData).map((el) => {
          const features = storageData[el].map((entry) => {
            return feature(wellknownParse(entry.geom));
          });
          return {
            name: el,
            featureCollection: features?.[0]?featureCollection(features):undefined,
          };
        });

        console.log(_data);
        setData(_data);
      }

  }

  useEffect(() => {
    refreshData();
    const _eventHandler = (event) => {
        refreshData();
    };
    window.addEventListener("storageItemUpdated", _eventHandler);
    return () => {
      window.removeEventListener("storageItemUpdated", _eventHandler);
    };

  }, []);
  return (
    <>
      {data &&
        data.map((el) => <MlGeoJsonLayer layerId={el.name + '_localstorage_layer'} key={el.name} mapId='map_1' geojson={el.featureCollection} />)}
    </>
  );
}
