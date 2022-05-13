

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

export default function Logout() {

    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await logout();
            navigate('/auth/login');
        }catch{

        }

    }

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <button className="btn btn-outline-success" id='nav-logout' type="submit">Logout</button>
        </form>
    )
}
