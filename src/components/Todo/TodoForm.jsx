import { IconDeviceFloppy, IconRefresh } from "@tabler/icons-react";
import { putTodoAction,postTodoAction } from "../slice/todoSlice";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema =z.object({
    id: z.string().nullable(),
    task: z.string().min(1,"task can not be blank"),
})

export default function TodoForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    }=useForm({
        mode: "onChange",
        resolver:zodResolver(schema),
        
    });


    const {todo} = useSelector((state)=>state.todo)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(todo){
            reset(todo);
        };
    },[todo]);


    const onSubmit = (form) => {
        if (form.id&&form!="") {
            const todo = {...form};
            dispatch(putTodoAction(todo));      
        }else {
            const todo ={
                ...form,
                id: new Date().getMilliseconds().toString(),
            };
            dispatch(postTodoAction(todo));      
        }
        handleReset();
    }

    const handleReset = () =>{
        reset({ id:"", task: "" })
    }

    return(
            <>
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="shadow-sm p-4 rounded-2 bg-white bg-opacity-75">
                    <div className="mb-3">
                        <input {...register("task")} placeholder="what's your plan?" type="text" className={`form-control ${errors.task &&"is-invalid"}`} id="task" name="task"/>
                        {errors.task && <div className="invalid-feedback">{errors.task.message}</div>}

                    </div>
                    {/* <div className="form-check">
                        <input onClick={handleChangeStatus} defaultValue={form.status} checked={form.status} type="checkbox" className="form-check-input" id="status" />
                        <label htmlFor="status" className="form-check-label">
                            Reserved
                        </label>
                    </div> */}
                    <div className="d-flex gap-2 mt-4">
                        <button type="submit" className="btn btn-success me-2 d-flex align-items-center gap-2">
                            <i>
                                <IconDeviceFloppy />
                            </i>Submit
                        </button>
                        <button onClick={handleReset} type="button" className="btn btn-outline-success me-2 d-flex align-items-center gap-2">
                            <i>
                                <IconRefresh />
                            </i>
                            Reset
                        </button>
                    </div>
                </form>

            </>
        )
    }
