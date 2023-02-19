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

export const RouteList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const RouteEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput source="geom" type="line" />
    </SimpleForm>
  </Edit>
);
export const RouteCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput source="geom" type="line" />
    </SimpleForm>
  </Create>
);

export const RouteShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <RaGeospatialShow source="geom" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);
