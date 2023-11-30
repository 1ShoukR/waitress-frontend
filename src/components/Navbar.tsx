import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
		<div className="flex justify-between items-center py-4 bg-[#f7f7f7] px-5">
			<div className="flex items-center gap-4">
				<Link to="/">
					<img className="w-16 h-16 rounded-full border border-gray-300 shadow-lg" src="https://cdn-icons-png.flaticon.com/512/9570/9570098.png" alt="Generic Waitress PNG" />
				</Link>
				<Link to="/">
						<h1 className="text-xl font-semibold">Waitress</h1>
				</Link>
			</div>
			<div className="flex gap-4">
				<Link className="text-gray-700 hover:text-gray-900 font-medium" to="/create-account">
					Create Account
				</Link>
				<Link className="text-gray-700 hover:text-gray-900 font-medium" to="/login">
					Login
				</Link>
			</div>
		</div>
	);
}

export default Navbar