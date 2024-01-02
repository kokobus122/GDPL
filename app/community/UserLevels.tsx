import React from "react";
import userLevelData from "./UserLevelData";
import Image from "next/image";
import Link from "next/link";
import img from "../submit/userlevels/omi1.jpg";

const UserLevels = () => {
  return (
    <>
      {userLevelData.map((level, index) => (
        <div
          key={index}
          className="grid grid-cols-12 p-4 gap-x-4 border-[1px] border-neutral rounded-lg bg-base-200 mb-4"
        >
          <div className="flex flex-col col-span-4 relative">
            <Image
              src={level.displayImg}
              alt={level.label}
              width={400}
              height={250}
            />
            <Link
              href={level.link}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 lg:w-10"
                viewBox="0 0 576 512"
              >
                <path
                  opacity="1"
                  className="hover:fill-[#7300ec]"
                  fill="#1E3050"
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col justify-center col-span-8">
            <h1 className="text-primary text-xl font-bold md:text-2xl">
              {level.label}
            </h1>
            <p>ID: {level.id}</p>
            <h2 className="italic font-bold">{level.creator}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserLevels;
