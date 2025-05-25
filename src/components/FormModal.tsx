// components/FormModal.tsx
import React from "react";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import "./FormModal.css";
import { toast  } from 'react-toastify';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
        'service_dd94964',
        'template_e09lydq',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
        },
        'ah5d77Xnl6QfhlSBj'
      )
        .then((result) => {
          console.log("Email sent successfully:", result);
          toast.success("Thanks for connecting with us ... we will get back with best properties!");
  
          // Reset the form
          setFormData({ name: '', email: '', phone: '' });
  
          // Close the modal after a short delay (so toast renders smoothly)
          setTimeout(() => {
            onClose();
          }, 100); // 100ms delay is enough
        }, (error) => {
          console.error("Error sending email:", error);
          toast.error("Error sending email.");
        });
    }
  };
  

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>×</button>

        {/* Optional image at the top */}
        <img 
          src="/images/popup_image.jpg" 
          alt="Form Banner" 
          className="form-banner-image" 
        />

        {/* Form */}
        <form className="form-popup" onSubmit={handleSubmit}>
  <h1>Book Your Site Visit</h1>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
  />
  {errors.name && <span className="error">{errors.name}</span>}

  <input
    type="tel"
    name="phone"
    placeholder="Your Phone Number"
    value={formData.phone}
    onChange={handleChange}
  />
  {errors.phone && <span className="error">{errors.phone}</span>}

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
  />
  {errors.email && <span className="error">{errors.email}</span>}

  <button type="submit" className="submit-button">Submit</button>

  <p className="disclaimer1">
    I authorize Urbanrise to contact me via call, SMS, email, or WhatsApp, even if my number is on DND.
  </p>

  
</form>

      </div>
    </div>
  );
};

export default FormModal;
