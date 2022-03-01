import React, { useEffect, useState } from "react"

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

    useEffect(
        () => {
            console.log("stateChanged", customers)
            if(firstFiveCustomers.length === 1){
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
            firstFiveCustomers.map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
    
}