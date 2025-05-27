import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Impressed by the professionalism and attention to detail.",
      name: "Guy Hawkins",
      handle: "@guyhawkins",
      avatar:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      id: 2,
      quote: "A seamless experience from start to finish. Highly recommend!",
      name: "Karla Lynn",
      handle: "@karlalynn8",
      avatar:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      id: 3,
      quote: "Reliable and trustworthy. Made my life so much easier!",
      name: "Jane Cooper",
      handle: "@janecooper",
      avatar:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
  ];
  return (
    <div
      id="testimonial"
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 scroll-mt-24 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            / testimonials /
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 uppercase">
            What my Clients Say
          </h2>
          <p className="text-md text-gray-600 leading-relaxed">
            Trusted by startups, creators, and agencies — my work speaks through
            the voices of those we’ve collaborated with. Discover how my
            solutions have helped them build, grow, and succeed with
            technologies like{" "}
            <span className="font-semibold text-black">Next.js</span>,{" "}
            <span className="font-semibold text-black">Supabase</span>,{" "}
            <span className="font-semibold text-black">Sanity</span>, and more.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[280px]">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gray-300" />
              </div>

              {/* Testimonial Text */}
              <div className="flex-grow mb-6">
                <p className="text-gray-900 text-lg font-medium leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="relative  w-10 h-10 ">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`${testimonial.name} avatar`}
                    fill
                    className="rounded-full object-cover "
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
