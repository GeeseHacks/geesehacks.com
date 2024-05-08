// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-transparent text-white fixed top-0 left-0 z-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/geesehacksLogoTemp.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              href="/sponsors"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Sponsors
            </Link>
            <Link
              href="/faq"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              FAQ
            </Link>
            <Link
              href="/apply"
              className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
