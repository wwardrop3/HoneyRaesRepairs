import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"


export const ServiceTicket = () => {
    const [ticket, setTicket] =useState({})
    const {ticketId} = useParams() //using {} will take the ticketId from application state address that triggered this component
    const [employees, setEmployees] = useState([])

    const history = useHistory()

    useEffect(

    () => {
        fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
        .then(res => res.json())
        .then(
            (response) => {
                setTicket(response)
            }
        )
    },[ticketId]
    )


    useEffect(
        () => {
            return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then (
                (response)=> {
                    setEmployees(response)
                }
            )},[]
        
    )

    const updateTicket = () => {

        const newTicket = {
            id: ticket.id,
            customerId: ticket.customerId,
            employeeId: ticket.employeeId,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }
        const fetchOptions = {
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newTicket)
        }
        return fetch(`http://localhost:8088/serviceTickets/${ticketId}`,fetchOptions)
        .then(res=>res.json()
        )
    }

    return (
        <>
        <h2>Service Ticket {ticket.id}</h2>
        <p>{ticket.customer?.name}</p>
        <p>{ticket.description}</p>
        <select
        value={ticket.employeeId} 
        onChange={
            (evt) => {
                const copy = {...ticket}
                copy.employeeId = parseInt(evt.target.value)
                console.log(ticket)
                setTicket(copy)
            }}>
            {employees.map(employee=> {
                return <option key={employee.id} value={employee.id} >{employee.name}</option>
            }
            )}
        </select>
        <p>
        <button onClick={
            () => {
                updateTicket()
                history.push("/ticketList")
            }
        }>Update Ticket</button>

        </p>
        </>
    )

}