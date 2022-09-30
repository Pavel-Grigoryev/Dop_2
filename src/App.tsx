import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {json} from "stream/consumers";

type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<PropsType[]>([]);
    console.log(todos);

    useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodos(json))}, [])

    const onClickHandler = () => {
        setTodos([]);
    }

    return (
        <div className="App">
            <button onClick={onClickHandler}>Clean posts</button>
            <ul>
                {todos.map(el => {
                    return (<li>
                        <span>{el.id}    </span>
                        <span>{el.id}    </span>
                        <span>{el.title}     </span>
                    </li>)
                })}
            </ul>

        </div>
    );
}

export default App;
