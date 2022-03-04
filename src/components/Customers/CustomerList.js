import React, { useEffect, useState } from "react"


//component purpose is to render a string of how many customers we have and first 5 strings of each customer name

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]) //initialization counts as the first state change
    const [totalCustomerMessage, updateMessage] = useState("")

    const firstFiveCustomers = customers.slice(0,5)

    useEffect(
        () => {
            console.log("initial effect")
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then(
                    (response) => {
                        setCustomers(response)
                    }
                )
        },
        [] //what to listen for, only runs once becuase it is empty
    )

    //this useEffect is going to update a string that keeps track of how many customers are in the database
    useEffect(
        () => {
            if(customers.length === 1){
                updateMessage("You have 1 customer")
            } 
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        }, [customers] //where we are observing changes, if changes happen to customers, run this function
    )

    return (
        <>
        <h2>Customer List</h2>
        <div>{totalCustomerMessage}</div>
        {
            customers.map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
    
}