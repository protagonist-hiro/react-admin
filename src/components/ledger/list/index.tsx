import { Typography } from "@material-ui/core";
import { List, Datagrid, TextField, EditButton, TextInput, AutocompleteInput  } from "react-admin";

import "../ledger.css";

const filters = [
  <TextInput
    className="search_form"
    source="q"
    variant="outlined"
    label="Search By User Name"
    alwaysOn
  />,
  <AutocompleteInput
  source="network"
  variant="outlined"
  className="network-search-form"
  label="Search By Network"
  alwaysOn
  choices={[
    {id:'inr',name:"inr"},
    {id:'cuelink',name:"cuelink"}
  ]}
  />
];

const Ledger = (props: any) => {
  return (
    <div className="list_wapper">
      <Typography className="List_header" variant="h5">
        {" "}
        Ledger
      </Typography>

      <List title={"Ledgers"} {...props} filters={filters}>
        <Datagrid
          rowClick="edit"
          empty={
            <Typography className="empty_text" variant="h6">
              Ledger data not available !!
            </Typography>
          }
        >
          <TextField label="User Name" source="user.name" />
          <TextField source="transactionType" />
          <TextField source="rewardPoint" />
          <TextField source="network" />
          <TextField source="amount" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default Ledger;
