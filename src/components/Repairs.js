import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./Nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";

export const Repairs = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("honey_customer")) { //if the customer exists
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login"/>; //if the customer does not exist, goes to login component
        }
      }}
    />

    <Route path="/login">
        <Login/>
    </Route>
    <Route path="/register">
        <Register/>
    </Route>
       
   
  </>
);