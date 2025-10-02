import React from "react";

function Aboutus() {
  return (
    <div className="bg-black text-white min-h-140 flex flex-col items-center px-6 py-12">
      <div className="max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Us
        </h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          At <span className="font-bold text-red-600 mr-1">Movie</span>
          <span className="font-bold text-white">Wale</span>, the online video streaming Over The Top (OTT) platform, we believe entertainment should feel personal. That’s why Movie Wale lets you enjoy content in your own language! With 12+ languages across movies, TV shows, web series, short films, and more – it’s unlimited entertainment that feels like home.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Movie Wale offers 90+ live TV channels and over 1.25 lakh hours of on-demand content in English, Hindi, Bengali, Malayalam, Tamil, Telugu, Kannada, Marathi, Oriya, Bhojpuri, Gujarati, and Punjabi. Our rich collection of Bollywood hits, regional cinema, and exclusive shows makes Movie Wale the ultimate destination for every movie lover.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Enjoy a smooth and user-friendly experience with advanced streaming technology, crystal-clear sound, smart recommendations, and flexible video quality options. Just grab any connected device and dive into Movie Wale – entertainment in your language!
        </p>

        <p className="text-gray-300 leading-relaxed">
          Download the Movie Wale app from Google Play Store or Apple App Store and watch anywhere – mobile, tablet, laptop, or desktop.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
