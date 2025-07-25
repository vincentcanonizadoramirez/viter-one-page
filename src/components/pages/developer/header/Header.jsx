import React from "react";
import { HiPencil } from "react-icons/hi";
import ModalAddHeader from "./ModalAddHeader";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(false);
  const [isHeader, setIsHeader] = React.useState(false);

  const handleAddHeader = () => {
    setIsHeader(true);
    setItemEdit("headerUpdate");
  };

  return (
    <>
      <header className="bg-white relative shadow-md w-full">
        <div className="container mx-auto px-4 py-7 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <span className="ml-2 text-xl font-bold">MyApp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
            <a
              className="z-[2] relative font-montserratRegular cursor-pointer tooltip-header-left"
              data-tooltip="Edit Header"
              onClick={() => handleAddHeader()}
            >
              <HiPencil className="bg-primary hover:bg-primary text-white rounded-full w-[25px] h-[25px] p-1 border-[1px] transition-all ease-in-out duration-200" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (now positioned absolutely) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg px-4 py-2 space-y-2 border-t border-gray-200">
            <a href="#" className="block py-2 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="block py-2 hover:text-blue-500">
              About
            </a>
            <a href="#services" className="block py-2 hover:text-blue-500">
              Services
            </a>
            <a href="#contact" className="block py-2 hover:text-blue-500">
              Contact
            </a>
          </div>
        )}
      </header>

      {isHeader && (
        <ModalAddHeader
          itemEdit={itemEdit}
          setIsHeader={setIsHeader}
          //   headerData={headerData}
        />
      )}
    </>
  );
};

export default Header;
