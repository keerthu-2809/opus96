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
        'c2VZMcwLQdnUsq0Qc' // Ensure this is your actual User ID
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
    <section className="bg-black text-white lg:w-screen lg:h-screen sm:w-[1085px] sm:h-[1300px] flex items-center justify-center">
      <div className="bg-black text-white lg:w-[520px]  sm:w-[1550px] lg:h-[40vh] sm:h-[50vh] sm:mt-[-750px] lg:mt-[-350px] sm:ml-[2480px] lg:ml-[520px] ">
        <img 
          src="/images/logo.png"  
          alt="Logo Description" 
          className="lg:w-[480px] sm:w-[320px] lg:h-[40vh] sm:h-[25vh] lg:ml-[740px] sm:ml-[860px] lg:mt-[-20px] object-cover"  
        />
      </div>

      <div className="bg-white lg:w-[1110px] sm:w-[815px] lg:h-[90vh] sm:h-[35vh] lg:p-6 sm:p-6 lg:mt-[350px] sm:mt-[-300px] rounded-2xl sm:mr-[3320px] lg-mr-[720px] ">
        <div className="bg-white lg:w-[150px] lg:h-[78vh] lg:p-6 lg:mt-[10px]  mr-auto rounded-2xl custom-border flex justify-between items-center">
          <div className="bg-white lg:w-[1053px] sm:w-[760px] sm:h-[30vh] lg:h-[80vh] lg:p-4 lg:mt-[10px] lg:mr-auto rounded-2xl custom-border flex justify-between items-center">
            <div className="bg-white lg:w-[1053px] sm:w-[400px] lg:h-[60vh]  sm:h-[25vh] lg:p-4 sm:p-4 rounded-2xl flex justify-between items-center">
              {/* Left GIF */}
              <img 
                src="/images/gifmaker_me.gif"  
                alt="Your GIF description"
                className="lg:w-[450px] lg:h-[70vh] sm:w-[320px] sm:h-[28vh]"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black lg:w-[480px] sm:w-[260px] lg:h-[40vh] sm:h-[14vh] sm:mt-[-10px] sm:ml-[30px] lg:p-4 rounded-2xl object-cover">
                <img 
                  src="/images/tile.jpeg"
                  alt="Tile Description" 
                  className="lg:w-full lg:h-[45vh]  sm:w-[255px] sm:h-[14vh] object-flex"  
                />
              </div>
              <h3 className="text-gradient font-bold lg:text-[30px] sm:text-[21px] lg:mt-[20px] sm:mt-[20px]  sm:ml-[25px] justify-center">
              Bookings are open now ! schedule site visit
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-black lg:w-[1300px] sm:w-[820px] lg:h-[50vh] lg:p-6 sm:p-2 rounded-2xl lg:mt-[45px] sm:mt-[25px] sm:mr-[100px] lg:ml-[-80px]">
          <h3 className="text-gradient_1 font-bold text-[45px] lg:mt-[20px] lg:ml-[380px] sm:mt-[10px] sm:ml-[160px]">
            96 - ACRE MEGA  
          </h3>
          <h3 className="text-gradient_1 font-bold text-[45px] lg:ml-[260px] sm:ml-[80px]">
            INTEGRATED TOWNSHIP
          </h3>
          <p className="font-bold text-[18px] lg:mt-[25px] lg:ml-[30px] sm:ml-[-60px] sm:mt-[20px]">
            Experience the ultimate blend of Glamour and Luxury, crafted by South India’s Largest Real Estate Developer. Stay tuned for exciting updates as we unveil more about this exclusive opportunity, bringing you closer to a life of luxury and distinction.
          </p>
          
        </div>

        <div className="bg-black lg:w-[1300px] lg:h-[80vh] sm:w-[1200px] sm:h-[60vh] lg:p-6 sm:p-6 rounded-2xl lg:ml-[-80px]">
          <hr className="border-t-1 border-gray-300 lg:my-1 sm:my-2 sm:ml-[-80px] sm:w-[900px]" />
          <h6 className="text-gradient_2 font-bold lg:text-[20px] lg:mt-[35px] lg:ml-[-20px] sm:text-[35px] sm:mt-[10px] sm:ml-[-110px]">
          Discover more with us!
          </h6>
          <h6 className="text-gradient_2 font-bold lg:text-[20px] lg:ml-[-20px] sm:text-[35px] sm:ml-[-110px]">
          We're here to provide expert guidance along the way..
          </h6>
          <p className="font-bold lg:text-[18px] lg:ml-[10px] lg:mt-[15px] sm:text-[25px] sm:mt-[10px] sm:ml-[-70px]">For more Updates.</p>

          <div className=" bg-black container flex sm:w-full">
            {/* Form Section */}
            <div className="relative custom-border bg-black lg:w-[580px] sm-w-[900px] lg:h-[65vh] sm:mt-[490px] lg:p-6 rounded-2xl lg:ml-[790px] lg:mt-[-80px] overflow-hidden">
              <img 
                src="/images/form.jpeg"  
                alt="Form Background" 
                className="absolute top-0 left-0 w-[540px] h-[65vh] object-flex"  
              />
              <form className="relative z-10 text-white" onSubmit={handleSubmit}>
                <label className="text-gradient_2 block mb-4 ml-[30px] mt-[25px]">Name:</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-[380px] bg-transparent ml-[25px] border-b border-gray-500 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 mb-6" 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 ml-[25px]">{errors.name}</p>}

                <label className="text-gradient_2 block mb-4 ml-[25px]">Email:</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-[380px] bg-transparent border-b ml-[25px] border-gray-500 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 mb-6" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 ml-[25px]">{errors.email}</p>}

                <label className="text-gradient_2 block mb-4 ml-[25px]">Phone Number :</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-[380px] bg-transparent border-b ml-[25px] border-gray-500 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 mb-6" 
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange} 
                />
                {errors.phone && <p className="text-red-500 ml-[25px]">{errors.phone}</p>}

                <button type="submit" className="button-gradient_2 px-4 py-2 w-[200px] ml-[105px] mt-[10px] rounded-2xl">
          Stay tuned
        </button>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
      </form>
            </div>

{/* Video Section Right to Form */}
<div className=" bg-black lg:ml-[-1090px] sm:ml-[-400px] lg:w-full sm:w-[1500px] ">
  <video
    className=" bg-black media lg:w-[1800px] lg:h-[45vh] lg:ml-[-280px] lg:mt-[20px] sm:w-[1200px] sm:mt-[10px] sm:w-[900px]"
    muted
    autoPlay
    loop  // Optional: Add loop if you want the video to repeat
  >
    <source src="/images/opus.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
