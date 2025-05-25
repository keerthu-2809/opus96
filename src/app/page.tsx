"use client";
import emailjs from 'emailjs-com';
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import './globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.png';
import opusGif from './opus.gif';
import tile from './tile.jpeg';
import form from './form.jpeg';
import gifmaker from './gifmaker_me.gif';
import Head from 'next/head';

export default function HomePage() {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [showEntryModal, setShowEntryModal] = useState(true); // Modal state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.send(
        'service_k60obo6',
        'template_7xpiryq',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
        },
        'c2VZMcwLQdnUsq0Qc'
      )
        .then((result) => {
          console.log("Email sent successfully:", result);
          toast.success("Thanks for connecting with us ... we will get back with best properties!");
          setFormData({ name: '', email: '', phone: '' });
        }, (error) => {
          console.error("Error sending email:", error);
          toast.error("Error sending email.");
        });
    }
  };

  return (
    <>
    {/* SEO Head Tags */}
    <Head>
  <title>Urbanrise Opus 96 - Premium Apartments & Villas in Chennai & Hyderabad</title>
  
  <meta 
    name="description" 
    content="Urbanrise Opus 96 is a 96-acre township offering premium apartments and luxury villas in South India. Perfect for families, investors, and home buyers looking for modern living spaces with world-class amenities."
  />
  
  <meta 
    name="keywords" 
    content="Urbanrise Opus 96, luxury apartments Chennai, villas Hyderabad, real estate South India, gated community flats, buy property online, 2BHK 3BHK flats, township living, real estate investment India, premium homes, integrated township"
  />
  
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Urbanrise Opus 96 - South India’s Leading Real Estate Developer" />

  <meta property="og:title" content="Urbanrise Opus 96 - Premium Township Living in South India" />
  <meta 
    property="og:description" 
    content="Explore Urbanrise Opus 96 – South India’s largest integrated township with luxury apartments, villas, and world-class amenities. Book a site visit today!"
  />
  <meta property="og:url" content="https://www.urbanriseopus96.site" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.urbanriseopus96.site/logo.png" />
</Head>

      {/* Entry Modal */}
      {showEntryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={() => setShowEntryModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Welcome! Let’s get started</h2>

            {!session ? (
              <div className="flex flex-col gap-4 mb-4">
                <button
                  onClick={() => signIn("google")}
                  className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                >
                  Sign in with Google
                </button>
              </div>
            ) : (
              <div className="text-center mb-4">
                <p>Welcome, {session.user?.name}</p>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 mt-2 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                >
                  Sign out
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-2 rounded bg-gray-800 border border-gray-700"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

              <label className="block mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-2 rounded bg-gray-800 border border-gray-700"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

              <label className="block mb-1">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 mb-2 rounded bg-gray-800 border border-gray-700"
              />
              {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

              <button
                type="submit"
                className="bg-blue-600 mt-4 w-full py-2 rounded text-white hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>

            <button
              onClick={() => setShowEntryModal(false)}
              className="mt-4 w-full text-sm underline text-gray-400 hover:text-gray-200"
            >
              Skip & Continue to Website
            </button>
          </div>
        </div>
      )}

      {/* existing Website Section — DO NOT MODIFY */}
      <section className="bg-black text-white flex items-center justify-center lg:w-[1350px] lg:h-[100vh] sm:w-[100%] sm:h-[90vh] flex-col">
        {/* Logo Section */}
        <div className="bg-black text-white lg:mt-[25px] lg:w-[520px] lg:mt-[60px] sm:w-[50%] lg:h-[180vh] sm:mr-[60px]  sm:mt-[-320px] sm:h-[30vh] flex items-center justify-center sm:mt-[-50px]">
          <img
            src={logo.src}
            alt="Logo Description"
            className="lg:w-[260px] sm:w-[280px] lg:h-[35vh] lg:mt-[-58px] sm:h-[25vh] sm:mt-[-68px] object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="bg-white lg:w-[990px] sm:w-[80%] sm:mr-[20px] sm:mt-[-70px] lg:h-[70vh] sm:h-[40vh] lg:p-6 sm:p-4 lg:mr-[45px] lg:mt-[-10px] rounded-2xl">
          <div className="bg-white lg:w-full lg:h-[60vh] sm:h-[35vh]  lg:p-6 rounded-2xl custom-border flex flex-col lg:flex-row">
            {/* GIF Section */}
            <div className="bg-white lg:w-[500px] sm:w-[50%]  lg:mt-[30px] lg:h-[40vh] sm:w-[200px] sm:h-[35vh] flex justify-center items-center">
              <img
                src={gifmaker.src}
                alt="Your GIF description"
                className="lg:w-[420px]  sm:w-[350px] lg:h-[55vh] sm:w-[450px] sm:h-[30vh]"
              />
            </div>
            {/* Booking Section */}
            <div className="flex flex-col items-center lg:ml-6 sm:mt-4">
              <div className="bg-black lg:w-[380px] sm:w-[190px] lg:h-[45vh] lg:mr-[120px] lg:mt-[-10px] sm:h-[15vh] sm:mt-[-350px] sm:ml-[50%] rounded-2xl overflow-hidden">
                <img
                  src={tile.src}
                  alt="Tile Description"
                  className="lg:w-full lg:h-[25vh] sm:w-[180px] sm:h-[15vh] flex"
                />
              </div>
              <h3 className="text-gradient font-bold lg:text-[30px] sm:text-[18px] lg:mt-4 sm:mt-[50px] sm:ml-[290px]">
                Bookings are open now! Schedule site visit
              </h3>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-black lg:w-[1350px] lg:mt-[25px] lg:ml-[-190px] sm:mt-[41px] sm:w-[720px] sm:ml-[-80px] lg:h-[40vh] lg:p-6 rounded-2xl">
            <h3 className="text-gradient_1 font-bold text-[45px] text-center lg:mt-[30px] sm:text-[28px]">
              96 - ACRE MEGA INTEGRATED TOWNSHIP
            </h3>
            <p className="font-bold text-[18px] lg:mt-6 text-center mx-4 sm:text-[16px]">
              Experience the ultimate blend of Glamour and Luxury, crafted by South India’s Largest Real Estate Developer. Stay tuned for exciting updates as we unveil more about this exclusive opportunity.
            </p>
          </div>

          {/* Video & Form Section */}
          <div className="bg-black lg:w-[1350px] lg:ml-[-190px] sm:w-[720px] sm:mt-[2px] sm:ml-[-70px] lg:h-auto sm:h-[350px] lg:p-6 rounded-2xl lg:mt-[-10px]">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-4">
              {/* Video Section */}
              <div className="bg-black lg:w-[720px] sm:w-[100%]">
                <img
                  src={opusGif.src}
                  className="bg-black lg:w-[1000px] lg:h-[60vh] sm:w-full sm:h-[30vh] object-cover"
                  alt="Description of your GIF"
                  loading="lazy"
                />
              </div>

              {/* Form Section */}
              <div className="relative custom-border bg-black lg:w-[580px] sm:w-[100%] lg:h-[65vh] lg:p-6 rounded-2xl overflow-hidden lg:ml-4 sm:mt-4">
                <img
                  src={form.src}
                  alt="Form Background"
                  className="absolute top-0 left-0 w-full h-full flex"
                />
                <form className="relative z-10 text-white p-4" onSubmit={handleSubmit}>
                  <label className="text-gradient_2 block mb-2">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 mb-4"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}

                  <label className="text-gradient_2 block mb-2">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 mb-4"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}

                  <label className="text-gradient_2 block mb-2">Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 mb-4"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-red-500">{errors.phone}</p>}

                  <button type="submit" className="button-gradient_2 text-white rounded-md p-2 w-full mt-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <ToastContainer />
        </div>
      </section>
    </>
  );
}
