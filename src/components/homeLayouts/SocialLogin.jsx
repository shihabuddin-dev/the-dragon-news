import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FirebaseAuthContext } from '../../provider/FirebaseAuthContext';

const SocialLogin = () => {
    const { createUserByGoogle, setUser } = use(FirebaseAuthContext)
    const handleSignUpGoogle = () => {
        createUserByGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                console.log(error)
            });

    }
    return (
        <div>
            <h2 className='font-semibold'>Login With</h2>
            <div className='mt-4 space-y-3'>
                <button onClick={handleSignUpGoogle} className='btn btn-outline btn-secondary w-full'><FcGoogle size={24} /> login With Google
                </button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub
                    size={24} /> login With GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;