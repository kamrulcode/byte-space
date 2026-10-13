import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];
  return (
    <div className="mainContainer max-lg:collapse text-slate-300 lg:mb-25  w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
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
          </label>
          <button className="btn btn-ghost text-xl">
            <Image
              src="/assets/Header_Logo.svg"
              alt="Logo"
              width={171}
              height={37}
            />
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.name} className="text-base  font-normal">
                <Link href={link.href} passHref>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/login"
            passHref
            className="px-4 py-2 text-base font-normal font-satoshi"
          >
            sign in
          </Link>
          <Link
            href="/signup"
            passHref
            className="px-4 py-2 text-base font-normal font-satoshi"
          >
            Join Us
          </Link>
          <Image src="/assets/cart.svg" alt="Logo" width={24} height={24} />
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <ul className=" text-base  font-normal menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} passHref>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Header;
