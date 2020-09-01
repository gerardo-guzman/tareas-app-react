import React, { useRef } from 'react';
import '../use-effect/effects.css';

export const FocusScreen = () => {

    const inputref = useRef();

    const handleClick = (e) => {
        inputref.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                ref={inputref}
                className="form-control"
                placeholder="jerry"
            />
            <button
                onClick={handleClick} 
                className="btn btn-outline-primary mt-3">
                Focus
            </button>
        </div>
    )
}
