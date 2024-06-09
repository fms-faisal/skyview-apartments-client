import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyProfile = () => {
    const {user} = useAuth();
    return (
        <div>
           <p>{user.displayName} {user.email} </p> 
        </div>
    );
};

export default MyProfile;