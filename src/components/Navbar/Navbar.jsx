import { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo.svg";
import DarkMode from "./DarkMode";
import { redirectToWhatsApp } from "../../utils/whatsapp";

export const MenuLinks = [
  {
    id: 1,
    name: "Services",
    link: "/#about",
  },
  {
    id: 2,
    name: "Clients Remarks",
    link: "/#testimonial",
  },
  {
    id: 3,
    name: "Pricing",
    link: "/#pricing",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="  fixed top-0 left-0 right-0 bg-white z-10 w-full dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            // target="_blank"
            href="/"
            className="flex items-center gap-3"
          >
            <div className="relative inline-block">
              <img src={Logo} alt="" className="w-[50px] rounded-full" />
            </div>
            <div className="relative inline-block">
              <span className="lg:text-2xl text-xl dark:hover:text-primary sm:text-3xl font-semibold">
                Sheya Solutions LLC
              </span>
            </div>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button
                onClick={redirectToWhatsApp}
                className="primary-btn font-bold"
              >
                Get in Touch
              </button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
