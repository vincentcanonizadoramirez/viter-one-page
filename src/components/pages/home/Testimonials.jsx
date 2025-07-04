import React from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            {/* Slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Testimonial 1 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <img
                      src="images/testimonials-1.webp"
                      alt="Sarah Johnson"
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray-600 italic mb-4">
                      "The team delivered our project ahead of schedule with
                      exceptional quality. Our online sales increased by 120%
                      within three months!"
                    </p>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-gray-500 text-sm">
                      Marketing Director, TechCorp
                    </p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <img
                      src="images/testimonials-2.webp"
                      alt="Michael Chen"
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray-600 italic mb-4">
                      "From design to deployment, their attention to detail was
                      impressive. They became true partners in our digital
                      transformation journey."
                    </p>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-gray-500 text-sm">CEO, StartupHub</p>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <img
                      src="images/testimonials-3.webp"
                      alt="Emma Rodriguez"
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray-600 italic mb-4">
                      "Their SEO strategy tripled our organic traffic in 6
                      months. We've seen a dramatic improvement in lead quality
                      and conversion rates."
                    </p>
                    <h4 className="font-bold">Emma Rodriguez</h4>
                    <p className="text-gray-500 text-sm">
                      CMO, GrowthSolutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
