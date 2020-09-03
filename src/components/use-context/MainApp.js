import React, { useState } from 'react'
import { RouterApp } from './Router';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const [user, setUser] = useState({
        //
    });
    return(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <RouterApp />
        </UserContext.Provider>
    )
    
}
