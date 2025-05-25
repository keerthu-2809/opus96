import React, { useState } from 'react';
import { FormData, validateForm, handleFormSubmit } from '../hooks/useHandleFormSubmit'; 
import { toast } from 'react-toastify';
import './ConnectPage.css';


const SERVICE_ID = 'service_dd94964';
const TEMPLATE_ID = 'template_e09lydq';
const USER_ID = 'ah5d77Xnl6QfhlSBj';

const ConnectPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ Call validateForm directly here
    const { isValid, errors: validationErrors } = validateForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      toast.error("Please correct the highlighted fields.");
      return;
    }

    // ✅ Then use handleFormSubmit
    await handleFormSubmit(
      e,
      formData,
      setFormData,
      setErrors,
      SERVICE_ID,
      TEMPLATE_ID,
      USER_ID,
      () => {
        // toast.success("Thanks for connecting with us ... we will get back with best properties!");
      },
      () => {
        // toast.error("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <div className="half-slider-container">
      <div className="left-side">
        <img src="/images/new-footer-img.jpg" alt="Connect Banner" className="connect-image" />
      </div>
      <div className="right-side">
        <div className="form-box">
          <h2>Villa Plots Starts From ₹33 Lakhs*</h2>
          <form onSubmit={onSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <small className="error-text">{errors.name}</small>}

            <input
              type="text"
              name="phone"
              placeholder="WhatsApp Number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <small className="error-text">{errors.phone}</small>}

            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <small className="error-text">{errors.email}</small>}

            <div className="checkbox">
              <input type="checkbox" id="authorize" />
              <label htmlFor="authorize">
                I authorize Urbanrise to contact me via call, SMS, email, or WhatsApp, even if my number is on DND.
              </label>
            </div>

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
