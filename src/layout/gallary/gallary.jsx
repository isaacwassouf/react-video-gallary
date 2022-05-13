import React from 'react';
import './gallary.css';
import { Link } from 'react-router-dom';
import Logout from '../../components/Logout';


export default function Gallary({ children }) {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">

                    <Link to={'/gallary'} id="navbar-title" className='navbar-brand'>
                        Coding Challenge Video Gallary
                    </Link>
                    
                    <Logout />

                </div>
            </nav>

            {children}
        </>

    )
}
