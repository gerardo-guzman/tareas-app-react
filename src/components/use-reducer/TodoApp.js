import React, { useReducer, useEffect } from 'react';

import './styles.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

export const TodoApp = () => {


    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    const [{description}, handleInputChange, reset] = useForm({
        description : ''
    });

    console.log(todos);
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        };
        dispatch(action);
    }

    const handleToggle = (todoID) => {
        const action = {
            type: 'toggle',
            payload: todoID
        };
        dispatch(action);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
        reset();

    }

    return (
        <div>
            <h1>To do App <small>({todos.length})</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                <ul className="list-group list-group-flush">
                {
                    todos.map((todo,index ) => (
                        <li 
                            className="list-group-item"
                            key={todo.id}>
                                <p className={todo.done?'complete':''}
                                    onClick={ () => handleToggle(todo.id)}>{index + 1}. {todo.desc}</p>
                                <button className="btn btn-danger"
                                    onClick={() => handleDelete(todo.id)}>
                                    Quitar
                                </button>
                        </li>
                    ))
                }
                </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar tarea</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Algo nuevo por hacer"
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}

                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block">
                            Agregar
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
