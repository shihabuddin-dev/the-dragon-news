import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h3 className='text-center font-semibold text-xl md:text-2xl'>Login Your Account</h3>
                <form className="fieldset mt-2">
                    {/* email  */}
                    <label className="label font-semibold text-sm">Email</label>
                    <input name='email' type="email" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Email" />
                    {/* password  */}
                    <label className="label font-semibold text-sm">Password</label>
                    <input name='password' type="password" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Password" />
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='text-center mt-4'>Don't have an Account? <Link to='/auth/register' className='link link-hover text-secondary'>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;