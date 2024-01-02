import React from "react";
import Levels from "./Levels/Levels";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div className="max-w-[1300px] px-3 mx-auto pt-2">
        <div className="grid grid-cols-12 gap-6">
          <div className="flex flex-col col-span-12 md:col-span-8">
            <Levels />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
