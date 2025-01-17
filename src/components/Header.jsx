import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll,enablePageScroll } from "scroll-lock";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setopenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
      enablePageScroll()
    } else {
      setopenNavigation(true);
      disablePageScroll();
    }
  };
  const handelClick = () => {
    if(!openNavigation) return;
    enablePageScroll();
    setopenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0  left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop:blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10  max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="brainwave" width={190} height={40} />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] w-full lg:w-auto l-0 r-0 bottom-0 bg-n-8  lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handelClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : " "
                }
                px-6 py-5 md:py-8  lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                }
                lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50  transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button
          className="lg:hidden ml-auto"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
