import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
		<div className="flex justify-between p-5">
			<div className="flex justify-center flex-row-reverse">
				<h1>Waitress</h1>
				<img className="w-16 h-16 rounded-full border border-gray-300 p-1 shadow-lg" src="https://cdn-icons-png.flaticon.com/512/9570/9570098.png" alt="Generic Waitress PNG" />
			</div>
			<div className="flex justify-center flex-row gap-4">
				<Link to="/">Home</Link>
				<Link to="/create-account">Create Account</Link>
				<Link to="/login">Login</Link>
			</div>
		</div>
	);
}

export default Navbar