/** Represents an Animal Object */
export interface Animal {
    type: string; // Species
    available: boolean; // Is the animal available
    name: string; // Animal's name
    location: string; // What rescue
    color: string;
    sex: string;
    age: string;
    size: string;
    weight: string;
    description: string;
    original_link: string; // Link to the rescue where it was posted.
    date_added: Date; // Date the animal was available for adoption.
    id: number; // Incremented manually but unique.
    image: string; // Url to image, could be local or link to file.
}
