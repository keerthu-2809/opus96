// components/FloatingButton.tsx
'use client';
import React from "react";
import './FloatingButton.css';
import { useModal } from '@/app/context/ModalContext'; // ✅ Import the hook

const FloatingButton: React.FC = () => {
  const { openModal } = useModal(); // ✅ Get modal controls from context

  return (
    <button onClick={openModal} className="floating-btn">
      SCHEDULE A SITE VISIT
    </button>
  );
};

export default FloatingButton;
