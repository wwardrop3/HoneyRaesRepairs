import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./Customers/CustomerList";
import { EmployeeList } from "./Employees/EmployeeList";
import { TicketList } from "./Tickets/TicketList";
import { TicketForm } from "./Tickets/TicketForm";

export const ApplicationViews = () => {
    return(
        <>
            <Route exact path="/customers">
                <CustomerList/>
            </Route> 
     
            <Route path = "/employees">
                <EmployeeList/>
            </Route>
            
            <Route path = "/ticketList/create">
                <TicketForm/>
            </Route>

            <Route exact path = "/ticketList">
                <TicketList/>
            </Route>
            

            
        </>
    )
}