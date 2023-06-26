import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async ()=>{
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
})

const productSlice  = createSlice({
    name: "product",
    initialState: {
        productlist: [],
        loading: false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state,action)=>{
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading = false;
            state.productlist = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state,action)=>{
            console.log("error- Occur", action.payload)
            state.isError = true;
        })
    }
    
    // reducers: {
    //     productRequested: (product, action) => {
    //         console.log(product,"productRequested")
    //         product.loading = true;
    //     },

    //     productReceived: (product, action) => {
    //         console.log(product,"productReceived")
    //         product.productlist = action.payload;
    //         product.loading = false;
    //     },

    //     productRequestFailed: (product, action) => {
    //         console.log(product,"productRequestFailed")
    //         product.loading = false;
    //     },
    // },
});

export default productSlice.reducer;
