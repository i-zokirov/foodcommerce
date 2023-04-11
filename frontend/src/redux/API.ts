import { API_URL } from "@/utils/AppConfig";

export default class APIRequests {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = API_URL + endpoint;
    }
}
