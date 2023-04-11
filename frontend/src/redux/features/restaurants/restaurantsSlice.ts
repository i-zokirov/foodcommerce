import { Restaurant } from "@/types/Restaurant";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RestaurantsApi from "./restaurantsApi";
import ApiError from "@/types/ApiError";

export interface RestaurantsState {
    loading: boolean;
    entities: Restaurant[] | null;
    error: ApiError | null;
}

export const initialState: RestaurantsState = {
    loading: false,
    entities: null,
    error: null,
};

export const getRestaurants = createAsyncThunk(
    "restaurants/getRestaurants",
    async () => {
        const restaurantsApi = new RestaurantsApi();
        const restaurants = await restaurantsApi.fetchRestaurants();
        return restaurants;
    }
);

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {
        // getRestaurants: (state) => {
        //     state.loading = true;
        // },
        // getRestaurantsSuccess: (state, action) => {
        //     state.loading = false;
        //     state.list = action.payload;
        // },
        // getRestaurantsFailure: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurants.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRestaurants.fulfilled, (state, action) => {
            state.loading = false;
            state.entities = action.payload as Restaurant[];
        });
        builder.addCase(getRestaurants.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error as ApiError;
        });
    },
});

export default restaurantsSlice.reducer;
