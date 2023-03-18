import { useState } from "react";
import TodoListForm from "./TodoListForm";
import TodoList from "./TodoList";

export default function TodoListApp() {
    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        const todosArray = [todo, ...todos];
        setTodos(todosArray);
    };

    const deleteToDo = todo => {
        const todosArray = todos.filter(t => t.id !== todo.id);
        setTodos(todosArray);
    };

    const finishedToDo = todo => {
        const todosArray = todos.map(t => {
            if (t.id === todo.id) {
                t.done = true;
            }

            return t;
        });

        setTodos(todosArray);
    };

    return (
        <div id="todolist-app">
            <TodoListForm
                addToDo={addToDo}
            />

            <TodoList
                todos={todos}
                deleteToDo={deleteToDo}
                finishedToDo={finishedToDo}
            />
        </div>
    );
}
