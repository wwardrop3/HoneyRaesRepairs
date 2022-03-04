import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./Customers/CustomerList";
import { EmployeeList } from "./Employees/EmployeeList";
import { TicketList } from "./Tickets/TicketList";
import { TicketForm } from "./Tickets/TicketForm";
import { NavBar } from "./Nav/NavBar";
import { EmployeeForm } from "./Employees/EmployeeForm";
import { ServiceTicket } from "./Tickets/ServiceTicket";
import { EmployeeDetail } from "./Employees/EmployeeDetail";


//The purpose of this component is to render the individual pages that were triggered by navBar links
//Route is sort of event listener that will trigger a component when a certain url is shown in the DOM

export const ApplicationViews = () => {
    return(
        <>

            <Route exact path="/ticketList/:ticketId(\d+)">
                <ServiceTicket/>
            </Route> 


            <Route exact path="/customers">
                <CustomerList/>
            </Route> 

            <Route exact path = "/employees/create">
                <EmployeeForm/>
            </Route>

            <Route exact path = "/employees">
                <EmployeeList/>
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <EmployeeDetail/>
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