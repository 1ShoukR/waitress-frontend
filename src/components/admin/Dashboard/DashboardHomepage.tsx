import React, { MouseEventHandler, useState, useEffect } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { Calendar, Users, MapPin, Clock, TrendingUp, Upload } from 'lucide-react';
import { AdminDashboardData, Restaurant, ApiResponse } from '../../../utils/types';
import { useNavigate } from 'react-router-dom';

const DashboardHomepage = () => {
  const userObject = useAppSelector((state) => state?.auth);
  const [userData, setUserData] = useState<Restaurant[]>([]); 
  const navigate = useNavigate();
  
  // Fixed typing: Properly define fetchUserData as a MouseEventHandler
  const fetchUserData: MouseEventHandler<HTMLButtonElement> = () => {
    // Inside this function, we can call our async function
    fetchDataFromServer();
  };

  // Separate async function for the actual data fetching
  const fetchDataFromServer = async () => {
    try {
      const response = await fetch(`http://localhost:8080/admin/get-all-admin-data/${userObject?.userId ?? "1"}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userObject?.apiToken}`
        },
      });
      const data = await response.json() as ApiResponse;
      
      console.log("Original API response:", data);
      
      // Extract restaurant data from the success object
      if (data?.success?.restaurant) {
        let restaurantData: Restaurant[] = [];
        
        // Handle different possible formats of the restaurant data
        if (Array.isArray(data.success.restaurant)) {
          if (data.success.restaurant.length > 0) {
            // If it's a nested array, flatten it or take the first array
            if (Array.isArray(data.success.restaurant[0])) {
              restaurantData = data.success.restaurant[0] as Restaurant[];
            } else {
              restaurantData = data.success.restaurant as Restaurant[];
            }
          }
        } else {
          // Handle case where it might be a single restaurant object
          restaurantData = [data.success.restaurant as unknown as Restaurant];
        }
        
        console.log("Processed restaurant data:", restaurantData);
        setUserData(restaurantData);
      } else {
        console.log("No restaurant data found in response:", data);
        setUserData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setUserData([]);
    }
  };

  // Example data - replace with actual data from your backend
  const stats = {
    activeStaff: 8,
    todayReservations: 24,
    totalRestaurants: 3,
    averageRating: 4.5
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>
          <p className="text-gray-500">Welcome back, {userObject?.userName?.split(' ')[0] || 'Admin'}</p>
          {/* Fixed: Passing the function reference correctly, not calling it */}
          <button onClick={fetchUserData}>Fetch Data</button>
        </div>
        <div className="flex gap-4">
          <button onClick={()=> navigate('/admin/restaurant/add-new-restaurant')} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Restaurant
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Active Staff</span>
            <Users className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{stats.activeStaff}</div>
          <p className="text-xs text-gray-500">Currently working</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Today's Reservations</span>
            <Calendar className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{stats.todayReservations}</div>
          <p className="text-xs text-gray-500">Bookings for today</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Total Restaurants</span>
            <MapPin className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{stats.totalRestaurants}</div>
          <p className="text-xs text-gray-500">Locations managed</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Average Rating</span>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{stats.averageRating}/5.0</div>
          <p className="text-xs text-gray-500">Customer satisfaction</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Restaurant List */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Your Restaurants</h2>
          <div className="space-y-4">
            {userData && userData.length > 0 ? (
              userData.map((item, index) => {
                console.log(`Item ${index}:`, item);
                return(
                  <div key={item.RestaurantId || index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span>{item.Name || "Unnamed Restaurant"}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">Manage</button>
                  </div>
                )
              })
            ) : (
              <div className="p-3 text-center text-gray-500">
                No restaurants found. Click "Fetch Data" to load your restaurants.
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Reservations */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Today's Reservations</h2>
          <div className="space-y-4">
            {[
              { time: '12:30 PM', name: 'John Doe', guests: 4 },
              { time: '1:00 PM', name: 'Jane Smith', guests: 2 },
              { time: '7:30 PM', name: 'Mike Johnson', guests: 6 }
            ].map((reservation) => (
              <div key={reservation.time} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">{reservation.time}</p>
                    <p className="text-sm text-gray-500">{reservation.name} - {reservation.guests} guests</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800">Details</button>
              </div>
            ))}
          </div>
        </div>

        {/* Floor Plans */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Floor Plans</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <div className="flex flex-col items-center justify-center text-center">
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <h3 className="font-medium">Upload Floor Plan</h3>
              <p className="text-sm text-gray-500 mb-2">Drag and drop or click to upload</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Select File
              </button>
            </div>
          </div>
        </div>

        {/* Staff Schedule */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Current Staff</h2>
          <div className="space-y-4">
            {[
              { name: 'Sarah Wilson', role: 'Head Chef', status: 'active' },
              { name: 'Tom Brown', role: 'Server', status: 'active' },
              { name: 'Lisa Chen', role: 'Bartender', status: 'break' }
            ].map((staff) => (
              <div key={staff.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">{staff.name}</p>
                    <p className="text-sm text-gray-500">{staff.role}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  staff.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {staff.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomepage;