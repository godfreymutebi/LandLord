import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function LogOut() {
    let navigate = useNavigate();
    cont[tenant, setTenant] = useState(null);
    // Handling log out
    const handleLogOut = (e) => {
        e.preventDefault();
        setTenant(null);
        navigate("/Home")
    };

    return <div>
        <Button type="primary" onClick={handleLogOut}>
            LogOut
        </Button>
    </div>
}