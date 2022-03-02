import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const TicketForm = () => {
    const [ticket, setTicket] = useState({
        description: "",
        emergency: false
    })

    const history = useHistory()  //React tool for getting history from the browser so we can change the url programmatically

    const sendTicket = (evt) => {

        evt.preventDefault()

        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")), //this gets the id of the user that is currently signed in
            employeeId: 1, //hard coded for now, otherwise Json will delete invalid foreign keys like 0 or ""
            dateCompleted: " "
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch("http://localhost:8088/serviceTickets", fetchOption)
        .then(() => {
            history.push("/ticketList")

        }
        )
    }


    return(
        <form className = "ticketForm">
            <h2 className = "ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className = "form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                                setTicket(copy)
                            }
                        }   
                        required autoFocus
                        type = "text" id = "description"
                        className = "form-control"
                        placeholder="Brief Description of Problem"
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className = "form-group">
                    <label htmlFor="emergency">Emergency</label>
                    <input 
                    onChange={
                        (evt) => {
                            const copy = {...ticket}
                            copy.emergency= evt.target.checked
                            setTicket(copy)
                        }
                    }
                    type = "checkbox"/>
                </div>
            </fieldset>

            <button onClick={sendTicket} className = "btn btn-primary">
                Submit Ticket
            </button>
      
        </form>
    )

}