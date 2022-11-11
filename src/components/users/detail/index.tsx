// @ts-nocheck

import { Grid, Typography } from "@material-ui/core";
import {
  Show,
  SimpleShowLayout,
  useShowController,
  //   useQuery,
} from "react-admin";
import "../../../styles/edit.css";
import "../users.css";

export const DetailUser = (props: any) => {
  const { record } = useShowController(props);
  //   const { data, loading, error } = useQuery({
  //     type: "getOne",
  //     resource: "ledgers",
  //     payload: { id: record.id },
  //   });

  //   console.log({ record });
  return (
    <div className="create_category_container">
      <Typography className="form_heading" variant="h5">
        User Detail
      </Typography>
      {/* <Query type="GET_ONE" resource="ledgers" payload={{ id: record.id }}>
        {({ data, loading, error }) => {
          if (loading) {
            return <h4>loading..</h4>;
          }
          if (error) {
            return <p>ERROR</p>;
          }
          return <div>User {data.name}</div>;
        }}
      </Query> */}
      <Show actions=" " {...props} className="user_detail_show_container">
        <SimpleShowLayout>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">Image</div>
                <div className="user_detail_data">
                  {record.image ? record.image : "-"}
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">Name</div>
                <div className="user_detail_data">
                  {record.name ? record.name : "-"}
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">Balance</div>
                <div className="user_detail_data">
                  {record.Balance ? record.Balance : "-"}
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">
                  Total Commission Amount
                </div>
                <div className="user_detail_data">
                  {record.commissionAmountSum
                    ? record.commissionAmountSum
                    : "-"}
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">
                  Approved Commission Amount
                </div>
                <div className="user_detail_data">
                  {record.commissionSumApproved
                    ? record.commissionSumApproved
                    : "-"}
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">
                  Pending Commission Amount
                </div>
                <div className="user_detail_data">
                  {record.commissionSumPend ? record.commissionSumPend : "-"}
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">Total Sales Amount</div>
                <div className="user_detail_data">
                  {record.salesAmountSum ? record.salesAmountSum : "-"}
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">
                  Approved Sales Amount
                </div>
                <div className="user_detail_data">
                  {record.salesAmountSumApproved
                    ? record.salesAmountSumApproved
                    : "-"}
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="user_detail_data_container">
                <div className="user_detail_data_title">
                  Pending Sales Amount
                </div>
                <div className="user_detail_data">
                  {record.salesAmountSumPend ? record.salesAmountSumPend : "-"}
                </div>
              </div>
            </Grid>
          </Grid>
        </SimpleShowLayout>
      </Show>
    </div>
  );
};
