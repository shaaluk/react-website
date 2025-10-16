import brainwave from "../assets/brainwave.svg";
import { navigation } from "../constants/index.js";
import { useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import { HambugerMenu } from "./design/Header.jsx";
import { useState } from "react";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setopenNavigation] = useState(true);
  const toggleNav=()=>{
    if(openNavigation){
        setopenNavigation(false);
    }
        else{
            openNavigation(true)
        
    }
  }

  const handleClick=()=>{
    setopenNavigation(false);
  }
  return (
    <div>
      <div
        className={`fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b
         border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm w-full
          ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} width={190} height={40} alt="brainwave" />
          </a>
          <nav
            className={`${openNavigation ? 'flex':'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8
          lg:static lg:flex lg:mx-auto lg:bg-transparent `}
          >
            <div
              className="relative z-2 flex flex-col items-center justify-center
           m-auto lg:flex-row"
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code text-2xl uppercase text-n-1 
    transition-colors hover:text-color-1
    ${
      item.onlyMobile ? "lg-hidden" : ""
    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm
    lg:font-semibold
    ${item.url === pathName.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}
    lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HambugerMenu/>
          </nav>
          <a
            href="#signup"
            className="button hover:text-n-1/50 mr-8 transition-colors
          lg:block"
          >
            new account
          </a>
          <Button className="hidden lg:flex" href="#login">
            Sign In
          </Button>
          <Button className="ml-auto lg:hidden" onClick={toggleNav}>
            <MenuSvg openNavigation={openNavigation}/>
          </Button>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
