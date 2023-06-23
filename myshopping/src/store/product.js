import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "product",
    initialState: {
        productlist: [],
        loading: false,
    },

    reducers: {
        productRequested: (product, action) => {
            console.log(product,"productRequested")
            product.loading = true;
        },

        productReceived: (product, action) => {
            console.log(product,"productReceived")
            product.productlist = action.payload;
            product.loading = false;
        },

        productRequestFailed: (product, action) => {
            console.log(product,"productRequestFailed")
            product.loading = false;
        },
    },
});

export default slice.reducer;

const { productRequested, productReceived, productRequestFailed } = slice.actions;


export const loadproduct = () => (dispatch) => {
    console.log(dispatch,"dispatch action check product,js")
    return dispatch(
        apiCallBegan({
            onStart: productRequested.type,
            onSuccess: productReceived.type,
            onError: productRequestFailed.type,
        })
    );
};