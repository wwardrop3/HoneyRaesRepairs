import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./Customers/CustomerList";
import { EmployeeList } from "./Employees/EmployeeList";
import { TicketList } from "./Tickets/TicketList";

export const ApplicationViews = () => {
    return(
        <>
            <Route exact path="/customers">
                <CustomerList/>
            </Route> 
            <Route path = "/employees">
                <EmployeeList/>
            </Route>
            <Route path = "/ticketList">
                <TicketList/>
            </Route>
            

            
        </>
    )
}