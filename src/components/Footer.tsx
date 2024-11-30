import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="bg-red-600 grid md:grid-cols-2 text-white font-geist p-10 gap-5">
        <div className="grid grid-cols-2">
          <div className="row-span-2 text-black flex items-center justify-center bg-white">
            Logo
          </div>
          <div className="font-bold flex items-center text-xl pl-5 bg-black py-5">
            Arkavidia 8.0
          </div>
          <div className="font-semibold flex items-center bg-green-700 pl-5 py-5">
            ADAPTIVE COLLABORATION TO ENCOUNTER DIGITAL DISRUPTION
          </div>
        </div>

        <div className="grid grid-cols-2 row-span-2">
          <div className="font-bold pl-5 bg-black py-5 space-y-2">
            <p>Competition</p>
            <p>Competitive Programming</p>
            <p>Datavidia</p>
            <p>Arkalogica</p>
            <p>UXvidia</p>
          </div>
          <div className="font-bold pl-5 bg-black py-5 space-y-2">
            <p>Event</p>
            <p>Arkavidia Academya</p>
            <p>Arkavidia For Indonesia</p>
            <p>Arkavidia Goes To School</p>
            <p>Arkavidia Talks</p>
            <p>IT Fest</p>
          </div>
        </div>

        <div className="flex justify-between">
          <p> CP: Nelsen (0821-1274-9139) </p>
          <div className="flex gap-5">
            <p> IG </p>
            <p> TikTok </p>
            <p> YT </p>
            <p> LinkedIn </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
