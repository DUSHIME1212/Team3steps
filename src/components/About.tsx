import Image from "next/image";
import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";

const About = () => {
  const img1 =
    "https://d33wubrfki0l68.cloudfront.net/c3f66284b4ed4de2785a5fcc629be503d6399797/a13c0/assets/images/1.jpg";
  const img2 =
    "https://d33wubrfki0l68.cloudfront.net/8a1c15f9383dd799899c695372dd8a22715ebd4b/1a315/assets/images/2.jpg";
  const img3 =
    "https://d33wubrfki0l68.cloudfront.net/8a595f4793ed112a9a00389b1c99eb538e67eb39/84a3b/assets/images/3.jpg";
  return (
    <div className="min-h-96 p-8 md:px-16 flex lg:px-32">
      <div className="w-1/2 p-16">
        <div className=" mb-4 flex flex-col gap-4">
          <span className="font-semibold text-blue-500">WHO ARE WE</span>
          <h1 className="text-5xl font-semibold">
            Assisting individuals in locating the appropriate real estate.
          </h1>
          <p className="text-sm">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center p-4 flex-row">
            <TbSmartHome size={52} />
            <div>
              <span className="font-semibold text-blue-500">OUR MISSION</span>
              <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-4 flex-row">
            <IoPersonCircleOutline size={52} />
            <div>
              <span className="font-semibold text-blue-500">
                Donec porttitor euismod
              </span>
              <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-16 grid grid-rows-2 gap-4 grid-cols-2">
        <div className="row-span-2 relative rounded-3xl overflow-clip">
          <Image src={img1} alt="" className="object-cover" fill />
        </div>
        <div className="relative rounded-3xl overflow-clip">
          <Image src={img2} alt="" className="object-cover" fill />
        </div>
        <div className="relative rounded-3xl overflow-clip">
          <Image src={img3} alt="" className="object-cover" fill />
        </div>
      </div>
    </div>
  );
};

export default About;
