import React, {useState, FormEvent} from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
// import { client } from '../api/client';
const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [token, setToken] = useState('')

	const handleCreateAccount = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEmailError(false);
		setPasswordError(false);

		// Regex checks
		const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

		if (!emailRegex.test(email)) {
			setEmailError(true);
			return;
		}
		if (!passwordRegex.test(password)) {
			setPasswordError(true);
			return;
		}

		// Form Data Preparation
    const jsonPayload = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			password: password,
			user_type: 'customer', // Assuming 'customer' is a flag
		};

		try {
			// API Call with JSON
			const response = await axios.post('http://127.0.0.1:3000/api/user/create', jsonPayload, {
				headers: { 'Content-Type': 'application/json' },
			});
			console.log(response);
			if (response.data.success == true) {
				setToken(response.data.created_user.token)
			}
			console.log('API TOKEN:', token)
		} catch (error) {
			console.error('Error during API call:', error);
		}
	};
  return (
		<div className="h-screen w-full flex justify-center items-center bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center w-full max-w-4xl">
				<form className="w-full max-w-2xl" onSubmit={handleCreateAccount}>
					<div className="flex flex-row items-center mb-5">
						<div className="flex flex-col items-center justify-center pr-14 mr-5">
							<FontAwesomeIcon icon={faUser} size="8x" />
							<div className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl ml-2 whitespace-nowrap mt-5">Sign Up</div>
						</div>
						<div className="border-l-2 border-gray-800 h-full self-stretch my-2"></div>
						<div className="flex flex-col w-full pl-14">
							<div className="mb-4 pt-7">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
									First Name
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="firstName"
									name="firstName"
									type="text"
									value={firstName}
									placeholder="First Name"
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
									Last Name
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="lastName"
									name="lastName"
									type="text"
									placeholder="Last Name"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
									Email
								</label>
								<input
									className={`shadow appearance-none border ${emailError ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
									id="email"
									name="email"
									type="text"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								{emailError && <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>}
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
									Password
								</label>
								<input
									className={`shadow appearance-none border ${passwordError ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
									id="password"
									name="password"
									type="password"
									placeholder="******************"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								{passwordError && <p className="text-red-500 text-xs italic">Password must include at least one uppercase letter, one number, and one special character.</p>}
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-4">
						<button
							type="submit"
							className="bg-[#D23D2B] hover:bg-[#C03238] text-white font-semibold py-3 px-11 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA3743] text-sm ">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
