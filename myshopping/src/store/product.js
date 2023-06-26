import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// Call Api thru fetch and get data into json format thru use json()
export const fetchProducts = createAsyncThunk("fetchProducts", async ()=>{
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
})

// slice is create for intial data setup and make specific object for storing data and use reducers for performing actions
const productSlice  = createSlice({
    name: "product",
    initialState: {
        productlist: [],
        loading: false,
    },
    extraReducers:(builder)=>{
        // When request is in pending state and loding will be true during pending state
        builder.addCase(fetchProducts.pending, (state,action)=>{
            state.loading = true;
        });

        // request is fulfilled and loding will true and data will store in state object
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading = false;
            state.productlist = action.payload;
        });

        // Request rejected and error will occur
        builder.addCase(fetchProducts.rejected, (state,action)=>{
            console.log("error- Occur", action.payload)
            state.isError = true;
        })
    }
});

export default productSlice.reducer;