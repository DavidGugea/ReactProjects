import { AiFillCloseCircle } from 'react-icons/ai';
import { MdDone } from "react-icons/md";

export default function TodoList({ todos, deleteToDo, finishedToDo }) {
    const todoList = todos.map(
        todo => {
            return (
                <div key={todo.id} className={todo.done ? "todo-container todo-container-done" : "todo-container"}>
                    <div className="todo-text">
                        <p>{todo.text}</p>
                    </div>
                    <div className="todo-options">
                        <AiFillCloseCircle onClick={() => deleteToDo(todo)} className="todo-button todo-button-close" />
                        <MdDone
                            onClick={() => {
                                // Only re-render if the todo hasn't been finished yet.
                                if (done.todo === false) {
                                    finishedToDo(tood);
                                }
                            }}
                            className="todo-button todo-button-done"
                        />
                    </div>
                </div>
            );
        }
    );

    return (
        <div id="todoList">
            {todoList}
        </div>
    );
}
