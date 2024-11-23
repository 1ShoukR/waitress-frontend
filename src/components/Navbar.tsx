import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../assets/icon.svg'



const Navbar = () => {
  return (
		<div className="flex justify-between items-center py-4 bg-[#F0EAD6] px-5">
			<div className="flex items-center gap-4">
				<Link to="/">
					<img className="w-20 h-20" src={Icon} alt="Generic Waitress PNG" />
				</Link>
				<Link to="/">
					<h1 className="text-xl font-semibold ">Waitress</h1>
				</Link>
			</div>
			<div className="flex gap-4">
				<Link className="text-black-700 hover:text-gray-900 font-medium" to="/create-account">
					Create Account
				</Link>
				<Link className="text-black-700 hover:text-gray-900 font-medium" to="/login">
					Login
				</Link>
			</div>
		</div>
	);
}

export default Navbar