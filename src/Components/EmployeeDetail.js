import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/employee/detail/' + id)
            .then(result => {
                setEmployee(result.data[0])
            })
            .catch(err => console.log(err))
    });

    const handleLogout = () => {
        axios.get('http://localhost:3001/employee/logout')
            .then(result => {
                if (result.data.Status) {
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <div className='p-2 d-flex justify-content-center shadow'>
                <h4>Employee Management System</h4>
            </div>
            <div className='p-2 d-flex justify-content-center flex-column align-items-center mt-3'>
                <img src={`http://localhost:3001/Images/` + employee.image} className='emp_det_image' />
                <div className='d-flex align-items-center flex-column mt-5'>
                    <h3>Name: {employee.name}</h3>
                    <h3>Email: {employee.email}</h3>
                    <h3>Salary: R {employee.salary}</h3>
                </div>
                <div>
                    <button className='btn btn-primary me-2'>Edit</button>
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetail