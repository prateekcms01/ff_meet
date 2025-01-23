import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image from ".//../images/logo.png";

const HomePage = () => {
  const [meetingName, setMeetingName] = useState("");
  const navigate = useNavigate();

  const createMeeting = async () => {
    try {
      const response = await axios.post("/meetings/create", { meetingName });
      navigate(`/meeting/${response.data.meetingId}`);
    } catch (err) {
      console.error("Error creating meeting:", err);
      alert("Failed to create meeting. Please try again.");
    }
  };

  return (
    <div className="h-screen shadow-2xl bg-gradient-to-br from-blue-900 via-gray-900 to-black flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 text-white">
        {/* Logo Section */}
        <div className=" items-center space-x-3 flex flex-col">
          <img
            src={image} // Path to your logo
            alt=""
            className="w-10 h-16"
          />
          <span className="text-2xl font-bold">FF Meet</span>
        </div>
        <nav className="space-x-6">
          <a
            href="#features"
            className="hover:text-blue-400 transition duration-200"
          >
            Features
          </a>
          <a
            href="#about"
            className="hover:text-blue-400 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-200"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex flex-col items-center space-y-4">
          {/* <img
            src={image} // Path to your logo
            alt=""
            className="w-20 h-20"
          /> */}
          <h1 className="text-4xl font-extrabold text-white mb-7 animate-fade-in"></h1>
        </div>
        <p className="text-md text-gray-300 mb-8 max-w-xl mx-auto font-sans"></p>
        <a
          href="#create-meeting"
          className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-500 transition duration-300 shadow-lg"
        >
          Get Started
        </a>
      </div>

      {/* Create Meeting Section */}
      <div
        id="create-meeting"
        className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md animate-fade-in"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">
          Create a Meeting
        </h2>
        <input
          type="text"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter Meeting Name"
          value={meetingName}
          onChange={(e) => setMeetingName(e.target.value)}
        />
        <button
          onClick={createMeeting}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300 shadow-md"
        >
          Create Meeting
        </button>
        <p className="text-sm text-gray-400 mt-4 text-center">
          Or join an existing meeting by entering the meeting name.
        </p>
      </div>

      {/* Features Section */}
      <div id="features" className="mt-16 px-8 text-center text-white">
        <h2 className="text-4xl font-semibold mb-6">Why Choose FF Meet?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Easy to Use
            </h3>
            <p className="text-gray-300">
              Create or join meetings with just a few clicks.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Secure</h3>
            <p className="text-gray-300">
              Your data is encrypted and kept private.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              High Quality
            </h3>
            <p className="text-gray-300">
              Enjoy seamless video and audio quality.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>&copy; 2025 FF Meet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
