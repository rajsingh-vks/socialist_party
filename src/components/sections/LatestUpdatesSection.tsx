import React from "react";

const LatestUpdatesSection = () => (
  <section className="w-full bg-white py-16">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Latest Updates</h2>
      <p className="text-gray-500 mb-8">Press releases, articles, and announcements</p>
      <div className="flex flex-col md:flex-row gap-8 items-stretch rounded-2xl bg-white shadow-lg ">
        {/* Image */}
        <div className="md:w-1/2 w-full overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
          <img
            src="./new_1.png"
            alt="Protest sign"
            className="object-cover w-full h-full min-h-[260px]"
          />
        </div>
        {/* Update Card */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <span className="text-red-500 font-semibold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            FEBRUARY 2, 2026
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Domestic vote-bank politics ‘behind official solidarity’ with Bangladeshi Hindus</h3>
          <p className="text-gray-600 mb-2">Analysis by Sandeep Pandey and Faisal Khan</p>
          <a href="#" className="text-red-600 font-semibold hover:underline mt-2">Read Full Update &rarr;</a>
        </div>
      </div>
    </div>
  </section>
);

export default LatestUpdatesSection;
