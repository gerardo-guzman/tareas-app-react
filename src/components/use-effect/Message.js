import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {

        const mouseMove = (e) => {
            setCoords({x: e.x, y: e.y});
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    const {x, y} = coords;

    return (
        <div>
            <h3>Hola, sou goku!</h3>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}
