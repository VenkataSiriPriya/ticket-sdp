import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import "./Styles/ViewManagers.css";

export default function ViewManagers() {
    const [managers, setManagers] = useState([]);
    const [error, setError] = useState("");

    const displayManagers = async () => {
        try {
            const response = await axios.get(`${config.url}/admin/viewalleventmanagers`);
            setManagers(response.data);
        } catch (err) {
            setError("Failed to fetch event managers data ... " + err.message);
        }
    };

    useEffect(() => {
        displayManagers();
    }, []);

    return (
        <div className="container">
            <h3 className="heading">View All Event Managers</h3>

            {error ? (
                <p className="error-message">{error}</p>
            ) : managers.length === 0 ? (
                <p className="error-message">No Event Managers Data Found</p>
            ) : (
                <table className="manager-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Mobile No</th>
                            <th>Company Name</th>
                            <th>Company Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {managers.map((manager) => (
                            <tr key={manager.id}>
                                <td>{manager.id}</td>
                                <td>{manager.name}</td>
                                <td>{manager.gender}</td>
                                <td>{manager.dob}</td>
                                <td>{manager.email}</td>
                                <td>{manager.username}</td>
                                <td>{manager.mobileno}</td>
                                <td>{manager.company_name}</td>
                                <td>{manager.company_location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
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
