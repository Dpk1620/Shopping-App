import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";

export default function store() {
    return configureStore({
        reducer:{
            product: productReducer
            
        },
    });
}