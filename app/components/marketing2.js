"use client";
import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Plus, CheckCircle2 } from "lucide-react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const BenefitsSection = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Stats and Charts Section */}
        <div className="bg-slate-100 rounded-xl p-16 shadow-lg flex items-center justify-center">
          <div className="w-full relative">
            <img 
              src="/image/calendar.png" 
              className="w-full h-auto object-contain rounded-lg"
              alt="Calendar"
            />
            <div className="absolute bottom-[-40px] right-[-20px] w-96">
              <img 
                src="/image/lapsereport.png" 
                className="w-full h-auto object-contain rounded-lg shadow-lg"
                alt="Secondary Calendar"
              />
            </div>
          </div>
        </div>

        {/* Benefits Description Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Optimus Paper?</h2>
          <p className="text-gray-600 mb-8 text-sm">
            With trusted legal advice in transportation law, Optimus Paper helps
            you minimize risk and ensure smooth operations. Whether you&apos;re
            facing FMCSA audits or aiming to reduce insurance premiums, our
            solution keeps your fleet audit-ready and compliant
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Expert Guidance You Can Trust",
                description:
                  "Gain tailored document support with Optimus + as your compliance advisors.",
              },
              {
                title: "One Platform for All Compliance Needs",
                description:
                  "Digitize, centralize, and access all essential documents effortlessly to stay compliant.",
              },
              {
                title: "Stay Alert and Ahead",
                description:
                  "Receive 30-day advance notifications for expiring documents and never miss a deadline.",
              },
              {
                title: "Integration Without the Hassle",
                description:
                  "Sync seamlessly with ELDs, TMS, HR systems, and more through easy API integration.",
              },
              {
                title: "Proof of Excellence",
                description:
                  "Showcase your commitment with our Dynamic Lapse Report – evidence of compliance that turns risk management into a strategic advantage.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <IoIosCheckmarkCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-base">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;