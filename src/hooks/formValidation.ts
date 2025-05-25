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
  
  export const validateFormData = (formData: FormData): { isValid: boolean; errors: FormErrors } => {
    let isValid = true;
    const errors: FormErrors = { name: '', email: '', phone: '' };
  
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
  
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is not valid';
      isValid = false;
    }
  
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    }
  
    return { isValid, errors };
  };
  