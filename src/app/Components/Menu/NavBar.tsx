"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import imgLogo from "/public/img/logo_cimerianeditado.png";
import iconHome from "/public/Svgs/IconHome.svg";
import iconProfile from "/public/Svgs/profile/profile.svg";

import { Profile, ProfileMobile } from '@/app/Components/Profile/Profile';

export const Navbar = () => {

    const [isProfileVisible, setIsProfileVisible] = useState(false); //Visualizar profile
    const [isProfileMobile, setIsProfileMobile] = useState(false);

    const toggleProfile = () => {  //mostrar ou ocultar o profile Desktop
        setIsProfileVisible(!isProfileVisible);
      };

      const toggleProfileMobile = () => {  //mostrar ou ocultar o profile Mobile
        setIsProfileMobile(!isProfileMobile);
      };

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const isActive = (path: string) => pathname === path;

  return (

    <div>
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
                    <Image src={imgLogo} alt="Logo Cimerian" width={150} height={50} />
                </Link>
                </div>

                {/* Menu for large screens */}
                <div className="hidden md:flex space-x-4">
                <Link
                    href="/Home"
                    className={`flex items-center text-white hover:text-gray-400 px-4 py-2 rounded ${
                    isActive("/Home") ? "bg-gray-400" : ""
                    }`}
                >
                    <Image src={iconHome} alt="Home Icon" width={24} height={24} />
                </Link>
                <Link
                    href="/About"
                    className={`text-white hover:text-gray-400 px-4 py-2 rounded ${
                    isActive("/About") ? "bg-gray-400" : ""
                    }`}
                >
                    <span>Chamados</span>
                </Link>
                <Link
                    href="/services"
                    className={`text-white hover:text-gray-400 px-4 py-2 rounded ${
                    isActive("/services") ? "bg-gray-400" : ""
                    }`}
                >
                    <span>Services</span>
                </Link>
                <Link
                    href="/contact"
                    className={`text-white hover:text-gray-400 px-4 py-2 rounded ${
                    isActive("/contact") ? "bg-gray-400" : ""
                    }`}
                >
                    <span>Contact</span>
                </Link>
                <button 
                    onClick={toggleProfile}
                    className={`text-white hover:text-gray-400 px-4 py-2 rounded ${
                    isActive("/contact") ? "bg-gray-400" : ""
                    }`}
                >
                   <Image src={iconProfile} alt="Home Icon" width={24} height={24} />
                </button>
                
                </div>
            </div>
            

            {/* Mobile animation */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-gray-800 transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex justify-between items-center p-4">
                <div className="text-white text-2xl font-bold">
                    <Image src={imgLogo} alt="Logo Cimerian" width={150} height={50} />
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
                <Link
                    href="/Home"
                    className={`text-white text-lg px-4 py-2 hover:bg-gray-400 ${
                    isActive("/Home") ? "bg-gray-400 font-bold" : ""
                    }`}
                >
                    Home
                </Link>
                <Link
                    href="/About"
                    className={`text-white text-lg px-4 py-2 hover:bg-gray-400 ${
                    isActive("/About") ? "bg-gray-400 font-bold" : ""
                    }`}
                >
                    About
                </Link>
                <Link
                    href="/services"
                    className={`text-white text-lg px-4 py-2 hover:bg-gray-400 ${
                    isActive("/services") ? "bg-gray-400 font-bold" : ""
                    }`}
                >
                    Services
                </Link>
                <Link
                    href="/contact"
                    className={`text-white text-lg px-4 py-2 hover:bg-gray-400 ${
                    isActive("/contact") ? "bg-gray-400 font-bold" : ""
                    }`}
                >
                    Contact
                </Link>
                <button
                    onClick={toggleProfileMobile}
                    className={`text-left text-white text-lg px-4 py-2 hover:bg-gray-400 ${
                    isActive("/contact") ? "bg-gray-400 font-bold" : ""
                    }`}
                >
                    Profile
                </button>
                {isProfileMobile && <ProfileMobile />}   
                </nav>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                className="fixed inset-0 bg-gray-400 bg-opacity-50 z-40"
                onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
            
            </nav>
            <div className="flex justify-end">
            {isProfileVisible && <Profile />}    
            </div>  
    </div>
  );
};
