import React from 'react';
import SocialLogin from './SocialLogin';
import QZone from './QZone';
import FindUs from '../FindUs';
import RightBottomImg from './RightBottomImg';

const RightAside = () => {
    return (
        <div className="space-y-4">
            <SocialLogin />
            <FindUs />
            <QZone />
            <RightBottomImg />
        </div>
    );
};

export default RightAside;