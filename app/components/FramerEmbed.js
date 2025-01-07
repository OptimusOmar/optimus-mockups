"use client"
import React, { useState } from 'react';

const FramerEmbed = ({ 
  url,
  title = "Framer Page",
  className = ""
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError("Failed to load Framer page");
    setIsLoading(false);
  };

  if (!url) {
    return <div className="text-red-500">Error: Framer URL is required</div>;
  }

  return (
    <div className="fixed inset-0 w-screen h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-red-500 p-4 text-center bg-red-50 rounded-lg">
            {error}
          </div>
        </div>
      )}

      <iframe
        src={url}
        title={title}
        className={`w-full h-full border-none ${className}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default FramerEmbed;