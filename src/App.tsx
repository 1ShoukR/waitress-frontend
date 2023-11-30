import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create-account" element={<CreateAccount />} />
				<Route path="/create-account" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App
