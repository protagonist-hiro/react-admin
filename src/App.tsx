import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { Categories, SubCategories, Offers } from "./components/list/List";
import {
  CreateCategory,
  CreateSubCategory,
  CreateOffer,
} from "./components/create/Create";
import {
  EditCategory,
  EditSubCategory,
  EditOffer,
} from "./components/edit/Edit";
import { Dashboard } from "./components/dashboard/Dashboard";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { theme } from "./theme/theme";
import CustomLayout from "./layout/customLayout";
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import {Route} from "react-router-dom"

import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import authProvider from "./authProvider/authProvider";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Transactions from "./components/transactions/list";
// import LoginPage from './components/login/login';

function App() {
  return (
    <BrowserRouter>
      <Admin
        dashboard={Dashboard}
        theme={theme}
        dataProvider={simpleRestProvider("http://65.2.184.188")}
        authProvider={authProvider}
        layout={CustomLayout}
      >
        <Resource
          name="categories"
          list={Categories}
          create={CreateCategory}
          edit={EditCategory}
          icon={CategoryOutlinedIcon}
          recordRepresentation="name"
          options={{ label: "Categories" }}
        />
        <Resource
          name="sub-categories"
          list={SubCategories}
          create={CreateSubCategory}
          edit={EditSubCategory}
          icon={ClassOutlinedIcon}
          recordRepresentation="name"
          options={{ label: "Sub Categories" }}
        />
        <Resource
          name="offers"
          list={Offers}
          create={CreateOffer}
          edit={EditOffer}
          icon={LocalOfferOutlinedIcon}
          options={{ label: "All Offers" }}
        />
        <Resource
          name="transactions"
          list={Transactions}
          // create={CreateTransaction}
          // edit={EditTransaction}
          icon={ReceiptOutlinedIcon}
          options={{ label: "Transactions" }}
        />
      </Admin>
    </BrowserRouter>
  );
}

export default App;
