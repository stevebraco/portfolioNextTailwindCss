import React, { useRef, useState } from "react";

const DisplayMac = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef(null);
  const handlePlayVideo = async () => {
    if (isPlaying) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="relative w-[900px] h-[500px] bg-transparent border border-gray-800 rounded-lg overflow-hidden my-0 mx-auto">
      <div>
        <div className="border-b border-gray-800 py-2 bg-[#FFFFFF15]">
          <div className="absolute top-3 left-2 flex space-x-1">
            <div className="w-[10px] h-[10px] bg-[#FF5E58] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#FFBB2E] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#22B33A] rounded-full"></div>
          </div>
          <h3 className="text-center text-gray-300 font-aeonikLight text-xs">
            Audiophile - Lorem ipsum
          </h3>
        </div>
        {/* TODO: icon play with opacity */}
        {/* <div className="absolute opacity-0 hover:opacity-100 w-full h-full z-10  hover:bg-black hover:bg-opacity-50"></div> */}
        <video
          ref={vidRef}
          onClick={handlePlayVideo}
          src="/audiophile.mov"
          // autoPlay
          muted
          loop
          type="video/mov"
        ></video>
      </div>
    </div>
  );
};

export default DisplayMac;
