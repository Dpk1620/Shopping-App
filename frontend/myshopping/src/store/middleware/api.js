import axios from "axios";
import * as actions from "../api";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);
console.log("payload check ", action.payload)
        const { url, method, data, onStart, onSuccess, onError } =
            action.payload;
            console.log("payload check 123", action.payload)

        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
            const response = await axios.request({
                baseURL: "https://dummyjson.com/products",
                url,
                method,
                data,
            });
            // General
            dispatch(actions.apiCallSucess(response.data.products));
            console.log(response.data.products)
            // Specific
            if (onSuccess)
                dispatch({ type: onSuccess, payload: response.data.products });
        } 
        catch (error) {
            // // General
            dispatch(actions.apiCallFailed(error.message));
            // Specific
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;