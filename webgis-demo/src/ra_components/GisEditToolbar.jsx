import React from "react";
import {
  Create,
  SimpleForm,
  SaveButton,
  Toolbar,
  useRedirect,
  useNotify,
} from "react-admin";
const GisEditToolbar = () => {
  const redirect = useRedirect();
  const notify = useNotify();
  return (
    <Toolbar sx={{height:'100px',position:'relative !important'}}>
      <SaveButton/>
    </Toolbar>
  );
};

GisEditToolbar.defaultProps = {};

export default GisEditToolbar;
