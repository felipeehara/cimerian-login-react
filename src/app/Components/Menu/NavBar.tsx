"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import imgLogo from '/public/img/logo_cimerianeditado.png'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile menu button (à esquerda no mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Logo (à direita no mobile) */}
        <div className="text-white text-2xl font-bold ml-auto md:ml-0">
          <Link href="/">
                <Image 
                    src={imgLogo} 
                    alt="Logo Cimerian" 
                    width={150} // defina a largura conforme necessário
                    height={50} // defina a altura conforme necessário
                />
            </Link>
        </div>

        {/* Menu for large screens */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400 hover:bg-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu with slide-in animation */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-white text-2xl font-bold">
             <Image 
                    src={imgLogo} 
                    alt="Logo Cimerian" 
                    width={150} // defina a largura conforme necessário
                    height={50} // defina a altura conforme necessário
                />
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col mt-8 space-y-4">
          <Link href="/" className="text-white text-lg px-4 py-2 hover:bg-gray-700 ">
            Home
          </Link>
          <Link href="/about" className="text-white text-lg px-4 py-2 hover:bg-gray-700">
            About
          </Link>
          <Link href="/services" className="text-white text-lg px-4 py-2 hover:bg-gray-700">
            Services
          </Link>
          <Link href="/contact" className="text-white text-lg px-4 py-2 hover:bg-gray-700">
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};
