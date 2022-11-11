import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
  ImageField,
  BooleanField,
  TextInput,
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

export const SubCategories = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Sub Categories
      </Typography>

      <List {...props} filters={filters}>
        <Datagrid rowClick="edit"  empty={<Empty label="Sub Category" /> }>
          {/* <TextField source="categoryId" /> */}
          
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
          <ReferenceField
            label="category"
            source="categoryId"
            reference="categories"
          />
          <BooleanField  source="isActive" valueLabelTrue="Active" valueLabelFalse="inActive" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

