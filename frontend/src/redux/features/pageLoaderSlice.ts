import { createSlice } from "@reduxjs/toolkit";

export interface PageLoaderState {
    isLoading: boolean;
}

const initialState: PageLoaderState = {
    isLoading: false,
};

export const pageLoaderSlice = createSlice({
    name: "pageLoader",
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setIsLoading } = pageLoaderSlice.actions;

export default pageLoaderSlice.reducer;
