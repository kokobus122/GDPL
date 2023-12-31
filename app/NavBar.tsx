import React from "react";
import Logo from "./images/platformerlist.png";
import LogoAlt from "./images/platformerlistalt.png";
import GDPL from "./images/gdpl.png";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 max-w-[1300px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/progression">Progression</Link>
              </li>
              <li>
                <a>GDPL</a>
                <ul className="p-2">
                  <li>
                    <Link href="/guidelines">Guidelines</Link>
                  </li>
                  <li>
                    <Link href="/submit">Submit Level</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="/" className="min-w-[275px]">
            <Image src={GDPL} width={150} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/progression">Progression</Link>
            </li>
            <li>
              <details>
                <summary>GDPL</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/guidelines">Guidelines</Link>
                  </li>
                  <li>
                    <Link href="/submit">Submit Level</Link>
                  </li>
                </ul>
              </details>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
