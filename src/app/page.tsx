"use client";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import './globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.png';
import opus from './opus.mp4';
import tile from './tile.jpeg';
import form from './form.jpeg';
import gifmaker from './gifmaker_me.gif';

export default function HomePage() {
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
    <section className="bg-black text-white flex items-center justify-center lg:w-[1350px] lg:h-[100vh] sm:w-[100%] sm:h-[90vh] flex-col">
      {/* Logo Section */}
      <div className="bg-black text-white lg:mt-[30px] lg:w-[520px] lg:mt-[60px] sm:w-[50%] lg:h-[180vh] sm:mr-[60px]  sm:mt-[-70px] sm:h-[30vh] flex items-center justify-center sm:mt-[-50px]">
        <img 
          src={logo.src} 
          alt="Logo Description" 
          className="lg:w-[260px] sm:w-[280px] lg:h-[35vh] lg:mt-[-10px] sm:h-auto object-cover"  
        />
      </div>

      {/* Main Content */}
      <div className="bg-white lg:w-[990px] sm:w-[80%] sm:mr-[20px] sm:mt-[-70px] lg:h-[70vh] sm:h-[40vh] lg:p-6 sm:p-4 lg:mr-[45px] lg:mt-[-10px] rounded-2xl">
        <div className="bg-white lg:w-full lg:h-[60vh] sm:h-[35vh]  lg:p-6 rounded-2xl custom-border flex flex-col lg:flex-row">
          {/* GIF Section */}
          <div className="bg-white lg:w-[500px] sm:w-[50%]  lg:mt-[65px] lg:h-[40vh] sm:w-[200px] sm:h-[35vh] flex justify-center items-center">
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
              <video
                className="bg-black lg:w-[1000px] lg:h-[45vh] sm:w-full sm:h-[30vh]"
                muted
                autoPlay
                loop
              >
                <source src={opus} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
  );
}
