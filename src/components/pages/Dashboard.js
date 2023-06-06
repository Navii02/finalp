import React, { useEffect, useState } from 'react';
import '../../App.css';
import Navbar from '../UserNavbar';

function Dashboard() {
  const [student, setStudentDetails] = useState(null);
  const userEmail = localStorage.getItem('email'); // Get the user's email from localStorage
  console.log('User Email:', userEmail);

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const fetchStudentDetails = () => {
    fetch(`/api/student/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setStudentDetails(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <h1>Student Details</h1>
      {student ? (
        <div>
          <h4>Name: {student.name}</h4>
          <h4>Email: {student.email}</h4>
          <h4>Register Number: {student.registerNumber}</h4>
          <h4>Date of Birth: {student.dateOfBirth}</h4>
          <h4>Branch: {student.branch}</h4> 
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
