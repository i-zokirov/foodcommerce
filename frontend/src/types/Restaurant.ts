export interface OpeningHour {
    id: string;
    weekday: number;
    opening_time: string;
    closing_time: string;
}

export interface Restaurant {
    id: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    city: string;
    street: string;
    zipcode: string;
    lng: number;
    lat: number;
    logo: string;
    banner: string;
    min_order_value: number;
    delivery_supported: boolean;
    in_store_pickup: boolean;
    opening_hours: OpeningHour[];
    managers: string[];
}
