import { useState, useRef, useEffect } from "react";

export default function TodoListForm({ addToDo }) {
    const [input, setInput] = useState('');

    const inputRef = useRef('');

    useEffect(
        () => {
            // Focus on the input element at every re-render.
            inputRef.current.focus();
        }
    );

    const handleInputChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (input.trim() === '') {
            return;
        }

        addToDo({
            id: Math.floor(Math.random()*10000),
            text: input,
            done: false
        });

        setInput('');
    };

    return (
        <div id="todolist-form">
            <h1 id="form-title">Todo List App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Todo"
                    name="text"
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                />

                <button>Add To Do</button>
            </form>
        </div>
    );
}
