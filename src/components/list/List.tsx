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
  useListContext,
} from "react-admin";

import "./list.css";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search"
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
        <Datagrid rowClick="edit">
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
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

export const SubCategories = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Sub Categories
      </Typography>

      <List {...props} filters={filters}>
        <Datagrid rowClick="edit">
          {/* <TextField source="categoryId" /> */}
          <ReferenceField
            label="category"
            source="categoryId"
            reference="categories"
          />
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
          />
          <TextField source="name" />
          {/* <TextField source="imageUrl" /> */}
          <BooleanField source="isActive" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export const Offers = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        All Offers
      </Typography>

      <List title={"Offer"} {...props} filters={filters}>
        <Datagrid rowClick="edit">
          <ImageField
            className="imgaes"
            source="imageUrl"
            title="title"
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
          <BooleanField source="isActive"/>
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};
