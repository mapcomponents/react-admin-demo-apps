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
  ShowButton,
  EditButton,
} from "react-admin";
import {
  RaGeospatialInput,
  RaGeospatialShow,
} from "@mapcomponents/ra-geospatial";
import GisEditToolbar from "./GisEditToolbar";

export const RouteList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ShowButton />
    </Datagrid>
  </List>
);

export const RouteEdit = () => (
  <Edit>
    <SimpleForm toolbar={<GisEditToolbar />}>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput embeddedMap={false} source="geom" type="line" />
    </SimpleForm>
  </Edit>
);
export const RouteCreate = () => (
  <Create>
    <SimpleForm toolbar={<GisEditToolbar />}>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput embeddedMap={false} source="geom" type="line" />
    </SimpleForm>
  </Create>
);

export const RouteShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <RaGeospatialShow embeddedMap={false} source="geom" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);
