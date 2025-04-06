'use client';

import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { X } from 'lucide-react';

export default function SignInPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // open on page load
  }, []);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md transition-all">
      <div className="relative bg-[#111] text-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md mx-auto animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Logo or Brand */}
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to Urbanrise</h2>
        <p className="text-gray-400 text-center mb-8">
          Sign in to access your personalized experience
        </p>

        {/* Google Sign-In */}
        <button
          onClick={() => signIn('google')}
          className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
