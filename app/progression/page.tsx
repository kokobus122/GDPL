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

  // create state variable to store checkbox states
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});

  // load checkbox states from localStorage on component mount
  useEffect(() => {
    const savedCheckboxStates = localStorage.getItem(
      "noviceListCheckboxStates"
    );
    if (savedCheckboxStates) {
      setCheckboxStates(JSON.parse(savedCheckboxStates));
    }
  }, []);

  // update checkbox states and save to localStorage
  const handleCheckboxChange = (label: string) => {
    setCheckboxStates((prevState) => {
      const updatedStates = { ...prevState, [label]: !prevState[label] };
      localStorage.setItem(
        "noviceListCheckboxStates",
        JSON.stringify(updatedStates)
      );
      return updatedStates;
    });
  };

  return (
    <>
      <div className="max-w-[1300px] px-3 mx-auto pt-2 min-h-screen">
        <h1 className="font-bold text-2xl text-center text-primary">
          Progression List
        </h1>
        <h2 className="text-md text-center pb-10">
          Upon completion of corresponding list a role reward is given in
          Discord when applied for.
          <p className="italic text-sm">Lists update whenever a new demon is added to the list.</p>
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
                {levelsData.slice(10, 15).map((levelData, index) => (
                  <label
                    key={index}
                    className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap"
                  >
                    <span className="label-text">{levelData.label}</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={checkboxStates[levelData.label] || false}
                      onChange={() => handleCheckboxChange(levelData.label)}
                    />
                  </label>
                ))}
              </div>

              {/* <div className="card-actions">
                <button className="btn btn-primary">More...</button>
              </div> */}
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
                {levelsData.slice(4, 9).map((levelData, index) => (
                  <label
                    key={index}
                    className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap"
                  >
                    <span className="label-text">{levelData.label}</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={checkboxStates[levelData.label] || false}
                      onChange={() => handleCheckboxChange(levelData.label)}
                    />
                  </label>
                ))}
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
                {levelsData.slice(0, 5).map((levelData, index) => (
                  <label
                    key={index}
                    className="label cursor-pointer gap-40 border-b-[1px] border-b-gray-300 whitespace-nowrap"
                  >
                    <span className="label-text">{levelData.label}</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={checkboxStates[levelData.label] || false}
                      onChange={() => handleCheckboxChange(levelData.label)}
                    />
                  </label>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progression;
