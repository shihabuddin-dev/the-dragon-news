import React, { use } from 'react';
import { Link } from 'react-router';
import { FirebaseAuthContext } from '../provider/FirebaseAuthContext';

const Register = () => {
    const { createUser, setUser } = use(FirebaseAuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo)
        createUser(email, password)
            .then((userCredential) => {
                const currentUser = userCredential.user;
                console.log(currentUser)
                setUser(currentUser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="mt-2 card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h3 className='text-center font-semibold text-xl md:text-2xl'>Register Your Account</h3>
                <form onSubmit={handleRegister} className="fieldset mt-2">
                    {/* Name  */}
                    <label className="label font-semibold text-sm">Name</label>
                    <input name='name' type="text" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Name" required />
                    {/* Photo url  */}
                    <label className="label font-semibold text-sm">Phot URL</label>
                    <input name='photo' type="text" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Phot URL" required />
                    {/* email  */}
                    <label className="label font-semibold text-sm">Email</label>
                    <input name='email' type="email" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Email" required />
                    {/* password  */}
                    <label className="label font-semibold text-sm">Password</label>
                    <input name='password' type="password" className="input focus:outline-none focus:shadow-outline focus:border-2" placeholder="Enter Your Password" required />
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    <p className='text-center mt-4'>Already have an Account? <Link to='/auth/login' className='link link-hover text-secondary'> Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;