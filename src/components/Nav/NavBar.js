import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

//this component makes the buttons will provides URL paths that will trigger the rendering of components in ApplicationViews
//what do we want each button to say and where do we want to direct it

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