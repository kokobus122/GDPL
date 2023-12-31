import React from "react";
import Levels from "./Levels/Levels";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="max-w-[1300px] px-3 mx-auto pt-2">
        <div className="grid grid-cols-12 gap-6">
          <div className="flex flex-col col-span-12 md:col-span-8">
            <Levels />
          </div>
          <div className="flex gap-y-2 flex-col items-center col-span-12 md:col-span-4">
            <div className="flex flex-col w-full space-y-2 border-[1px] border-neutral rounded-lg p-2 bg-base-200">
              <h1 className="text-xl font-bold">Editors</h1>
              <p className="text-content">
                Developer - kokobus <br />
                Designer - omitiny <br />
                Moral Support - elz0s <br />
              </p>
            </div>
            <div className="flex flex-col w-full space-y-2 border-[1px] border-neutral rounded-lg p-2 bg-base-200">
              <h1 className="text-xl font-bold">Guidelines</h1>
              <p className="text-content">
                Read our full guidelines{" "}
                <Link
                  href="/guidelines"
                  className="text-primary hover:underline"
                >
                  here
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col w-full space-y-2 border-[1px] border-neutral rounded-lg p-2 bg-base-200">
              <h1 className="text-xl font-bold">Update v1.0</h1>
              <ul className="">
                <li>- Platformer List</li>
                <li>- Progression Levels (W.I.P)</li>
                <li>- Opened level submissions</li>
              </ul>
            </div>
            <iframe
              src="https://discord.com/widget?id=1191066858762272858&theme=dark"
              className="w-full"
              width="350"
              height="500"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
