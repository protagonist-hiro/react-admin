import { Box, Typography } from "@material-ui/core";
// import Grid from '@mui/material/Grid';
import {
  Create,
  required,
  SimpleForm,
  TextInput,
  useNotify,
  useRefresh,
  useRedirect,
  AutocompleteInput,
} from "react-admin";

const choices: { id: string; name: string }[] = [
  { id: "Approved", name: "Approved" },
  { id: "Pending", name: "Pending" },
];

export const CreateUser = (props: any) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Category created.`);
    redirect("/categories");
    refresh();
  };

  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        Create a User
      </Typography>

      <Create onSuccess={onSuccess} title=" " {...props}>
        <SimpleForm>
          <Box className="offer_form_wrapper">
            <TextInput
              className="textInput"
              source="name"
              label="User Name"
              variant="outlined"
              validate={required()}
            />
             <AutocompleteInput
            className="textInput"
            source="status"
            validate={required()}
            variant="outlined"
            choices={choices}
          />
            
          </Box>
        
        <Box className="offer_form_wrapper">
        <TextInput
            className="textInput"
            source="salesAmountSum"
            variant="outlined"
            validate={required()}
          />

          <TextInput
            className="textInput"
            source="commissionSum"
            variant="outlined"
            validate={required()}
          />
        </Box>
        <Box className="offer_form_wrapper">
        <TextInput
              className="textInput"
              source="image"
              variant="outlined"
              validate={required()}
            />
            <div className="textInput"></div>
        </Box>

         
          {/* <Box className="offer_form_wrapper">
             <ImageInput className="textInput" source="image" label="Image">
          <Box className="offer_form_wrapper">
            <ImageInput className="textInput" source="pictures" label="Image">
              <ImageField source="src" title="title" />
            </ImageInput>
             
            <div className="textInput"></div>
          </Box> */}
        </SimpleForm>
      </Create>
    </div>
  );
};
