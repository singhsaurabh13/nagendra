import React from 'react';
import img from '../assets/groups.jpg';
import img1 from '../assets/charity.jpg';
import img2 from '../assets/person.jpg';
import img3 from '../assets/event.webp'
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className='pt-16 bg-gray-50'>
      {/* Main Heading */}
      <div className="text-center mb-16 mt-20">
        <h1 className="text-5xl font-extrabold text-gray-800">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
        Check out our service offerings
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 md:mx-20">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
          <img 
            src={img}
            alt="Group Gifting"
            className="rounded-lg mb-6 w-full h-48 object-cover"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Group Gifting</h2>
          <p className="text-gray-600 mb-6">
            Easily collect funds for a group gift. Whether it's for a birthday, wedding, or any special occasion, invite friends and family to contribute towards a joint present with ease.
          </p>
          {/* Button */}
          <Link to="/contact">
          <button className="bg-slate-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
            Contact Us
          </button>
          </Link>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
          <img 
            src={img1}
            alt="Charity Events"
            className="rounded-lg mb-6 w-full h-48 object-cover"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Charity Events</h2>
          <p className="text-gray-600 mb-6">
            Organize charity events with ease. Collect donations online, create personalized fundraising pages, and watch contributions come in securely and transparently.
          </p>
          {/* Button */}
          <Link to="/contact">
          <button className="bg-slate-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
            Contact Us
          </button>
          </Link>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
          <img 
            src={img2}
            alt="Personalized Gifting"
            className="rounded-lg mb-6 w-full h-48 object-cover"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Personalized Gifting</h2>
          <p className="text-gray-600 mb-6">
            We offer personalized gifting services. Whether it's a custom-made present or a heartfelt message, our platform makes it easy to give something unique and meaningful.
          </p>
          {/* Button */}
          <Link to="/contact">
          <button className="bg-slate-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
            Contact Us
          </button>
          </Link>
        </div>

        {/* Service 4 */}

        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
          <img 
            src={img3}
            alt="Personalized Gifting"
            className="rounded-lg mb-6 w-full h-48 object-cover"/>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Events Gifting</h2>
          <p className="text-gray-600 mb-6">
          At GiftDgift, we specialize in curating unique gifting solutions for all kinds of events and occasions. Whether it’s a corporate gathering, a wedding celebration, a baby shower, or a festive holiday party, our gifting services are designed to add a personal and meaningful touch to your events.
          </p>
          {/* Button */}
          <Link to="/contact">
          <button className="bg-slate-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
