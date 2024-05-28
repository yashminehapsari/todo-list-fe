import TodoService from "../service/todoService.js";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const service = TodoService();

export const getTodoAction = createAsyncThunk('todo/getTodo',async ()=>{
    return await service.getAll();
})

export const postTodoAction = createAsyncThunk('todo/postTodo',async (payload,thunkAPI)=>{
    const response = await service.create(payload)
    await thunkAPI.dispatch(getTodoAction())
    return response;
})
export const putTodoAction = createAsyncThunk('todo/putTodo',async (payload,thunkAPI)=>{
    const response = await service.update(payload)
    await thunkAPI.dispatch(getTodoAction())
    return response;
})

const todoSlice = createSlice ({
    name:"todo",
    initialState:{
        todos:[],
        todo:null,
        isLoading:false,
        message:"",
    },

    reducers: {
        add: (state, {payload}) => {
            state.todos.push(payload);
        },
        remove : (state, {payload}) => {
            if (!confirm("delete row?")) return;
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
        selectedTodo : (state, {payload}) => {
            state.todo = payload;
            // state.todo = state.todos.find(todo=>{todo.id==payload.id})
            console.log(state.todo);
        },
        update : (state, {payload}) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return {...payload}
                }
                return todo;
            })
        }
    },

    extraReducers: (builder) =>{
        builder.addCase(getTodoAction.pending,(state)=>{
            state.isLoading= true;
        }),
        builder.addCase(getTodoAction.fulfilled,(state,{payload})=>{
            console.log(payload);
            state.todos=payload;
            state.isLoading=false;
        }),
        builder.addCase(getTodoAction.rejected,(state)=>{
            state.isLoading=false;
        }),
        builder.addCase(postTodoAction.pending,(state)=>{
            state.isLoading= true;
        }),
        builder.addCase(postTodoAction.fulfilled,(state,{payload})=>{
            state.message=payload;
            state.isLoading=false;
        }),
        builder.addCase(postTodoAction.rejected,(state)=>{
            state.isLoading=false;
        }),
        builder.addCase(putTodoAction.pending,(state)=>{
            state.isLoading= true;
        }),
        builder.addCase(putTodoAction.fulfilled,(state,{payload})=>{
            state.message=payload;
            state.isLoading=false;
        }),
        builder.addCase(putTodoAction.rejected,(state)=>{
            state.isLoading=false;
        })
    }
})
export const {add,remove,selectedTodo,update}=todoSlice.actions;

export default todoSlice;