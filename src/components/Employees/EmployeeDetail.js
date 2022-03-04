import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({})
    const {employeeId} = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)
            .then(res => res.json())
            .then(
                (response) => {
                    setEmployee(response)
                }
            )
        }
    )

    return(
        <>
        <h2>Employee: {employee.name}</h2>
        <p>Specialty: {employee.specialty}</p>
        </>
    )

}