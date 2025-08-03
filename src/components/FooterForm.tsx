import React, { useState } from "react";
import './FooterForm.css';
import { toast } from 'react-toastify';
import { FormData, validateForm, handleFormSubmit } from '@/hooks/useHandleFormSubmit';

const FooterForm: React.FC = () => {
  // ✅ useState at the top level (safe)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState<{ name: string; email: string; phone: string }>({
    name: '',
    email: '',
    phone: ''
  });

  // ✅ Not inside any condition
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateForm(formData);
    setErrors(validationErrors);

    if (!isValid) {
      toast.error("Please fill out all required fields correctly.");
      return;
    }

    // ✅ Custom submit logic using EmailJS
    await handleFormSubmit(
      e,
      formData,
      setFormData,
      setErrors,
      'service_bd3wnos',
      'template_yt0wfda',
      'G57A9m3pce-adrrR9',
      () => {
        // Optional: toast.success can be uncommented if desired
        // toast.success("Thanks for connecting with us ... we will get back with best properties!");
      },
      () => {
        // Optional: toast.error can be uncommented if desired
        // toast.error("Error sending email.");
      }
    );
  };

  return (
    <div className="footer-form">
      <form className="footer-form-inner" onSubmit={handleSubmit}>
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
      </form>

      <p className="disclaimer">
        I authorize Urbanrise to contact me via call, SMS, email, or WhatsApp, even if my number is on DND.
      </p>
    </div>
  );
};

export default FooterForm;
