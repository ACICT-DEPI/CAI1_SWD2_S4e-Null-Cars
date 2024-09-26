import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Admin = () => {
    return (
        <div>
            <h1>Admin Management</h1>
            <div className="p-4">
                <p>Welcome to the Null_Cars Management!</p>
                <p>Please use navigation links above for management!</p>
                <Button variant="info" className="my-2 py-1 fw-700" type="button" ><Link to="/">Click here for back to website!</Link></Button>
            </div>
        </div>
    );
};

export default Admin;