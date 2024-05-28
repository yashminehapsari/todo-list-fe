import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


export default class Todo extends Component {
    render() {
        return(
            <div className="d-flex flex-column justify-content-center align-items-center rounded-4 bg-black bg-opacity-75" >
                <h2>Todo</h2>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}
