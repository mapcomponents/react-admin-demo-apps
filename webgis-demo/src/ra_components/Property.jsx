import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  Show,
  SimpleShowLayout,
  TextField,
  Datagrid,
  List,
  EditButton,
  ShowButton,
} from "react-admin";
import {
  RaGeospatialInput,
  RaGeospatialShow,
} from "@mapcomponents/ra-geospatial";
import raGeospatialProps from "./raGeospatialProps";


export const PropertyList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
export const PropertyEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput {...raGeospatialProps} type="polygon" />
    </SimpleForm>
  </Edit>
);
export const PropertyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput {...raGeospatialProps} type="polygon" />
    </SimpleForm>
  </Create>
);

export const PropertyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RaGeospatialShow  {...raGeospatialProps} />
    </SimpleShowLayout>
  </Show>
);
