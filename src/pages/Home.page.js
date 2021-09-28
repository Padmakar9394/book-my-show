import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/premier.component"
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col gap-10">

    <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold text-grey-800">
    The best of Entertainment
    </h1>
    </div>
    <EntertainmentCardSlider />
    <div className="bg-navCol-200 py-16">

      <div className="container mx-auto px-4">
      <div className="flex">
        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
          alt="Rupay"
          className="w-full h-full"
        />
      </div>
        <PosterSlider images={TempPosters} title="Premier" subtitle="Brand New Releases Every Friday" isDark />
      </div>
    </div>
    </div>

    <div className="container mx-auto px-4">
    <PosterSlider
    images={TempPosters}
    title="Online Streaming Events"
    isDark={false}
    />
    </div>
    <div className="container mx-auto px-4">
    <PosterSlider
    images={TempPosters}
    title="Outdoor Events"
    isDark={false}
    />
    </div>
    </>
  );
};

export default HomePage;