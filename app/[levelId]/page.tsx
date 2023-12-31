"use client";
import React from "react";
import levelsData from "../LevelsData";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Page = ({ params }: { params: { levelId: string } }) => {
  const currentLink = usePathname();
  const levelId = Number(currentLink.substring(1)) - 1;
  const levelData = levelsData[levelId];

  return (
    <>
      <div className="max-w-[1300px] px-3 mx-auto flex flex-col items-center min-h-screen bg-base-200 rounded-t-md">
        <h1>#{params.levelId} Demon</h1>
        <h1 className="text-2xl text-neutral-content font-bold">
          {levelData.label}
        </h1>
        <p className="text-lg text-base-content">By {levelData.creator}</p>
        {/* <Image
          src={levelData.thumbnail}
          width={400}
          height={400}
          alt="test"
        ></Image> */}
        <div className="w-[80%]">
          <iframe
            className="w-full h-[270px] md:h-[450px] lg:h-[600px]"
            src={levelData.embed}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="container">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, tenetur
            tempora laborum omnis nesciunt voluptate accusamus ut repellat nam
            eius quia quos illo maiores obcaecati aliquid officiis pariatur
            ducimus recusandae consectetur vero! Velit eius, voluptatum rerum
            neque reprehenderit natus debitis! Nostrum, placeat magnam enim sint
            unde distinctio tempora mollitia dolor.
          </p>
          <div className="flex flex-col items-center py-4">
            <h1 className="font-bold text-2xl text-primary">Records</h1>
            <ul>
              <li>Player 1: 00:00:00s</li>
              <li>Player 2: 00:00:00s</li>
              <li>Player 3: 00:00:00s</li>
              <li>Player 4: 00:00:00s</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
