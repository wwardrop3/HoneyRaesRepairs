import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]) //creates an empty app state array for employees
    const [totalEmployeeMessage, updateEmployeeMessage] = useState("")
    const [specialtyMessage, updateSpecialtyString] = useState("")


    const history = useHistory()

    useEffect( //use effect watches for changes, and executes when changes are made
        () => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(
                (employees) => {
                    setEmployees(employees) //sets employee app state array to result of fetch

                } 
            )
        },
        [] 
    )

    useEffect(
        () => {if(employees.length === 1){
            updateEmployeeMessage(`You have 1 employee`)
        } else{
            updateEmployeeMessage(`You have ${employees.length} employees`)
        }},
        [employees]
    )

    useEffect(
        () => {
            const employeeSpecialties = employees.map(employee => employee.specialty)
            const specialtyString = employeeSpecialties.join(", ")
            updateSpecialtyString(specialtyString)
            
        }, [employees])

    return (
    <>
    <h2>Employee List</h2>
    <button
    onClick={
        (evt) => {
            history.push("/employees/create")
        }
    }>Hire Employee</button>
    <p></p>
    <div>Specialties: {specialtyMessage}</div>
    <p></p>
    <div>{totalEmployeeMessage}</div>
    {
        employees.map(employeeObject => {
            return <p key = {`employee--${employeeObject.id}`}><Link to = {`/employees/${employeeObject.id}`}>{employeeObject.name}</Link></p>
        })
    }
    </>
    )
}

