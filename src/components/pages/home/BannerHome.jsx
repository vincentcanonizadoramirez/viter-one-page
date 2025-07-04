import React from "react";

const BannerHome = () => {
  return (
    <>
      <section className="py-12 md:py-20 mt-[88px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/banner-home.webp"
                alt="Team collaboration"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-1/2">
              <span className="text-blue-600 font-semibold">
                ABOUT OUR COMPANY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
                We Deliver Innovative Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2025, we help businesses transform their ideas into
                reality through cutting-edge technology and expert consulting
                services. Our team of 50+ professionals delivers measurable
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
                <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerHome;
