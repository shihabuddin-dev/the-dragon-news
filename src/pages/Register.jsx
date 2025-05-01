import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="mt-2 card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h3 className='text-center font-semibold text-xl md:text-2xl'>Register Your Account</h3>
                <form className="fieldset mt-2">
                    {/* Name  */}
                    <label className="label font-semibold text-sm">Name</label>
                    <input name='name' type="text" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Name" />
                    {/* Photo url  */}
                    <label className="label font-semibold text-sm">Phot URL</label>
                    <input name='photo' type="text" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Phot URL" />
                    {/* email  */}
                    <label className="label font-semibold text-sm">Email</label>
                    <input name='email' type="email" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Email" />
                    {/* password  */}
                    <label className="label font-semibold text-sm">Password</label>
                    <input name='password' type="password" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                    <p className='text-center mt-4'>Already have an Account? <Link to='/auth/login' className='link link-hover text-secondary'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;