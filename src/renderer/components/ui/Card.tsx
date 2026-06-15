import React from "react";

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 ${className}`}>
    {children}
  </div>
);
