import React, {useEffect, useState} from "react";

export const TicketList = () => {
    const [serviceTickets, setServiceTickets] = useState([]) //creates an empty app state array for employees
   
    const [specialtyMessage, updateSpecialtyString] = useState("")



    useEffect( //use effect watches for changes, and executes when changes are made
        () => {
            fetch("http://localhost:8088/serviceTickets")
            .then(res => res.json())
            .then(
                (serviceTickets) => {
                    setServiceTickets(serviceTickets) //sets employee app state array to result of fetch
                } 
            )
        },
        [serviceTickets] //this is where useEffect is listening for changes
    )


    return (
    <>
    <h1>Service Ticket List</h1>
    {
        serviceTickets.map(serviceTicketObject => {
            return <h2 key = {`serviceTicket--${serviceTicketObject.id}`}>{serviceTicketObject.description}</h2>
        })
    }
    </>
    )
}

