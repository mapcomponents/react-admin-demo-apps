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


export const PoiList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ShowButton />
    </Datagrid>
  </List>
);
export const PoiEdit = () => (
  <Edit mutationMode='optimistic'>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput {...raGeospatialProps} />
    </SimpleForm>
  </Edit>
);
export const PoiCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="geom" />
      <RaGeospatialInput {...raGeospatialProps} />
    </SimpleForm>
  </Create>
);

export const PoiShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RaGeospatialShow {...raGeospatialProps} />
    </SimpleShowLayout>
  </Show>
);
