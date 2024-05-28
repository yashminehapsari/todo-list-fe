import { useEffect } from "react";
import { IconEdit,IconTrash,IconPlus } from "@tabler/icons-react";
import { useSelector,useDispatch } from "react-redux";
import { selectedTodo,remove,getTodoAction } from "../slice/todoSlice";
import Loading from "../animation/Loading";

export default function TodoList() {
    const{todos,isLoading} = useSelector((state)=>state.todo)

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getTodoAction());
    },[dispatch]);

    if(isLoading) {
        return <Loading/>;
    }

    const handleSelectedTodo = (todo) =>{
        dispatch(selectedTodo(todo));

    }
        return(
            <>
                    <div className="todo-responsive">
                        <button onClick={()=>handleSelectedTodo({id:"",task:""})} className="btn btn-success m-4">
                            <IconPlus size={22}/>
                            Insert New Todo
                        </button>                        
                        <table className="todo">
                            <thead>
                                <tr>
                                    <th style={{color:"#bccbd2"}}>No</th>
                                    <th>ID</th>
                                    <th>Todo Name</th>
                                    {/* <th>Status</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo,idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td style={{color:"#bccbd2"}}>{++idx}</td>
                                        <td>{todo.id}</td>
                                        <td>{todo.task}</td>
                                        {/* <td>
                                            <span className={`badge text-white ${
                                                todo.status ? "text-bg-danger" : "text-bg-success"
                                            }`}>
                                                {todo.status ? "Reserved":"Empty"}
                                            </span>
                                        </td> */}
                                        <td>
                                            <div className="d-flex gap-2">
                                                <button onClick={()=>handleSelectedTodo(todo)} className="btn btn-success">
                                                    <IconEdit size={22}/>
                                                </button>
                                                <button onClick={()=>dispatch(remove(todo.id))} className="btn btn-danger text-white">
                                                    <IconTrash size={22}/>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>

            </>
            )
    }