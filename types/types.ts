export interface LoginRequestData {
	email: string;
	password: string;
	userAgent: string | null;
}

export interface LoginResponse {
    token: string
    apiToken: string
    user: User
}

export type User = {
	userId: number;
	firstName: string;
	lastName: string;
	email: string;
	authType: string;
	latitude: number;
	longitude: number;
	address: string;
	// Entity?: any;
	// Payments: any | null; // Replace with actual type if available
	// userType: string;
	// createdAt: string;
	// darkMode: boolean;
	// Reservations: Reservation[] | null;
};