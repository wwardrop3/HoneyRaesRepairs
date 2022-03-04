import { useState } from "react"
import { useHistory } from "react-router-dom"


export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        specialty: ""
    })

    const history = useHistory()

    const sendEmployee = (evt) => {
        

        evt.preventDefault()

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }

        return fetch("http://localhost:8088/employees", fetchOptions)
        .then(
            () => {
                history.push("/employees")

            }
        )
    }









    return (
        <>
            <h2>New Employee</h2>
            <form>
                <fieldset>
                    <div className = "form-group">
                        <label htmlFor="employeeName">
                        Employee Name    
                        </label>
                        <input
                        required autoFocus
                        type = "text" id = "employeeName"
                        className = "form-control"
                        placeholder="Enter Name"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                setEmployee(copy)
                            }
                        }/>
                    </div>
                </fieldset>
                <fieldset>
                    <div className = "form-group">
                        <label htmlFor="employeeSpecialty">
                        Employee Specialty
                        </label>
                        <input
                        required
                        type = "text" id = "employeeSpecialty"
                        className = "form-control"
                        placeholder="Enter Specialty"
                        onChange = {
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                setEmployee(copy)
                            }
                        }/>
                    </div>
                </fieldset>

                <button onClick={sendEmployee} className = "btn btn-primary">
                Submit Employee
            </button>
            </form>
        </>
    )





}