"use client";
import React from "react";
import levelsData from "../LevelsData";
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
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Record Holder</th>
                    <th>Time</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>{levelData.bestScores?.[0]?.playerName}</td>
                    <td>{levelData.bestScores?.[0]?.playerTime}</td>
                    <td>{levelData.bestScores?.[0]?.playerLink}</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>{levelData.bestScores?.[1]?.playerName}</td>
                    <td>{levelData.bestScores?.[1]?.playerTime}</td>
                    <td>{levelData.bestScores?.[1]?.playerLink}</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>{levelData.bestScores?.[2]?.playerName}</td>
                    <td>{levelData.bestScores?.[2]?.playerTime}</td>
                    <td>{levelData.bestScores?.[2]?.playerLink}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
