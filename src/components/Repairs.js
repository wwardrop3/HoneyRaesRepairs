import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { TicketList } from "./Tickets/TicketList"

export const Repairs = () => {

    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <CustomerList/>
        <EmployeeList/>
        <TicketList/>
        </>
    )
    
}