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
                    <div className="d-flex flex-column justify-comtent-center table-responsive w-75 align-items-center">
                                {todos.map((todo)=>{
                                return(
                                    <div className="d-flex gap-5" key={todo.id}>
                                        <p>{todo.task}</p>
                                        {/* <td>
                                            <span className={`badge text-white ${
                                                todo.status ? "text-bg-danger" : "text-bg-success"
                                            }`}>
                                                {todo.status ? "Reserved":"Empty"}
                                            </span>
                                        </td> */}
                                            <div className="d-flex gap-2">
                                                <button onClick={()=>handleSelectedTodo(todo)} className="btn btn-success">
                                                    <IconEdit size={22}/>
                                                </button>
                                                <button onClick={()=>dispatch(remove(todo.id))} className="btn btn-danger text-white">
                                                    <IconTrash size={22}/>
                                                </button>
                                            </div>
                                    </div>
                                )
                            })}
                    </div>

            </>
            )
    }
