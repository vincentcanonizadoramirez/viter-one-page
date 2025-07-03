import React from "react";

const Services = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Web Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional solutions tailored to boost your online presence
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-5">
                Custom websites built with modern frameworks like Next.js and
                React for optimal performance.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700">
                View Packages →
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-600 mb-5">
                Beautiful interfaces designed to convert visitors with strategic
                user experience flows.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700">
                See Portfolio →
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p className="text-gray-600 mb-5">
                Increase your visibility on search engines with our data-driven
                SEO strategies.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700">
                Get Audit →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
