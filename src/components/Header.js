'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaBox, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-400 p-4 text-black shadow-md rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/siluet.png" width={50} height={50} alt="Padang Heritage Logo" />
          <h1 className="text-2xl font-bold ml-2">Minangkabau Verse</h1>
        </div>

        <nav className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black hover:text-gray-700 flex items-center">
                  <span className="ml-1"><FaHome size={16} /></span>
                  <span className="font-bold ml-1">Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-black hover:text-gray-700 flex items-center">
                  <span className="ml-1"><FaInfoCircle size={14} /></span>
                  <span className="font-bold ml-1">About</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/product" legacyBehavior>
                <a className="text-black hover:text-gray-700 flex items-center">
                  <span className="ml-1"><FaBox size={13} /></span>
                  <span className="font-bold ml-1">Products</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/team" legacyBehavior>
                <a className="text-black hover:text-gray-700 flex items-center">
                  <span className="ml-1"><FaUsers size={16} /></span>
                  <span className="font-bold ml-1">Our Team</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="flex items-center focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}