"use client";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import './globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success("Thanks for connecting with us ... we will get back with best properties!");
        setFormData({ name: '', email: '', phone: '' });
      }, (error) => {
        toast.error("Error sending email.");
      });
    }
  };

  return (
    <section className="bg-black text-white flex items-center justify-center lg:w-[1350px] lg:h-[100vh] sm:w-[725px] sm:h-[50vh]">
      <div className="bg-black text-white lg:mt-[-80px] lg:w-[520px] sm:w-[1550px] lg:h-[40vh] sm:h-[50vh] sm:mt-[-480px] sm:ml-[-100px] flex items-center justify-center">
        <img 
          src="/images/logo.png"  
          alt="Logo Description" 
          className="lg:w-[480px] sm:w-[220px] lg:h-auto sm:h-[15vh] object-cover"  
        />
      </div>

      <div className="bg-white lg:w-[810px] sm:w-[895px] lg:h-[90vh] sm:h-auto lg:p-6 sm:p-6  lg:mr-[65px] rounded-2xl">
        <div className="bg-white lg:w-full lg:h-[78vh] lg:p-6 mr-auto rounded-2xl custom-border flex flex-col lg:flex-row">
          <div className="bg-white lg:w-[450px] lg:h-[70vh] sm:w-[320px] sm:h-auto flex justify-center items-center">
            <img 
              src="/images/gifmaker_me.gif"  
              alt="Your GIF description"
              className="lg:w-[480px] lg:h-[70vh] sm:w-full sm:h-auto"
            />
          </div>
          <div className="flex flex-col items-center lg:ml-6">
            <div className="bg-black lg:w-[380px] sm:w-[260px] lg:h-[40vh] sm:h-[14vh] rounded-2xl overflow-hidden">
              <img 
                src="/images/tile.jpeg"
                alt="Tile Description" 
                className="lg:w-full lg:h-[45vh] sm:w-full sm:h-auto object-cover"  
              />
            </div>
            <h3 className="text-gradient font-bold lg:text-[30px] sm:text-[21px] mt-4 text-center">
              Bookings are open now! Schedule site visit
            </h3>
          </div>
        </div>

        <div className="bg-black lg:w-[1350px] lg:mt-[79px]  lg:ml-[-500px] sm:w-full lg:h-auto lg:p-6 rounded-2xl ">
          <h3 className="text-gradient_1 font-bold text-[45px] text-center mt-4">
            96 - ACRE MEGA INTEGRATED TOWNSHIP
          </h3>
          <p className="font-bold text-[18px] lg:mt-6 text-center mx-4">
            Experience the ultimate blend of Glamour and Luxury, crafted by South India’s Largest Real Estate Developer. Stay tuned for exciting updates as we unveil more about this exclusive opportunity, bringing you closer to a life of luxury and distinction.
          </p>
        </div>

        <div className="bg-black lg:w-[1350px] lg:ml-[-500px] sm:w-full lg:h-auto sm:h-auto lg:p-6 rounded-2xl lg:mt-[-10px]">
          <hr className="border-t-1 border-gray-300 lg:my-4 sm:my-2" />
          <h6 className="text-gradient_2 font-bold lg:text-[20px] text-center lg:mt-6 sm:text-[35px]">
            Discover more with us!
          </h6>
          <h6 className="text-gradient_2 font-bold lg:text-[20px] text-center">
            We&apos;re here to provide expert guidance along the way..
          </h6>
          <p className="font-bold lg:text-[18px] text-center mt-2">For more Updates.</p>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-4">
            {/* Video Section */}
            <div className="bg-black lg:w-[720px] sm:w-full">
              <video
                className="bg-black lg:w-[1000px] lg:h-[45vh] sm:w-full sm:h-auto"
                muted
                autoPlay
                loop
              >
                <source src="/images/opus.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Form Section */}
            <div className="relative custom-border bg-black lg:w-[580px] sm:w-full lg:h-[65vh] lg:p-6 rounded-2xl overflow-hidden lg:ml-4">
              <img 
                src="/images/form.jpeg"  
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

                <button type="submit" className="button-gradient_2 px-4 py-2 w-full mt-2 rounded-2xl">
                  Stay tuned
                </button>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
