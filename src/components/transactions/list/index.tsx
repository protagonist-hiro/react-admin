import { Typography } from "@material-ui/core";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  TextInput,
  ChipField,
  DateInput,
  useRefresh,
  FilterButton,
  FilterForm,
  ListBase,
} from "react-admin";

import "../../../styles/list.css";
import { servicesHost } from "../../../utils/data-provider";
import "../transaction.css";
import { Stack } from "@mui/material";

const Transactions = (props: any) => {
  const refresh = useRefresh();
  const getData = async () => {
    const res = await fetch(
      `${servicesHost}/affiliate/transactions?network=inr&persist=true`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          start_date: "2022-09-19",
          end_date: "2022-11-19",
        }),
      }
    );
    if (res.status >= 200 && res.status < 300) {
      refresh();
    }
  };
  const filters = [
    <TextInput
      className="search_form"
      source="q"
      variant="outlined"
      label="Search"
      alwaysOn
    />,
    <DateInput source="from_date" />,
    <DateInput source="to_date" />,
  ];

  const ListToolbar = () => (
    <Stack
      direction="row"
      justifyContent="space-between"
      className="transaction-filter-container"
    >
      <FilterForm filters={filters} />
      <div className="transaction-filter-btn">
        <FilterButton filters={filters} className="transaction-filter-option" />
        <button
          onClick={getData}
          className="transaction-refresh-btn"
          resource="refresh"
        >
          Refresh
        </button>
      </div>
    </Stack>
  );
  return (
    <div className="list_wapper">
      <Typography className="List_header transaction-header" variant="h5">
        {" "}
        Transaction
      </Typography>

      <ListBase>
        <ListToolbar />
        <List
          title={"Transaction"}
          {...props}
          className="transaction-table"
          actions={null}
        >
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
      </ListBase>
    </div>
  );
};

export default Transactions;
