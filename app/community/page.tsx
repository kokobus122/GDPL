import React from "react";
import UserLevels from "./UserLevels";
import Link from "next/link";
import Sidebar from "../Sidebar";

const Submit = () => {
  return (
    <>
      <div className="max-w-[1300px] px-3 mx-auto pt-2">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-primary text-center md:text-start">
            Community Levels
          </h1>
          <h2 className="italic text-sm text-center md:text-start">
            Platformer levels made by the GDPL community. Submit yours in our{" "}
            <Link
              className="text-primary font-bold hover:underline"
              href="https://discord.gg/Y3u7VHTQ3R"
              rel="noopener noreferrer"
              target="_blank"
            >
              Discord
            </Link>
            .
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="flex flex-col col-span-12 md:col-span-8">
            <UserLevels />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Submit;
