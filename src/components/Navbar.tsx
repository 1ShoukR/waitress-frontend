import {useState} from 'react'
import { Link } from 'react-router-dom'
import Icon from '../assets/icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faCalendar, faClock, faUser } from '@fortawesome/free-solid-svg-icons'


const handleSearch = ({
	restaurant, location, date, time, numberOfPeople
}: {
	restaurant: string, 
	location: string,
	date: Date | null,
	time: string,
	numberOfPeople: number
} ) => {
	console.log({
    restaurant,
    location,
    date,
    time,
    numberOfPeople
  })
}

const SearchModal = ({ isOpen, onClose }: {isOpen: boolean, onClose: () => void}) => {
	// create useStates for the capturable values in this search modal
	const [numberOfPeople, setNumberOfPeople] = useState(1)
	const [time, setTime] = useState<string>('7:30 PM')
	const [date, setDate] = useState<Date | null>(null)
	const [restaurant, setRestaurant] = useState('')
	const [location, setLocation] = useState('')
  if (!isOpen) return null;

  const times = [
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
    '11:00 PM',
    '11:30 PM'
  ]

  const people = Array.from({length: 20}, (_, i) => {
    const count = i + 1
    return `${count} ${count === 1 ? 'person' : 'people'}`
  })
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-lg w-full max-w-4xl">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <FontAwesomeIcon icon={faCalendar} className="absolute left-3 top-3 text-gray-500" />
                <input 
                  type="date"
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  onChange={(e) => setDate(e.target.valueAsDate)}
                />
              </div>
            </div>

            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <FontAwesomeIcon icon={faClock} className="absolute left-3 top-3 text-gray-500" />
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 appearance-none bg-white"
                >
                  {times.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-500" />
                <select 
                  value={`${numberOfPeople} ${numberOfPeople === 1 ? 'person' : 'people'}`}
                  onChange={(e) => setNumberOfPeople(parseInt(e.target.value.split(' ')[0]))}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 appearance-none bg-white"
                >
                  {people.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="relative">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-3 text-gray-500" />
            <input 
              type="text" 
              value={restaurant}
              onChange={(e) => {
                setRestaurant(e.target.value)
                setLocation(e.target.value)  // We shall temporarily set the location to the restaurant for now, we will fix this later
              }}
              placeholder="Location, Restaurant, or Cuisine" 
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-900" 
              autoFocus
            />
          </div>

          <div className="text-sm text-gray-600 flex items-center gap-2">
            <span>It looks like you're in Cobb. Not correct?</span>
            <button className="text-red-500 hover:text-red-600">Get current location</button>
          </div>

          <div className="flex justify-between">
            <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
            Close
            </button>
            <button 
            className="px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
			onClick={() => handleSearch({ restaurant, location, date, time, numberOfPeople })}
            >
              Let's go
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  
  return (
    <>
      <div className="flex justify-between items-center py-4 bg-[#F0EAD6] px-5">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img className="w-20 h-20" src={Icon} alt="Generic Waitress PNG" />
          </Link>
          <Link to="/">
            <h1 className="text-3xl font-semibold">Waitress</h1>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link className="text-black-700 hover:text-gray-900 text-2xl font-medium" to="/create-account">
            Create Account
          </Link>
          <Link className="text-black-700 hover:text-gray-900 text-2xl font-medium" to="/login">
            Login
          </Link>
          <FontAwesomeIcon 
            onClick={() => setShowSearch(true)} 
            className="mt-2 cursor-pointer hover:text-gray-700" 
            size="xl" 
            icon={faMagnifyingGlass} 
          />
        </div>
      </div>
      <SearchModal 
        isOpen={showSearch} 
        onClose={() => setShowSearch(false)} 
      />
    </>
  );
}

export default Navbar