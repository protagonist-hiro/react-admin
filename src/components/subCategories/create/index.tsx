import { Box, Typography } from "@material-ui/core";
// import Grid from '@mui/material/Grid';
// import "./create.css";
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";

export const CreateSubCategory = (props: any) => {
  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a Subcategory
      </Typography>

      <Create title=" " redirect="list">
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <ReferenceInput
              variant="outlined"
              source="categoryId"
              reference="categories"
              recordRepresentation="name"
            >
              <AutocompleteInput
                variant="outlined"
                validate={required()}
                label="Category"
              />
            </ReferenceInput>
            <TextInput
              variant="outlined"
              validate={required()}
              source="title"
              style={{ width: "100%" }}
            />
          </Box>
          <Box className="offer_form_wrapper">
            <TextInput
              variant="outlined"
              validate={required()}
              source="name"
              label="Sub Category Name"
              style={{ width: "100%" }}
            />
            <BooleanInput source="isActive" />
          </Box>

          <TextInput
            multiline
            variant="outlined"
            validate={required()}
            source="description"
            style={{ width: "100%" }}
          />
          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>

            <ImageInput className="textInput" source="icon" label="Icon">
              <ImageField source="src" title="title" />
            </ImageInput>
          </Box>
        </SimpleForm>
      </Create>
    </div>
  );
};
