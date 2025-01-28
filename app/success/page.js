"use client"
import React, { useEffect, useState } from 'react';
import { Progress, Button, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from 'lucide-react';

const RegistrationSuccess = () => {
  const [isTracking, setIsTracking] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Google Tag Manager event
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'registration_complete',
        'user_type': 'new_registration'
      });
    }

    // Add a small delay before starting the countdown to ensure tracking completes
    const trackingDelay = setTimeout(() => {
      setIsTracking(false);
      
      // Start countdown after tracking is presumed complete
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.location.href = '/dashboard';
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }, 1000);

    return () => clearTimeout(trackingDelay);
  }, []);

  const handleRedirect = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className="bg-slate-200">
      <div className="flex min-h-screen flex-col items-center pb-24 pt-10 max-w-7xl mx-auto px-4">
        <Image
          src="/LogoOptimusBlue.png"
          width={3638}
          height={733}
          className="w-96 mb-12 -ml-5 px-10 sm:px-0"
          alt="Optimus Paper Logo"
        />
        
        <div className="bg-white w-full shadow-large h-[600px]">
          <div className="w-full flex h-full">
            <div className="lg:w-4/5 w-full flex flex-col items-center p-4 sm:p-9 justify-between">
              <div className="flex flex-col items-center w-full text-default-800 space-y-3">
                <div className="w-full h-6"></div>
                
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                  </div>

                  <p className="mt-4 font-thin text-2xl sm:text-3xl font-sans">
                    You&apos;re all Set!
                  </p>
                  <div className="bg-blue-400 w-20 h-1 rounded-xl !mt-4 !mb-2"></div>

                  <div className="text-center mt-6">
                    <p className="text-blue-800 text-lg mb-2">
                      Your registration is complete and your account is ready to use.
                    </p>
                    <div className="flex flex-col items-center justify-center mt-8">
                      <Spinner size="lg" />
                      <p className="text-blue-600 mt-4">
                        {isTracking ? 
                          "Setting up your account..." : 
                          `Redirecting to dashboard in ${countdown}...`
                        }
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      onClick={handleRedirect}
                      color="primary"
                      className="bg-[#0279ed] rounded-full w-48 text-sm h-unit-10"
                    >
                      Go to Dashboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center">
                <Progress
                  size="sm"
                  value={100}
                  color="primary"
                  className="mt-4"
                />
              </div>
            </div>

            <div className="lg:w-2/5 hidden lg:block">
              <Image
                src="/truck.webp"
                width={1000}
                height={1500}
                className="w-full hue-rotate-15 saturate-200 h-full"
                alt="Truck"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;