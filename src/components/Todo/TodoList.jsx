import { useEffect, useState } from "react";
import { IconEdit,IconTrash,IconPlus, IconCheckbox,IconSquare } from "@tabler/icons-react";
import { useSelector,useDispatch } from "react-redux";
import { selectedTodo,remove,getTodoAction } from "../slice/todoSlice";
import Loading from "../animation/Loading";

export default function TodoList() {
    const{todos,isLoading} = useSelector((state)=>state.todo)
    const [checked,setChecked] = useState([false,null])

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
                    <div className="d-flex flex-column justify-comtent-center w-75 align-items-center text-center gap-3 py-4">
                                {todos.map((todo)=>{
                                return(
                                    <div className="d-flex gap-5 justify-content-between bg-white p-3 align-items-center rounded-4" style={{width: 400}} key={todo.id}>
                                        <div>
                                            <button onClick={()=>setChecked(!todo.checked)}>{todo.checked? <IconCheckbox/>:<IconSquare/>}</button>
                                        </div>
                                        <p className="text-center w-50">{todo.task}</p>
                                            <div className="d-flex align-items-end gap-2 w-50">
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
