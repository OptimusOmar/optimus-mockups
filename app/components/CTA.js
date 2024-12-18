import React from "react";

const CTASection = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Take Control of Compliance Today
          </h2>

          <p className="text-slate-300 mb-10 text-sm">
            Turn DOT regulations from a challenge into a competitive edge.
            Optimize your fleet’s operations, reduce insurance premiums, and
            avoid costly mistakes with Optimus Paper.
          </p>

          <button
            className="bg-blue-100 text-slate-900 px-6 py-2.5 rounded-full
                     font-medium hover:bg-blue-200 transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
