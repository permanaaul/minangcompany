import Link from 'next/link';
import { FaHome, FaInfoCircle, FaBox, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white p-4 text-black shadow-md border-4 border-black" style={{ backgroundImage: "url('/images/vintage2.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", filter: "brightness(100%)", }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/siluet.png" width={50} height={50} alt="Padang Heritage Logo" />
          <h1 className="text-2xl font-bold ml-2">Minangkabau Verse</h1>
        </div>

        <nav>
          <ul className="flex space-x-4">
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
                  <span className="ml-1"><FaInfoCircle size={16} /></span>
                  <span className="font-bold ml-1">About</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/product" legacyBehavior>
                <a className="text-black hover:text-gray-700 flex items-center">
                  <span className="ml-1"><FaBox size={16} /></span>
                  <span className="font-bold ml-1">Products</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/team" legacyBehavior>
                <a className="text-black hover:text-gray-700 flex items-center">
                  <span className="ml-1"><FaUsers size={16} /></span>
                  <span className=" font-bold ml-1">Our Team</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
