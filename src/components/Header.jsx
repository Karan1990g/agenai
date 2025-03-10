import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { logo } from "../assets";

const Header = () => {
  const pathname = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  // Handle Walkthru.AI link click
  const handleWalkthruAIClick = () => {
    if (pathname.pathname === "/") {
      // Scroll to the features section on the home page
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirect to the home page
      navigate("/");
    }
  };

  // Separate items: those with right: true will go to the right group
  const centerNav = navigation.filter((item) => !item.right);
  const rightNav = navigation.filter((item) => item.right);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-700 lg:bg-black/80 lg:backdrop-blur-sm ${
        openNavigation ? "bg-black" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo (Left) */}
        <div className="flex items-center">
          <a className="flex items-center text-2xl font-bold text-white xl:mr-4" href="/">
            <img src={logo} alt="Logo" className="h-1/5 w-1/5 mr-2 object-contain" />
          </a>
        </div>

        {/* Center Navigation */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {centerNav.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={item.title === "Walkthru.AI" ? handleWalkthruAIClick : handleClick}
                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-blue-400 px-6 py-6 md:py-8 lg:text-sm lg:font-semibold ${
                  item.url === pathname.pathname ? "lg:text-white" : "lg:text-gray-400"
                } lg:leading-5 lg:hover:text-white xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Right Navigation */}
        <div className="hidden lg:flex ml-auto">
          {rightNav.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className="block font-code text-sm uppercase text-white transition-colors hover:text-blue-400 px-4 py-2"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;