import "./dashboard.css";
import CardComponent from "./card/Card";
import { Grid, Typography } from "@material-ui/core";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Card, CardContent } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const dataLine = [
  {
    name: "Users",
    total: 400,
    inactive: 10,
  },
  {
    name: "Categories",
    total: 3000,
    inactive: 1398,
  },
  {
    name: "Sub Categories",
    total: 2000,
    inactive: 900,
  },
  {
    name: "Offers",
    total: 2780,
    inactive: 3908,
  },
];
const dataBar = [
  {
    name: "Users",
    total: 19900,
    inactive: 100,
  },
  {
    name: "Categories",
    total: 3000,
    inactive: 1398,
  },
  {
    name: "Sub Categories",
    total: 2000,
    inactive: 900,
  },
  {
    name: "Offers",
    total: 2000,
    inactive: 208,
  },
];

export const Dashboard = (props: any) => {
  return (
    <div className="dashboard-container">
      <Typography className="page-title" variant="h5">
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={6} md={3}>
          <CardComponent
            label="Total users"
            data="20,000"
            background={"#6b8298"}
            icon={<PeopleAltIcon className="dashboard-item-icon" />}
          />
        </Grid>

        <Grid item sm={6} md={3}>
          <CardComponent
            label="Total offers"
            data="2,000"
            background={"#E16C71"}
            icon={<LocalOfferOutlinedIcon className="dashboard-item-icon" />}
          />
        </Grid>

        <Grid item sm={6} md={3}>
          <CardComponent
            label="Total links shared"
            data="800"
            background={"#E1A07A"}
            icon={<ShareOutlinedIcon className="dashboard-item-icon" />}
          />
        </Grid>

        <Grid item sm={6} md={3}>
          <CardComponent
            label="Transactions completed"
            data="700"
            background={"#82ca9d"}
            icon={<ReceiptLongOutlinedIcon className="dashboard-item-icon" />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card style={{ minWidth: "360px" }}>
            <CardContent>
              <LineChart
                width={700}
                height={400}
                data={dataLine}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="inactive"
                  stroke="#6b8298"
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#82ca9d"
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>

        {/* bar chart  */}
        <Grid item xs={6}>
          <Card style={{ minWidth: "60px" }}>
            <CardContent>
              <BarChart
                width={700}
                height={400}
                data={dataBar}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="inactive" fill="#6b8298" />
                <Bar dataKey="total" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
