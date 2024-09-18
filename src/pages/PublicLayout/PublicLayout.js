import React, { Component } from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";


export default class PublicLayout extends Component {
  render() {
    return (
      <>
     <Layout/>
          <Outlet/>
       
      </>
    );
  }
}
