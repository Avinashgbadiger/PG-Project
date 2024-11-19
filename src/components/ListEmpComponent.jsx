import React, { useEffect, useState } from 'react';
import { listEmp } from '../services/EmpService';

const ListEmpComponent = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        

        const da = listEmp().then(response => response.json())
        .then(data => {
          console.log('h1',data)
          setEmployee(data);
          }).catch(error => console.error(error));




        // listEmp()
        //     .then((response) => {
        //         setEmployee(response.data);
        //     })
        //     .catch((error) => {
        //         console.error("API Error:", error);
        //         if (error.response && error.response.status === 302) {
        //             console.log("Redirect location:", error.response.headers.location);
        //         }
        //     });
    }, []);
    
    

    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((emp) => (
                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.username}</td>
                            <td>{emp.lastname}</td>
                            <td>{emp.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmpComponent;
