import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../fatures/todo/todoSlice'
export const store = configureStore({

    reducer: todoReducer
    
})