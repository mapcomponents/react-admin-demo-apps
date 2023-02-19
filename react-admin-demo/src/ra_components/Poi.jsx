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


export const PoiList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
export const PoiEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput source="geom" />
    </SimpleForm>
  </Edit>
);
export const PoiCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput source="geom" />
    </SimpleForm>
  </Create>
);

export const PoiShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RaGeospatialShow source="geom" />
    </SimpleShowLayout>
  </Show>
);
