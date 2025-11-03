import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary">{title}</h2>
      <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
