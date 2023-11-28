import React from 'react'



const Home = () => {
  return (
    <div className='home-container bg-cover bg-center h-screen w-full flex justify-center items-center flex-col font-bold text-gray-700 text-2xl gap-4 p-6'>
        <div className=''>
            Welcome to Waitress. Your stop for fast and easy food ordering.
        </div>
        <div>
            This is a work in progress, so nothing is set in stone, but the idea is to have a simple, easy to use, and fast food ordering system.
            This is for the customer side of things, but there will be a separate system for the restaurant side of things.
            The customer is able to reserve a table at their favorite restaurant, or restaurant they want to try out.
            The customer is able to order the food they want, and the restaurant will be notified of the order.
            The customer is able to pay for their food, and the restaurant will be notified of the payment.
            The customer is able to tip the waiter assigned to the order, and the restaurant will be notified of the tip.
            The customer will be told when to arrive to the restaurant, and where their assigned table is located.
        </div>
    </div>
  )
}

export default Home