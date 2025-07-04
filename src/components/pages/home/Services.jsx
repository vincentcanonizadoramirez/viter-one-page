import React from "react";

const Services = () => {
  return (
    <>
      <section id="services" className="py-16 bg-gray-50">
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
              <img
                className="w-16 h-16 mb-6"
                src="/images/card-icon-web-development.webp"
                alt="Web Development"
              />
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
              <img
                className="w-16 h-16 mb-6"
                src="/images/card-icon-ui-ux-design.webp"
                alt="UI/UX Design"
              />
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
              <img
                className="w-16 h-16 mb-6"
                src="/images/card-icon-seo-optimization.webp"
                alt="SEO Optimization"
              />
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
