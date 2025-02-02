import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import ProfileHomepage from './components/admin/Profile'
import FloorplanHomepage from './components/admin/FloorplanHomepage'

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileHomepage />} />
          <Route path="/admin/floorplans" element={<FloorplanHomepage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App