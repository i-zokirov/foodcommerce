import APIRequests from "@/redux/API";
import { Restaurant } from "@/types/Restaurant";
import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";

export default class RestaurantsApi extends APIRequests {
    constructor() {
        super("/restaurants");
    }
    fetchRestaurants = async (): Promise<Restaurant[] | ApiError> => {
        try {
            const response = await axios.get(this.endpoint);
            return response.data;
        } catch (error: any) {
            return {
                message: error.message,
                statusCode: error.response.status,
            } as ApiError;
        }
    };
}
