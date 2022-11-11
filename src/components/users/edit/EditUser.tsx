import { Box, Typography } from "@material-ui/core";
// import Grid from '@mui/material/Grid';
import "../../../styles/edit.css";

import {
  Edit,
  required,
  SimpleForm,
  TextInput,
  useNotify,
  useRefresh,
  useRedirect,
  ImageInput,
  ImageField,
} from "react-admin";

export const EditUser = (props: any) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`user updated.`);
    redirect("/categories");
    refresh();
  };

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Edit a User
      </Typography>

      <Edit onSuccess={onSuccess} title=" " {...props}>
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              source="name"
              label="User Name"
              variant="outlined"
              validate={required()}
            />
          </Box>

          {/* <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              source="image"
              variant="outlined"
              validate={required()}
            />
            <div className="textInput"></div>
          </Box> */}

          
          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="image" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>
             
            <div className="textInput"></div>
          </Box>
        </SimpleForm>
      </Edit>
    </div>
  );
};
