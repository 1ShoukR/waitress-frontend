import React, { useState, useEffect } from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';



const Carousel = ({ children }: { children: React.ReactNode[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % React.Children.count(children));
    }, 3000);
    return () => clearInterval(timer);
  }, [children]);

  const goToPrevious = () => {
    setCurrentIndex((current) => 
      current === 0 ? React.Children.count(children) - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((current) => 
      (current + 1) % React.Children.count(children)
    );
  };

  return (
    <div className="relative h-96">
      <div className="absolute inset-0 overflow-hidden">
        {React.Children.map(children, (child, index) => (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {child}
          </div>
        ))}
      </div>
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate()
  
  const features = [
    {
      icon: faUtensils,
      title: "Floor Plan Editor",
      description: "Design and modify your restaurant's layout with our intuitive web-based editor. Sync changes directly to your mobile app.",
      onClick: () => navigate('/admin/floorplans')
    },
    {
      icon: faClipboardList,
      title: "Table Management",
      description: "Track table status, manage seating arrangements, and optimize your dining space efficiency in real-time.",
      onClick: () => navigate('/admin/view-tables')
    },
    {
      icon: faUsers,
      title: "Staff Management",
      description: "Oversee waitstaff schedules, assignments, and performance all from one central dashboard.",
      onClick: () => navigate('/admin/manage')
    },
    {
      icon: faCalendar,
      title: "Reservation System",
      description: "Handle bookings, manage waiting lists, and coordinate special events seamlessly.",
      onClick: () => navigate('/admin/view-reservations')
    }
  ];

  const carouselItems = [
    {
      image: "/api/placeholder/1200/400",
      title: "Streamline Your Restaurant Management"
    },
    {
      image: "/api/placeholder/1200/400",
      title: "Powerful Floor Plan Editor"
    },
    {
      image: "/api/placeholder/1200/400",
      title: "Complete Restaurant Control"
    }
  ];

  return (
    <div className="w-full mx-auto">
      <Carousel>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-full">
            <img 
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold px-4 text-center">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Restaurant Command Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your restaurant's layout, staff, and operations all in one place. 
            Design floor plans on web, manage everything else on mobile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <div onClick={feature.onClick} key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-yellow-600 mb-4">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-yellow-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get Started with Floor Planning
          </h2>
          <p className="text-gray-600 mb-6">
            Use our web-based floor plan editor to create and modify your restaurant's layout. 
            Changes sync automatically with your mobile app for seamless management.
          </p>
          <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-300">
            Open Floor Plan Editor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;