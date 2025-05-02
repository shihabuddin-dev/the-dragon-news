import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import QZone from './QZone';
import FindUs from '../FindUs';
import RightBottomImg from './RightBottomImg';
import { FirebaseAuthContext } from '../../provider/FirebaseAuthContext';

const RightAside = () => {
    const { user } = use(FirebaseAuthContext)
    return (
        <div className="space-y-4">
            {
                !user && <SocialLogin />
            }
            <FindUs />
            <QZone />
            <RightBottomImg />
        </div>
    );
};

export default RightAside;