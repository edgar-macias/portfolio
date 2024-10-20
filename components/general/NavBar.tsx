import Link from "next/link";
import React, { ReactElement, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({children}:{children:ReactElement}) {
    
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const links = [
    {
      id: 1,
      link: "/",
      label: "Home"
    },
    {
      id: 3,
      link: "experience",
      label: "Experience"
    },
    {
      id: 5,
      link: "contact",
      label: "Contact"
    },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobile]);

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav z-50">
        <div>
          <h2 className="text-3xl font-signature ml-2 text-green-300">
            <a
              className="link-underline link-underline-black"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              Edgar Macias
            </a>
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-green-300 hover:scale-105 hover:text-green-500 duration-200 link-underline"
            >
              <Link href={`${link}`}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setIsMobile(!isMobile)}
          className="cursor-pointer pr-4 z-10 text-green-500 md:hidden"
        >
          {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <ul className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-green-500 z-50`}>
            {links.map(({ id, link,label }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  href={`${link}`}
                  onClick={() => setIsMobile(false)}  // Close menu on link click
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Main Content */}
      <div className={`${isMobile ? 'hidden' : ''}`}>{children}
      <div className="fixed bottom-12 left-11">
        <Link href={'https://drive.google.com/uc?export=download&id=1SKOn9XQ6FNGx-xmLq3dLOKdleIJfXwsp'}>
          <button className={'bg-green-400 hover:bg-green-500 text-lg text-green-800 font-bold py-3 px-5 rounded-full'}>
          Resume
          </button>
        </Link>
      </div>
      </div>
    </>
  );
}
