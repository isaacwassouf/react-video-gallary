import React, { useContext, useRef, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

export default function Signup() {

    const navigate = useNavigate();
    const {signup} = useContext(AuthContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const reenterPasswordRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (passwordRef.current.value !== reenterPasswordRef.current.value){
            return setError('Passwords must match!')
        }

        try{
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/gallary');
        }catch{
            setError('Unable to Create a New Account');
            setLoading(false);
        }
    }

    return (
        <>
            <div className="auth-form-heading">
                <h1>CREATE AN ACCOUNT</h1>
            </div>

            <div className="auth-form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email' ref={emailRef} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' ref={passwordRef} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Reenter your password' ref={reenterPasswordRef} />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading}>LOGIN</button>
                </form>
            </div>

            <div className="no-account">
                <small>Have an Account? Login <Link to={'/auth/login'}>here</Link></small>
            </div>

            {error && (<div className='auth-error'>
                <div class="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            </div>) }
        </>
    )
}
