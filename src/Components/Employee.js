import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/auth/employee')
      .then(result => {
        if (result.data.Status) {
          setCategory(result.data.Result)
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }, [])

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Employee List</h3>
      </div>
      <Link to='/dashboard/add_employee' className='btn btn-success'>Add Employee</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              employee.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td><img src={`http://localhost:3001/Images/` +emp.image} alt="" /></td>
                  <td>{emp.email}</td>
                  <td>{emp.address}</td>
                  <td>{emp.salary}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee