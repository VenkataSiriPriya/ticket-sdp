import { useState, useEffect } from 'react';

export default function ManagerProfile() {
  const [manager, setManager] = useState(null);

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      setManager(JSON.parse(storedManager));
    }
  }, []);

  if (!manager) {
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
        Manager Profile
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
        <p><strong>Name:</strong> {manager.name}</p>
        <p><strong>Gender:</strong> {manager.gender}</p>
        <p><strong>Date of Birth:</strong> {manager.dob}</p>
        <p><strong>Email:</strong> {manager.email}</p>
        <p><strong>Username:</strong> {manager.username}</p>
        <p><strong>Mobile No:</strong> {manager.mobileno}</p>
        <p><strong>Company Name:</strong> {manager.company_name}</p>
        

X

      
      
      </div>

<br>

</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>

    </div>
  );
}