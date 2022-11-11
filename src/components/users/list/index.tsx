import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  TextInput,
  ImageField,
} from "react-admin";

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

const Users = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Users
      </Typography>

      <List title={"Users"} {...props} filters={filters}>
        <Datagrid
          rowClick="edit"
          empty={
            <Typography className="empty_text" variant="h6">
              No Users !!
            </Typography>
          }
        >
          <ImageField
            sx={{
              "& img": { maxWidth: 50, maxHeight: 60, objectFit: "cover" },
            }}
            source="image"
          />
          <TextField source="name" />

          <TextField
            source="commissionSumPend"
            label="Commission Sum Pending"
          />
          <TextField
            source="commissionSumApproved"
            label="Commission Sum Approved"
          />
          <TextField source="salesAmountSumPend" label="Sales Sum Pending" />
          <TextField
            source="salesAmountSumApproved"
            label="Sales Sum Approved"
          />
          <TextField source="commissionAmountSum" label="Total Commission" />
          <TextField source="salesAmountSum" label="Total Sales" />
          <EditButton />
          <ShowButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default Users;
