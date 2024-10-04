"use client"; // This line makes the component a Client Component

import { useState } from "react"; // Import useState for state management
import { FiMenu } from "react-icons/fi"; // Importing the FiMenu icon

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to open and close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center px-4 md:px-0">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold text-orange-500">
            Pangxito
          </div>

          {/* Navigation for Desktop */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 text-gray-700">
            <li>
              <a href="#services" className="hover:text-orange-500">
                Services
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-orange-500">
                Menu
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Menu and Sign Up for Mobile */}
          <div className="flex items-center ml-auto md:hidden">
            <button onClick={toggleModal} className="text-gray-700">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Sign Up button visible on mobile and desktop */}
          <a
            href="#signup"
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition ml-4"
          >
            Sign Up
          </a>
        </nav>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-orange-500"
                  onClick={toggleModal}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-700 hover:text-orange-500"
                  onClick={toggleModal}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-orange-500"
                  onClick={toggleModal}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#signup"
                  className="bg-orange-500 text-white px-4 py-2 rounded-full text-center hover:bg-orange-600 transition"
                  onClick={toggleModal}
                >
                  Sign Up
                </a>
              </li>
            </ul>
            <button className="mt-4 text-gray-500" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
