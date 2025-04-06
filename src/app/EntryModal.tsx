// EntryModal.tsx
"use client";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

export default function EntryModal({ onClose, formData, handleChange, handleSubmit, errors }: any) {
  const [showModal, setShowModal] = useState(true);

  const handleSkip = () => {
    setShowModal(false);
    onClose(); // Call parent onClose
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white p-8 rounded-xl max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gradient_1">Welcome</h2>

        <button 
          onClick={() => signIn("google")} 
          className="bg-red-600 hover:bg-red-700 w-full py-2 rounded-md text-white font-semibold mb-4 transition">
          Sign in with Google
        </button>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
            />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold transition">
            Submit
          </button>
        </form>

        <button 
          onClick={handleSkip} 
          className="text-sm mt-4 underline text-center block text-gray-400 hover:text-white">
          Skip / Close
        </button>
      </div>
    </div>
  );
}
