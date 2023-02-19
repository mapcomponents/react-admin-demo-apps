import { useState } from "react";

export const DataContext = React.createContext();

export const DataContextProvider = function (props) {
  const [data, setData] = useState({});

  const value = {
    data,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
