import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
        <li className="navbar__item active">
            <Link className = "navbar__link" to ="/employees">Employees</Link>
        </li>
        <li className ="navbar__item">
            <Link className = "navbar__link" to="/customers">Customers</Link>
        </li>
        <li className ="navbar__item">
            <Link className = "navbar__link" to="/ticketList">Ticket List</Link>
        </li>
        </>
    )
    
}