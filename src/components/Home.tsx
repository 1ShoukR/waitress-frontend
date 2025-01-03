import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Important!

const Home = () => {
  return (
    <div className="w-full  mx-auto ">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div className="h-[400px]">
          <img 
            src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" 
            alt="Restaurant Interior 1"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-[400px]">
          <img 
            src="https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg" 
            alt="Restaurant Interior 2"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-[400px]">
          <img 
            src="https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg" 
            alt="Restaurant Interior 3"
            className="object-cover h-full w-full"
          />
        </div>
      </Carousel>
      <div className="w-full h-[400px] bg-gray-200 flex justify-center items-center">
        <div className="text-4xl font-bold text-gray-800">Welcome to the Waitress!</div>
      </div>
    </div>
  );
};

export default Home;