import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext);
    const newUser = {
        id: 117,
        name: 'Jerrystk',
        email: 'jerrystroke@gmail.com'
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => setUser(newUser) }
            >
                INGRESAR!
            </button>
        </div>
    )
}
