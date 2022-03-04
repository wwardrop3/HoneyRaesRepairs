import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const TicketForm = () => {
    const [ticket, setTicket] = useState({
        description: "",
        emergency: false
    })


      //useHistory is a function that sends you to the url that you pass into it. Similar to route but ONCLICK CAN ONLY USE FUNCTIONS
      //Declaring history variable and setting the value to the useHistory hook
      const history = useHistory()
      
    //this function creates a new ticket object and POSTS it to the ticket database
    const sendTicket = (evt) => {

        //evt is the submitting click event and prevent default will stop the component from rendering again
        evt.preventDefault()

        //this is the new ticket that will overwrite the existing ticket in app state
        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")), //this gets the id of the user that is currently signed in in local storage
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

        //this will post the new ticket and immediately reroute to the ticket list after submitting
        return fetch("http://localhost:8088/serviceTickets", fetchOption)
        .then(() => {
            //invoke use history hook and push the inputted url
            history.push("/ticketList")

        }
        )
    }

    //now we create the actual form that the user will use to enter in a new ticket
    //the form below are tags that bookend the jsx elements
    return(
        <form className = "ticketForm">
            <h2 className = "ticketForm__title">New Service Ticket</h2>

            {//the fieldset it the first element category in the form that will take in a text input to populate description in the new ticket
            }
            <fieldset>
                
                <div className = "form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                //evt.target is the value of the submit button we click on
                                copy.description = evt.target.value
                                //this will overwrite the current app state ticket with the new one we created with user inputs
                                setTicket(copy)
                            }
                        }  
                        //below is the syntax for defining the input html element 
                        required autoFocus
                        type = "text" id = "description"
                        className = "form-control"
                        placeholder="Brief Description of Problem"
                        />
                </div>
            </fieldset>

            {//this is the second input element that will be a checkbox
            }           
            
            <fieldset>
                <div className = "form-group">
                    <label HTMLfor="emergency">Emergency</label>
                    <input 
                    onChange={
                        (evt) => {
                            const copy = {...ticket}
                            copy.emergency= evt.target.checked
                            //now when the emergency check box is changed, it will take the current app state and overwrite the emergency property
                            setTicket(copy)
                        }
                    }
                    //the type of input is a checkbox
                    type = "checkbox" id = "emergency"
                    />
                </div>
            </fieldset>

            {//Finally, we have the button that will invoke the send ticket function
            //onClick is the event that is evt in the definition of send ticket
            }
            <button onClick={sendTicket} className = "btn btn-primary">
                Submit Ticket
            </button>
      
        </form>
    )

}