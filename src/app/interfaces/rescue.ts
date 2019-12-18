/* Represents a Rescue object */
export interface Rescue {
    name: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: number;
    };
    phone: string;
    email: string;
    url: string;
    img: string;
}