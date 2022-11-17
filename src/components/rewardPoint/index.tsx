import { Card, Grid, Typography } from "@material-ui/core";
import "./rewardPoint.css";

const RewardPoint = () => {
  return (
    <div className="rewardPoint-container">
      <Card className="rewardPoint-card-offer">
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <div className="rewardPoint-header">
              <div className="rewardPoint-header-dot" />
              <Typography className="rewardPoint-header-text">
                Today Spotlight
              </Typography>
            </div>
          </Grid>
        </Grid>

        <div className="rewardPoint-contents">
          <img
            src="https://asset20.ckassets.com/resources/image/stores/ajio-coupons-1632200353.png"
            alt=""
            className="rewardPoint-contents-image"
          />
          <Typography className="rewardPoint-contents-title">
            There's plenty more for you
          </Typography>
          <Typography className="rewardPoint-contents-description">
            Get more than 70% off on your booking
          </Typography>
        </div>
      </Card>
      <Card className="rewardPoint-card-other-info">
        <div className="rewardPoint-card-other-info-data">
          <Typography className="rewardPoint-card-other-info-title">
            CASHBACK RATE
          </Typography>
          <ul>
            <li className="rewardPoint-card-other-info-points">
              <span className="rewardPoint-card-other-info-points-number">
                6%
              </span>{" "}
              Cashback for New Users of ZoomCar
            </li>
            <li className="rewardPoint-card-other-info-points">
              <span className="rewardPoint-card-other-info-points-number">
                6%
              </span>{" "}
              Cashback for Exit Users of ZoomCar
            </li>
          </ul>
        </div>
        <div className="rewardPoint-card-other-info-datas">
          <Typography className="rewardPoint-card-other-info-title">
            OFFER TERMS
          </Typography>
          <ul>
            <li className="rewardPoint-card-other-info-points">
              <span className="rewardPoint-card-other-info-points-number">
                6%
              </span>{" "}
              Cashback for New Users of ZoomCar
            </li>
            <li className="rewardPoint-card-other-info-points">
              <span className="rewardPoint-card-other-info-points-number">
                6%
              </span>{" "}
              Cashback for Exit Users of ZoomCar
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default RewardPoint;
