import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
        <div className = "navOptions">
            <li className="navbar__item active">
                <Link className = "navbar__link" to ="/employees">Employees</Link>
            </li>
            <li className ="navbar__item">
                <Link className = "navbar__link" to="/customers">Customers</Link>
            </li>
            <li className ="navbar__item">
                <Link className = "navbar__link" to="/ticketList">Ticket List</Link>
            </li>

            <li className ="navbar__item">
                <Link className = "navbar__link" to="/ticketList/create">Ticket Form</Link>
            </li>

            <li className ="navbar__item">
                <Link className = "navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("honey_customer")
                        }
                    }
                >Logout</Link>
            </li>
        </div>

        

        </>
    )
    
}