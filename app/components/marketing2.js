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
  // Sample data for the charts
  const projectStats = [
    { status: "Total", value: 100 },
    { status: "In Progress", value: 55 },
    { status: "Rejected", value: 35 },
  ];

  const monthlyData = [
    { month: "Jan", projects: 480 },
    { month: "Feb", projects: 300 },
    { month: "Mar", projects: 400 },
    { month: "Apr", projects: 380 },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Stats and Charts Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          {/* Progress Bars */}
          <div className="mb-8">
            <h3 className="text-gray-500 mb-4">Total Projects</h3>
            <div className="text-2xl font-bold mb-4">1475</div>

            {projectStats.map((stat, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{stat.status}</span>
                  <span>{stat.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-blue-400 rounded-full"
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bar Chart */}
          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">1951+</span>
                  <Plus className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-sm text-gray-500">
                  Total Projects @ 8% this month
                </div>
              </div>
              <button className="text-gray-400">⋮</button>
            </div>

            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Bar
                    dataKey="projects"
                    fill="#1E90FF"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
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

          <div className="space-y-6">
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
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
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
