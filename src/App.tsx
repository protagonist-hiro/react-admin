import React from "react";
import { Admin, Resource, CustomRoutes } from "react-admin";
import { Categories } from "./components/categories/list";
import { SubCategories } from "./components/subCategories/list";
import { Offers } from "./components/offer/list";

import { CreateCategory } from "./components/categories/create";
import { CreateSubCategory } from "./components/subCategories/create";
import { CreateOffer } from "./components/offer/create";
import { EditCategory } from "./components/categories/edit";
import { EditSubCategory } from "./components/subCategories/edit";
import { EditOffer } from "./components/offer/edit";

import { Dashboard } from "./components/dashboard/Dashboard";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { theme } from "./theme/theme";
import CustomLayout from "./layout/customLayout";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import {Route} from "react-router-dom"
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import authProvider from "./utils/authProvider";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Transactions from "./components/transactions/list";
import Users from "./components/users/list";
import { CreateUser } from "./components/users/create";
import { EditUser } from "./components/users/edit/EditUser";
import { myDataProvider } from "./utils/data-provider";
import { DetailUser } from "./components/users/detail";

import LoginPage from "./components/login/login";
import RewardPoint from "./components/rewardPoint";
import Ledger from "./components/ledger/list";

function App() {
  return (
    <BrowserRouter>
      <Admin
        dashboard={Dashboard}
        theme={theme}
        dataProvider={myDataProvider}
        authProvider={authProvider}
        layout={CustomLayout}
        loginPage={LoginPage}
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
          name="customer360"
          list={Users}
          create={CreateUser}
          edit={EditUser}
          show={DetailUser}
          icon={PeopleOutlinedIcon}
          options={{ label: "Users" }}
        />
        <Resource
          name="transactions"
          list={Transactions}
          // create={CreateTransaction}
          // edit={EditTransaction}
          icon={ReceiptOutlinedIcon}
          options={{ label: "Transactions" }}
        />
        <Resource
          name="ledgers"
          list={Ledger}
          icon={LibraryBooksOutlinedIcon}
          options={{ label: "Ledger" }}
        />
        <CustomRoutes noLayout>
          <Route path="/reward-point" element={<RewardPoint />} />
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  );
}

export default App;
