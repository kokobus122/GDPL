"use client";
import React, { useEffect, useState } from "react";
import levelsData from "../LevelsData";
import Demon1 from "../images/demon7.png";
import Demon2 from "../images/demon2.png";
import Demon3 from "../images/demon1.png";
import Image from "next/image";

const Progression = () => {
  const noviceLevels = levelsData.slice(9, 13);
  const noviceLabels = noviceLevels.map((item) => item.label);

  return (
    <>
      <div className="max-w-[1300px] px-3 mx-auto pt-2 min-h-screen">
        <h1 className="font-bold text-2xl text-center text-primary">Progression List</h1>
        <h2 className="text-md text-center pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          pariatur.
        </h2>

        {/* All Lists */}
        <div className=" flex flex-col lg:flex-row justify-center items-center gap-4">
          {/* Novice List */}
          <div className="card w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
              <Image src={Demon1} width={125} alt="Novice List" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary">Novice List</h2>

              <div className="form-control">
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[10].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[11].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[12].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[13].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>

              <div className="card-actions">
                <button className="btn btn-primary">More...</button>
              </div>
            </div>
          </div>

          {/* Intermediate List */}
          <div className="card w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
              <Image src={Demon2} width={125} alt="Intermediate" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary">Intermediate List</h2>

              <div className="form-control">
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[4].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[5].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[12].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[6].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>

              <div className="card-actions">
                <button className="btn btn-primary">More...</button>
              </div>
            </div>
          </div>

          {/* Expert List */}
          <div className="card w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
              <Image src={Demon3} width={125} alt="Expert List" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary">Expert List</h2>

              <div className="form-control">
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[0].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[1].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[2].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <label className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap">
                  <span className="label-text">{levelsData[3].label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>

              <div className="card-actions">
                <button className="btn btn-primary">More...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progression;
