import { Timestamp, FieldValue } from "firebase/firestore";

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    createdAt: Timestamp | FieldValue; // Acepta tanto Timestamp como FieldValue
}
