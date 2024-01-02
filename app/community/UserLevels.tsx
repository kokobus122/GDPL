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
