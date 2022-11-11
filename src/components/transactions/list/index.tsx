import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  TextInput,
  ChipField
} from "react-admin";

import "../../../styles/list.css";


const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search"
    alwaysOn
  />,
];

const Transactions = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Transaction
      </Typography>

      <List title={"Transaction"} {...props} filters={filters}>
        <Datagrid
          rowClick="edit"
          empty={
            <Typography className="empty_text" variant="h6">
              No Transactions !!
            </Typography>
          }
        >
          <TextField source="user.name" />
          <TextField source="storeName" />
          <TextField source="offer.network" />
          <TextField source="saleAmount" />
          <TextField source="commission" />
          <DateField source="date" />
          <ChipField source="status" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default Transactions;
