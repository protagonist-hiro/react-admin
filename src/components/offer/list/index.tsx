import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  DateField,
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
    label="Search By Title"
    alwaysOn
  />,
];

export const Offers = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        All Offers
      </Typography>

      <List title={"Offer"} {...props} filters={filters}>
        <Datagrid rowClick="edit"  empty={<Empty label="Offers" /> }>
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
            label="Image"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="title" />
          <ReferenceField
            label="Subcategory"
            source="subCategoryId"
            reference="sub-categories"
          />
          <TextField source="profit" />
          {/* <TextField source="baseReferalLink" /> */}
          <TextField source="network" />
          <BooleanField  source="isActive" valueLabelTrue="Active" valueLabelFalse="inActive"/>
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};
