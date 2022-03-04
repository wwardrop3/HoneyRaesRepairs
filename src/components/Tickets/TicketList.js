import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import "./Tickets.css"

export const TicketList = () => {
    const [serviceTickets, setServiceTickets] = useState([]) //creates an empty app state array for employees
    const [openTicketsString, createOpenTicketsString] = useState("")
    const [uniqueTicketString, createUniqueTicketString] = useState("")

    const history = useHistory()

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
            return <p key = {serviceTicketObject.id} className={serviceTicketObject.emergency ? "emergency" : "ticket"}>
                        <Link to = {`/ticketList/${serviceTicketObject.id}`}>{serviceTicketObject.emergency ? "🚑 " : ""} {serviceTicketObject.description} submitted by {serviceTicketObject.customer.name}</Link>
                    <button
                    onClick={
                        (evt) => {
                            deleteTicket(serviceTicketObject.id)
                            window.location.reload(false)       
                        
                            
                        } 
                    }
                    >Delete Ticket</button>
                    </p>
    })
        createUniqueTicketString(serviceTicketStrings)
        },
        [serviceTickets])

    const deleteTicket = (id) =>{
        const fetchOptions={
            method: "DELETE",
        }
        console.log(id)
        return fetch(`http://localhost:8088/serviceTickets/${id}`, fetchOptions)
    }
   
    return (
    <>
    
        <div>
            <button 
            onClick = {
                (evt) => {
                    history.push("./ticketList/create")
                }
            }
            >Submit Service Ticket</button>
            <h2>Ticket List</h2>
            <div>{openTicketsString}</div>
                <div className="ticketList">{uniqueTicketString}</div>
    
        </div>
        

    </>
    )
}

