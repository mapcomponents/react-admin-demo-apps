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
import GisEditToolbar from "./GisEditToolbar";


export const PropertyList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ShowButton />
    </Datagrid>
  </List>
);
export const PropertyEdit = () => (
  <Edit>
    <SimpleForm toolbar={<GisEditToolbar />}>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput embeddedMap={false} source="geom" type="polygon" />
    </SimpleForm>
  </Edit>
);
export const PropertyCreate = () => (
  <Create>
    <SimpleForm toolbar={<GisEditToolbar />}>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput embeddedMap={false} source="geom" type="polygon" />
    </SimpleForm>
  </Create>
);

export const PropertyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RaGeospatialShow embeddedMap={false} source="geom" />
    </SimpleShowLayout>
  </Show>
);
