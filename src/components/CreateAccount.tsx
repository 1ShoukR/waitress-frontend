import React, {useState} from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { client } from '../api/client';
const CreateAccount = () => {
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEmailError(false); 
		setPasswordError(false); 
		const target = e.target as typeof e.target & {
			firstName: { value: string };
			lastName: { value: string };
			email: { value: string };
			password: { value: string };
		};
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
			if (!emailRegex.test(target.email.value)) {
				setEmailError(true); 
				return; 
			}
			if (!passwordRegex.test(target.password.value)){
				setPasswordError(true)
				return
			}


		const formData = new FormData();
		const formFields = {
			first_name: target.firstName.value,
			last_name: target.lastName.value,
			email: target.email.value,
			password: target.password.value,
			customer: 'true', // Assuming 'customer' is a flag
		};

		for (const [key, value] of Object.entries(formFields)) {
			formData.append(key, value);
		}
		console.log(formData);

		const response = await client.post('user/create', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		console.log(response.data);
		console.log('First Name:', target.firstName.value);
		console.log('Last Name:', target.lastName.value);
		console.log('Email:', target.email.value);
		console.log('Password:', target.password.value);
	};
  return (
		<div className="h-screen w-full flex justify-center items-center bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center w-full max-w-4xl">
				<form className="w-full max-w-2xl" onSubmit={handleLogin}>
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
									placeholder="First Name"
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
								/>
								{passwordError && <p className="text-red-500 text-xs italic">Password must include at least one uppercase letter, one number, and one special character.</p>}
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-4">
						<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
