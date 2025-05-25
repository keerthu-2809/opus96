// hooks/useHandleFormSubmit.ts
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export interface FormData {
  name: string;
  email: string;
  phone: string;
}

export interface FormErrors {
  name: string;
  email: string;
  phone: string;
}

export const validateForm = (formData: FormData) => {
  let isValid = true;
  const newErrors: FormErrors = { name: '', email: '', phone: '' };

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

  return { isValid, errors: newErrors };
};

export const handleFormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  formData: FormData,
  setFormData: (data: FormData) => void,
  setErrors: (errors: FormErrors) => void,
  serviceId: string,
  templateId: string,
  userId: string,
  onSuccess?: () => void,
  onError?: () => void
) => {
  e.preventDefault();

  const { isValid, errors } = validateForm(formData);
  if (!isValid) {
    setErrors(errors);
    return;
  }

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
      },
      userId
    );

    console.log("Email sent successfully:", result);
    toast.success("Thanks for connecting with us ... we will get back with best properties!");

    setFormData({ name: '', email: '', phone: '' });

    if (onSuccess) onSuccess();
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error("Error sending email.");
    if (onError) onError();
  }
};
