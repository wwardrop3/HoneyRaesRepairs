import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { TicketList } from "./Tickets/TicketList"

export const Repairs = () => {

    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>

        <h2>Customer List</h2>
        <CustomerList/>

        <h2>Employee List</h2>
        <EmployeeList/>

        <h2>Employee List</h2>
        <TicketList/>
        </>
)}