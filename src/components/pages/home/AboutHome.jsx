import { HiOutlineCheck } from "react-icons/hi";

const AboutHome = () => {
  return (
    <>
      <section id="about-home" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video">
                <img
                  src="/images/about-home.webp"
                  alt="Our team working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About Our Company
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2025, we're a passionate team of designers and
                developers dedicated to creating exceptional digital
                experiences. Our mission is to help businesses thrive in the
                digital world through innovative solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <HiOutlineCheck className="text-blue-600 mt-1 mr-3 w-6 h-6" />
                  <p className="text-gray-600">
                    10+ years combined industry experience
                  </p>
                </div>
                <div className="flex items-start">
                  <HiOutlineCheck className="text-blue-600 mt-1 mr-3 w-6 h-6" />
                  <p className="text-gray-600">
                    50+ successful projects delivered
                  </p>
                </div>
                <div className="flex items-start">
                  <HiOutlineCheck className="text-blue-600 mt-1 mr-3 w-6 h-6" />
                  <p className="text-gray-600">
                    Client-focused approach with 24/7 support
                  </p>
                </div>
              </div>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHome;
