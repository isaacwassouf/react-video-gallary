
import React, {useContext, useState, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

export default function Login() {

    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);

            navigate('/gallary/');
            
        }catch{
            setError('Unable to Login');
            setLoading(false);
        }
    }


    return (
        <>
            <div className="auth-form-heading">
                <h1>LOGIN TO YOUR ACCOUNT</h1>
            </div>

            <div className="auth-form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email' ref={emailRef} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' ref={passwordRef}/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading}>LOGIN</button>
                </form>
            </div>

            <div className="no-account">
                <small>Don't have an account? Signup <Link to={'/auth/signup'}>here</Link></small>
            </div>

            {error && (<div className='auth-error'>
                <div class="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            </div>) }
        </>
    )
}
