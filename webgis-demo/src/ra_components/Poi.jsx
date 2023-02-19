import {
  Create,
  CreateButton,
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

export const PoiList = () => (
  <List actions={<CreateButton />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ShowButton />
    </Datagrid>
  </List>
);
export const PoiEdit = () => (
  <Edit>
    <SimpleForm toolbar={<GisEditToolbar />}>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput embeddedMap={false} source="geom" />
    </SimpleForm>
  </Edit>
);
export const PoiCreate = () => (
  <Create>
    <SimpleForm toolbar={<GisEditToolbar />}>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput embeddedMap={false} source="geom" />
    </SimpleForm>
  </Create>
);

export const PoiShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RaGeospatialShow embeddedMap={false} source="geom" />
    </SimpleShowLayout>
  </Show>
);
