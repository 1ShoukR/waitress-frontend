import React from 'react'



const Home = () => {
  return (
		<div className="home-container bg-cover bg-center w-full flex justify-center items-center flex-col font-bold text-gray-700 text-2xl gap-4 p-6">
			<div className="flex justify-center items-center flex-col w-1/2 bg-gradient-to-r from-[#17244D] to-[#606984] p-10 rounded-lg shadow-xl">
				<div className="text-white text-4xl mb-4">Find your table for any occasion</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-5">
					<div className="flex flex-col md:flex-row gap-3">
						<input className="p-2 rounded-md border border-gray-300" type="date" />
						<select className="p-2 rounded-md border border-gray-300" name="time" id="time">
							<option value="">7:00 PM</option>
							<option value="">8:00 PM</option>
							<option value="">9:00 PM</option>
							<option value="">10:00 PM</option>
						</select>
						<select className="p-2 rounded-md border border-gray-300" name="people" id="people">
							<option value="">1 person</option>
							<option value="">2 people</option>
							<option value="">3 people</option>
							<option value="">4 people</option>
						</select>
					</div>
					<div className="flex justify-center items-center gap-3">
						<input className="p-2 rounded-md border border-gray-300 w-full" type="text" placeholder="Location, Restaurant, or Cuisine" />
					</div>
						<button className="bg-[#DA3743] hover:bg-[#C03238] text-white font-semibold py-3 px-11 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA3743] text-sm ">
							Let's Go
						</button>
				</div>
			</div>
			<div className="text-center text-lg mt-5">Available restaurants will be shown here for users to explore</div>
			<div className="text-center text-lg mt-5">
				<div>Check out popular diners and other places near your area</div>
			</div>
			<div className="text-center text-lg mt-5">
				<div>Read reviews from our community</div>
			</div>
		</div>
	);
}

export default Home