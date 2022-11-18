// @ts-nocheck
import { Card, Grid, Typography } from "@material-ui/core";
import { useGetList } from "react-admin";
import CircularProgress from "@mui/material/CircularProgress";
import "./rewardPoint.css";
import moment from "moment";

const RewardPoint = () => {
  const { data, isLoading } = useGetList("transactions", {
    pagination: { page: 1, perPage: 10 },
  });
  return isLoading ? (
    <div className="rewardPoint-loading">
      <CircularProgress />
    </div>
  ) : (
    <div className="rewardPoint-container">
      <Typography className="rewardPoint-title">Rewards</Typography>
      <Card className="rewardPoint-card">
        <Grid container>
          <Grid item xs={6}>
            <Typography className="rewardPoint-card-label">
              Existing Balance
            </Typography>
            <Typography className="rewardPoint-card-value">300</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className="rewardPoint-card-label">
              Total reward points
            </Typography>
            <Typography className="rewardPoint-card-value">550</Typography>
          </Grid>
        </Grid>
      </Card>
      <div className="rewardPoint-transaction">
        <Typography className="rewardPoint-transaction-title">
          Transaction
        </Typography>
        <div className="rewardPoint-transaction-description">
          <Typography className="rewardPoint-transaction-desc">
            Last 10 transactions
          </Typography>
          <Typography className="rewardPoint-transaction-view-btn">
            View All
          </Typography>
        </div>
        {data ? (
          data.map((transaction) => {
            return (
              <div
                className="rewardPoint-transaction-data"
                key={transaction.id}
              >
                <Typography className="rewardPoint-transaction-date">
                  {moment(transaction.date).format("ll")}
                </Typography>

                <div className="rewardPoint-transaction-data-container">
                  <div className="rewardPoint-transaction-data-values">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApO3VfldRAzRsjAznNyRT2Qvq_f8OGF8V4c3v_C8&s"
                      alt="img"
                      width={"50px"}
                    />
                    <div className="rewardPoint-transaction-data-values-points">
                      <Typography className="rewardPoint-transaction-data-values-points-title">
                        {transaction.name ? transaction.name : "xxxxxx"}
                      </Typography>
                      <Typography className="rewardPoint-transaction-data-values-points-value">
                        {transaction.commission} Points
                      </Typography>
                    </div>
                  </div>
                  <Typography
                    className={
                      transaction.status === "pending"
                        ? "rewardPoint-transaction-data-values-status-pending"
                        : "rewardPoint-transaction-data-values-status-approved"
                    }
                  >
                    {transaction.status}
                  </Typography>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rewardPoint-not-available">
            Transaction not available
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardPoint;
