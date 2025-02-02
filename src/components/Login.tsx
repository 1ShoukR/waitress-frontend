import React, { FormEvent} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser } from '../redux/authReducer';
import { redirect, useNavigate } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	console.log('working');

	const formData = new FormData();
	formData.append('email', email);
	formData.append('password', password);
	formData.append('userAgent', 'web')

	try {
		const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log('Response:', response);
		if (response.status == 200 && response.data.token.length) {
		dispatch(setUser(response.data))
		navigate('/')
		}
	} catch (error) {
		console.error('Error:', error);
	}
};
  return (
		<div className="h-screen w-full flex justify-center items-center bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center w-full max-w-4xl">
				<form className="w-full max-w-2xl" onSubmit={(e) => handleLogin(e)}>
					<div className="flex flex-row items-center mb-5">
						<div className="flex flex-col items-center justify-center pr-14 mr-5">
							<FontAwesomeIcon icon={faUser} size="8x" />
							<div className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl ml-2 whitespace-nowrap mt-5">Login</div>
						</div>
						<div className="border-l-2 border-gray-800 h-full self-stretch my-2"></div>
						<div className="flex flex-col w-full pl-14">
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									name="email"
									type="text"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
									Password
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									name="password"
									type="password"
									placeholder="******************"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-4">
						<button
							type="submit"
							className="bg-[#D23D2B] hover:bg-[#C03238] text-white font-semibold py-3 px-11 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA3743] text-sm ">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login