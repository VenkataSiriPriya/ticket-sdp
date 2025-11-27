import { useState, useEffect } from 'react';

export default function CustomerProfile() 
{
  const [customer, setCustomer] = useState("");
     
  useEffect(() => {
    const storedCustomer = sessionStorage.getItem('customer');
    if (storedCustomer) {
     setCustomer(JSON.parse(storedCustomer));
    }
  }, []);

  if (!customer) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Customer Profile
      </h2>

      <div
        style={{
          backgroundColor: 'light grey',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '20px',
          width: '350px',
        }}
      >
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Gender:</strong> {customer.gender}</p>
        <p><strong>Date of Birth:</strong> {customer.dob}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Username:</strong> {customer.username}</p>
        <p><strong>Mobile No:</strong> {customer.mobileno}</p>
        <p><strong>Company:</strong> {customer.location}</p>
      
      
      </div>

      <br/>
       <br/>
        <br/>
         <br/>
          <br/>
           <br/>
            <br/>
             <br/>

    </div>
  );
}