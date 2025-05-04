// AdminDashboardData interface with restaurant support
export interface AdminDashboardData {
  userId: string | number;
  email: string;
  firstName: string;
  lastName: string;
  authType: string;
  // Added restaurants field
  restaurants?: Restaurant[];
}

// Restaurant interface based on the provided object structure
export interface Restaurant {
  RestaurantId: number;
  Name: string;
  Address: string;
  AverageRating: number;
  Categories: any | null;
  Email: string;
  ImageURL: string;
  Latitude: number;
  Longitude: number;
  MenuItems: any | null;
  NumberOfTables: number;
  Owner: RestaurantOwner;
  OwnerID: number;
  Phone: string;
  Ratings: any | null;
  Receipts: any | null;
  Reservations: any | null;
  ReviewCount: any | null;
  Website: string | null;
}

// Owner interface for the restaurant
export interface RestaurantOwner {
  AccessRevoked: boolean;
  Address: string | null;
  AuthType: string;
  Email: string;
  Entity: OwnerEntity;
  Latitude: number;
  Longitude: number;
  Payments: any | null;
  Phone: string | null;
  ProfileImage: string | null;
  Ratings: any | null;
  Reservations: any | null;
  UserID: number;
}

// Entity interface for the owner
export interface OwnerEntity {
  CreatedAt: string;
  DeletedAt: string | null;
  EntityID: number;
  FirstName: string;
  LastName: string;
  Type: string;
  UpdatedAt: string;
}

// Success response structure based on your console output
export interface ApiResponse {
  success: {
    entity: {
      entityId: number;
      firstName: string;
      lastName: string;
      type: string;
      createdAt: string;
    };
    restaurant: Restaurant[] | Restaurant[][];
    user: {
      userId: number | string;
      entityId: number | string;
      email: string;
      accessRevoked: boolean;
      authType: string;
    };
  };
}