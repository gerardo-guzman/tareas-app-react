import React, { useState } from 'react';
import '../use-effect/effects.css';
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks';

export const ExampleRef = () => {

    const [show, setshow] = useState(false);

    return (
        <div>
            <h1>Ejemplo de Ref (Real xD)</h1>
            <hr />
            { show && <MultipleCustomHooks /> }
            <button
                onClick={() => setshow(!show)} 
                className="btn btn-primary mt-3">
                show
            </button>
        </div>
    )
}
