import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import Menu from "../Menu/Menu";
import ProfileMenu from "../../components/ProfileMenu";
import logo from "../../images/LandingPageImages/logo-on-light.svg";
import coffeeImg from "../../images/LandingPageImages/coffee.png";
import { FiSearch, FiLogIn } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { WandSparkles } from "lucide-react";
import { Plus } from "lucide-react";
import SearchDropdown from "../../components/SearchDropDown/SearchDropdown";
export default function Header() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)) {
        setIsMobileSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsMobileSearchOpen(false);
  }, [location.pathname]);



  const categoryLinks = [
    { label: "Text Tools", path: "/categories/text-tools" },
    { label: "Image Tools", path: "/categories/image-tools" },
    { label: "CSS Tools", path: "/categories/css-tools" },
    { label: "Coding Tools", path: "/categories/coding-tools" },
    { label: "Color Tools", path: "/categories/color-tools" },
    { label: "Social Media Tools", path: "/categories/social-media-tools" },
    { label: "Miscellaneous Tools", path: "/categories/miscellaneous-tools" },
  ];

  const extensionLinks = [
    {
      label: "Chrome Extension",
      url: "https://chromewebstore.google.com/detail/online-tools-by-10015io/afbphoagjpegnkpeiliacmiiggojdabo?pli=1",
    },
    {
      label: "Firefox Extension",
      url: "https://addons.mozilla.org/en-US/firefox/addon/online-tools-by-10015-io/",
    },
  ];

  // Helper function to get user's initial
  const getUserInitial = (name) => {
    if (!name) return "U";
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    // Return first letter of first name and first letter of last name
    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
  };

  const isProductFinder = location.pathname.startsWith("/product-finder");

  return (
    <header className="fixed top-0 left-0 right-0 z-1000 h-15 flex items-center gap-1 px-6 bg-white border-b border-gray-200 font-['Space_Grotesk']">
      {/* Logo - Made it smaller */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="w-30 h-auto cursor-pointer" />
      </Link>

      {/* Search + Spacer */}
      <div className="hidden sm:flex items-center ml-3.5 gap-4 flex-1">
        <div
          ref={searchRef}
          className="relative flex items-center bg-[#f1f2fb] rounded-lg px-6 border border-gray-200 py-2.5 w-80"
        >
          <FiSearch className="text-gray-500 mr-2 text-base" />
          <input
            type="text"
            placeholder="Search Tools"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
          />

          <SearchDropdown open={searchOpen} query={searchQuery} />
        </div>

        {/* Spacer pushes nav to the right */}
        <div className="flex-1" />
      </div>

      {/* Desktop Nav - Reduced spacing */}
      <nav className="hidden md:flex items-center gap-3">
        {isProductFinder ? (
          <>
            <Link
              to="/product-finder/submit"
              className="text-gray-700 font-medium px-2 py-1 text-[18px] rounded hover:bg-gray-100 transition hover:text-indigo-600"
            >
              <span className="flex items-center font-bold"> <Plus size={25} color="#000000" /> Submit</span>
            </Link>
            <Link
              to="/product-finder/getsubmit"
              className="text-gray-700 font-medium px-4 py-0 text-[18px] rounded hover:bg-gray-100 transition hover:text-indigo-600"
            >
              <span className="flex items-center gap-2 font-bold">
                <WandSparkles size={20} color="#000000" />
                Get Featured
              </span>
            </Link>
          </>
        ) : (
          <Link
            to="/product-finder"
            className="text-gray-700  font-medium px-2 py-1 text-[18px] rounded hover:bg-gray-100 transition hover:text-indigo-600"
          >
            <span className="flex items-center font-bold">
              Product Finder
              <span className="ml-1.5 bg-indigo-600 text-white text-[9px] px-1 py-0.5 rounded">
                BETA
              </span>
            </span>
          </Link>
        )}

        {/* Categories - hidden on Product Finder */}
        {!isProductFinder && (
          <div className="relative group  ">
            {/* Trigger */}
            <div className="flex items-center font-bold gap-3 cursor-pointer text-gray-700 text-[18px] px-2 py-1 rounded hover:bg-gray-100 transition hover:text-indigo-600">
              Categories <FaChevronDown className="text-xs" />
            </div>

            {/* Dropdown */}
            <div
              className="absolute top-full left-0 w-44 bg-white border border-gray-200 rounded shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-150 z-50"
            >
              {categoryLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Extensions */}
        <div className="relative group">
          <div className="flex font-bold items-center gap-1 cursor-pointer text-gray-700 text-[18px] px-2 py-1 rounded hover:bg-gray-100 transition hover:text-indigo-600">
            Extensions <FaChevronDown className="text-xs" />
          </div>

          <div
            className="absolute top-full left-0 w-44 bg-white border border-gray-200 rounded shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-150 z-50"
          >
            {extensionLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuModalOpen(true)}
          className="flex items-center gap-1 text-gray-700 text-[18px]  px-3.5 font-bold py-1 rounded hover:bg-gray-100 transition hover:text-indigo-600"
        >
          <GiHamburgerMenu className="text-base font-bold " />
          Menu
        </button>
      </nav>

      {/* Right Section - Compact spacing */}
      <div className="ml-auto hidden sm:flex items-center gap-4">
        {/* Coffee icon - Made it smaller */}
        <button className="p-3  hover:bg-gray-100 rounded transition">
          <a href="https://buymeacoffee.com/fatihtelis" target="_blank">
            <img src={coffeeImg} alt="Coffee" className="w-7 h-7" />
          </a>
        </button>

        {/* Profile or Sign in - Conditionally rendered */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition border-2 border-indigo-600"
            >
              {getUserInitial(user.name)}
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="flex items-center gap-1 text-1xl bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-2xl  font-semibold transition"
          >
            <FiLogIn className="text-xs" />
            Sign in
          </Link>
        )}
      </div>

      {/* Mobile Actions */}
      <div className="md:hidden ml-auto flex items-center gap-2">
        <button
          onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
          className="p-1.5"
        >
          <FiSearch className="text-xl text-gray-700" />
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5"
        >
          {mobileMenuOpen ? (
            <AiOutlineClose className="text-xl text-gray-700" />
          ) : (
            <GiHamburgerMenu className="text-xl text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Search Bar - appears below header when toggled */}
      {isMobileSearchOpen && (
        <div
          ref={mobileSearchRef}
          className="md:hidden absolute top-15 left-0 right-0 bg-white border-b border-gray-200 p-3 z-999 shadow-md"
        >
          <div className="relative flex items-center bg-[#f1f2fb] rounded-lg px-4 py-2 border border-gray-200">
            <FiSearch className="text-gray-500 mr-2 text-base" />
            <input
              type="text"
              placeholder="Search Tools"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
            />
          </div>
          <div className="absolute top-full left-0 right-0">
            <SearchDropdown open={true} query={searchQuery} />
          </div>
        </div>
      )}


      {mobileMenuOpen && (
        <div className="absolute top-15 left-0 right-0 bg-white shadow-lg border-t flex flex-col z-998">


          {isProductFinder ? (
            <>
              <Link to="/product-finder/submit" className="group px-4 py-3 border-b text-sm font-medium">
                + Submit
              </Link>
              <Link to="/product-finder/getsubmit" className="group px-4 py-3 border-b text-sm font-medium">
                Get Featured
              </Link>
            </>
          ) : (
            <Link
              to="/product-finder"
              onClick={() => setMobileMenuOpen(false)}
              className="group px-4 py-3 border-b text-sm font-medium flex items-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Product Finder
              <span className="ml-2 bg-indigo-600 text-white text-[9px] px-1.5 py-0.5 rounded group-hover:bg-white group-hover:text-blue-600 transition-colors duration-200">
                BETA
              </span>
            </Link>
          )}


          {/* Mobile Categories - hidden on Product Finder */}
          {!isProductFinder && (
            <>
              <button
                onClick={() => setOpenMenu(openMenu === "mcat" ? null : "mcat")}
                className="flex justify-between items-center px-4 py-3 text-sm border-b  "
              >
                <span className="hover:text-blue-600 ">Categories</span>
                <FaChevronDown className="text-xs" />
              </button>

              {openMenu === "mcat" && (
                <div className="bg-gray-50 flex flex-col">
                  {categoryLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="pl-6 py-2 text-xs border-b text-gray-700 hover:text-indigo-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Mobile Extensions */}
          <>
            <button
              onClick={() => setOpenMenu(openMenu === "mext" ? null : "mext")}
              className="flex justify-between items-center px-4 py-3 text-sm border-b"
            >
              <span className="hover:text-blue-600">Extensions</span>
              <FaChevronDown className="text-xs" />
            </button>

            {openMenu === "mext" && (
              <div className="bg-gray-50 flex flex-col">
                {extensionLinks.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="pl-6 py-2 text-xs border-b text-gray-700 hover:text-indigo-600"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </>


          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 border-b text-sm font-medium">
            About
          </Link>

          <Link
            to="/termofuse"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 border-b text-sm font-medium"
          >
            Terms of Use
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 border-b text-sm font-medium"
          >
            Contact
          </Link>

          <Link
            to="/privicyandpolicy"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 border-b text-sm font-medium"
          >
            Privacy & Policy
          </Link>


          <a
            href="https://x.com/10015io"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 border-b text-sm font-medium"
          >
            Follow on X
          </a>

          <a
            href="https://buymeacoffee.com/fatihtelis"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 border-b text-sm font-medium flex items-center gap-2"
          >
            <img src={coffeeImg} alt="Coffee" className="w-4 h-4" />
            Buy me a coffee
          </a>


          <div className="p-4 border-t">
            {user ? (
              <button
                onClick={() => {
                  setIsProfileMenuOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-indigo-700 transition"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-indigo-600 font-semibold text-xs">
                  {getUserInitial(user.name)}
                </div>
                {user.name}
              </button>
            ) : (
              <Link
                to="/signin"
                className="w-full flex items-center justify-center gap-1.5 bg-indigo-600 text-white px-4 py-2 rounded text-sm font-semibold"
              >
                <FiLogIn className="text-sm" />
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      <Menu
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
      />
      <ProfileMenu
        isOpen={isProfileMenuOpen}
        onClose={() => setIsProfileMenuOpen(false)}
      />
    </header>
  );
}
