import React from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { client } from '../api/client';
const CreateAccount = () => {
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			firstName: { value: string };
			lastName: { value: string };
			email: { value: string };
			password: { value: string };
		};

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
			<div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
				<div className="flex flex-row items-center w-full mb-5">
					<div className="flex flex-col items-center justify-center pr-14">
						<FontAwesomeIcon icon={faUser} size="2xl" />
						<div className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl ml-2 whitespace-nowrap">Sign Up</div>
					</div>
					<form className="w-full max-w-sm" onSubmit={handleLogin}>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
								First Name
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="firstName"
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
								type="text"
								placeholder="Last Name"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="text"
								placeholder="Email"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
								Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="******************"
							/>
						</div>
						<button type='submit' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
