import React, {useEffect, useState} from "react";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]) //creates an empty app state array for employees
    const [totalEmployeeMessage, updateEmployeeMessage] = useState("")
    const [specialtyMessage, updateSpecialtyString] = useState("")



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
        [employees] 
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
    <h1>Employee List</h1>
    <div>Specialties: {specialtyMessage}</div>
    <div>{totalEmployeeMessage}</div>
    {
        employees.map(employeeObject => {
            return <h2 key = {`employee--${employeeObject.id}`}>{employeeObject.name}</h2>
        })
    }
    </>
    )
}

