import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  BooleanField,
  TextInput,
  useListContext,
} from "react-admin";
import { Empty } from "../../empty/Empty";

import "../../../styles/list.css";


const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search By Name"
    alwaysOn
  />,
];
export const Categories = (props: any) => {
  const { isLoading } = useListContext();
  if (isLoading) return <h5>Loading</h5>;

  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Categories
      </Typography>
      <List {...props} emptyWhileLoading filters={filters}>
        <Datagrid rowClick="edit" empty={<Empty label="Category" /> }>
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="name" />
          {/* <TextField source="imageUrl" /> */}
          <BooleanField source="isActive" valueLabelTrue="Active" valueLabelFalse="inActive"/>
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};