import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


export default class Todo extends Component {
    render() {
        return(
            <div className="d-flex  align-items-center rounded-4 bg-opacity-75 p-5 bg-primary justify-content-around" >
                <h2 style= {{width:200}} >Mini To-Do List</h2>
                <div style={{width:300}}>
                <TodoForm />
                </div>
                <div style={{width:500}}>
                <TodoList />
                </div>
            </div>
        )
    }
}
