import React, {useEffect, useState} from "react";
import "./Tickets.css"

export const TicketList = () => {
    const [serviceTickets, setServiceTickets] = useState([]) //creates an empty app state array for employees
    const [openTicketsString, createOpenTicketsString] = useState("")
    const [uniqueTicketString, createUniqueTicketString] = useState("")


    useEffect( //use effect watches for changes, and executes when changes are made
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer") //expand adds employee and customer properties that equal the object that matches customerId and employeeId
            .then(res => res.json())
            .then(
                (serviceTickets) => {
                    setServiceTickets(serviceTickets) //sets employee app state array to result of fetch
                } 
            )
        },
        [] //this is where useEffect is listening for changes
    )

    useEffect(
        () => {
            const openTickets = serviceTickets.filter(serviceTicket => {
                return serviceTicket.dateCompleted === " "
            })

            const ticketString = `There are ${openTickets.length} tickets currently open`
            
            
            createOpenTicketsString(ticketString)
        },[serviceTickets]
        )


    useEffect(
        () => {
            const serviceTicketStrings = serviceTickets.map(serviceTicketObject => {
            return <p className={serviceTicketObject.emergency ? "emergency" : "ticket"}>
                        {serviceTicketObject.emergency ? "🚑 " : ""} {serviceTicketObject.description} Submitted by {serviceTicketObject.customer.name} and worked on by {serviceTicketObject.employee.name}
                    </p>
    })
        createUniqueTicketString(serviceTicketStrings)
        },
        [serviceTickets])
   
    return (
    <>
    {
        <div>
            <h2>Ticket List</h2>
            <div>{openTicketsString}</div>
            <div>{uniqueTicketString}</div>
        </div>
        
    }
    </>
    )
}

