import React from "react";
import { FcLike } from "react-icons/fc";
import {  BiChevronRight, BiShareAlt } from "react-icons/bi";
import { BsDot } from "react-icons/bs"

const MovieHero = () => {
  return(
    <>
    <div className="md:hidden">
    <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
    alt="poster"
    />
    </div>

    <div className="hidden md:block lg:hidden">
    <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
    alt="poster"
    />
    </div>
<div className="relative hidden lg:block" style={{height: "30rem"}}>
    <div className="absolute h-full w-full z-10"
      style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
     />
  <div className="absolute z-30 w-64  left-64 top-10">
     <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
     alt="poster"
     className="h-full w-full rounded-xl"
     />
     <div className="absolute z-30 top-1 left-72 w-96">
     <h1 className="text-gray-50 font-extrabold text-2xl h-6">Shang-Chi and the Legends of the Ten Rings</h1>
     <div className="flex py-10 gap-2 items-center text-gray-50">
     <FcLike />
     <h3 className="font-bold">90%</h3>
     <p className="flex items-center">52.7K ratings  <BiChevronRight /></p>
     </div>

     <div className="bg-navCol-100 flex justify-between h-16 items-center rounded-md">
     <div className="flex-col px-5">
        <p className="text-sm font-bold text-gray-50">Add your rating and review</p>
        <p className="text-gray-400">Your ratings matter</p>
     </div>
     <button className="bg-gray-50 rounded-md px-1 m-5 h-8 hover:bg-gray-500">
      Rate now
     </button>
     </div>

     <div className="py-10 text-black font-bold -mt-3">
        <p className="bg-white rounded-sm px-3 focus:underline hover:underline cursor-pointer">2D, MX4D, 3D, 4DX 3D, IAMX 3D, IAMX 2D, 4DX</p>
        <p className="bg-white my-5 rounded-sm px-3 focus:underline hover:underline cursor-pointer">English,Telugu,Tamil,Hindi,Kannada,Malyalam</p>
     </div>

     <div className="flex text-gray-50 rounded-sm -mt-5 items-center"
     style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
     >
        <p className="text-bold">2h 12m</p>
        <BsDot />
        <p className="focus:underline hover:underline cursor-pointer">Action, Adventure, Fantasy</p>
        <BsDot />
        <p>UA</p>
        <BsDot />
        <p>3Sep,2021</p>
     </div>
     </div>
  </div>
    <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
    alt="poster"
    className="w-full h-full"
    />
</div>
    </>
  )
};

export default MovieHero;
