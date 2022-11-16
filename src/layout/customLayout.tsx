import React from "react";
import {Layout} from "react-admin";
import {CustomAppBar} from "./customAppbar";
// import {MyMenu} from "./MyMenu";

const CustomLayout = (props:any) => {
  return <Layout {...props} appBar={CustomAppBar} />;
};
export default CustomLayout;
