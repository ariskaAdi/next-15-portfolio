import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[650px] bg-cover bg-center pt-16"
      style={{ backgroundImage: "url(/background.jpg)" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Text Section */}
          <p className="text-white text-xl md:text-4xl italic text-center md:text-left max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Hi there! I&apos;m <span className="font-bold text-white">Adi</span>
            , a passionate{" "}
            <span className="font-bold text-white">full-stack developer</span>{" "}
            crafting clean, functional, and engaging web experiences.
          </p>

          {/* Image Section */}
          <Image
            src="/ariska.jpg" // Replace with your image path
            alt="Adi profile"
            width={288}
            height={288}
            className="object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
