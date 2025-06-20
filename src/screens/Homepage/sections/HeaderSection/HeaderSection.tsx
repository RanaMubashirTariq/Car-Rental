import { PhoneIcon, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Navigation menu items data
const navigationItems = [
  { label: "Home", isActive: false },
  { label: "Vehicles", isActive: true },
  { label: "Details", isActive: false },
  { label: "About Us", isActive: false },
  { label: "Contact Us", isActive: false },
];

export const HeaderSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex w-full items-center justify-between px-[72px] py-7 bg-transparent relative max-[1100px]:px-[50px] max-[680px]:px-[25px] max-[680px]:py-[20px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-[25.72px] bg-[url(/group.png)] bg-[100%_100%]" />
        <div className="font-['Poppins',Helvetica] font-semibold text-[#5937e0] text-base leading-6">
          RENTCARS
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden custom1020:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex items-start gap-5">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="inline-flex items-center justify-center px-3 py-1">
                  <span
                    className={`font-['Inter',Helvetica] cursor-pointer text-lg text-defaultblack ${item.isActive ? "font-bold" : "font-medium"}`}
                  >
                    {item.label}
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Hamburger Icon - Mobile */}
      <button
        className="custom1020:hidden flex items-center justify-center p-2"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <CloseIcon className="w-7 h-7 text-[#5937e0]" /> : <MenuIcon className="w-7 h-7 text-[#5937e0]" />}
      </button>

      {/* Contact Info */}
      <div className="flex items-center gap-3 w-[180px] custom1020:flex hidden">
        <div className="relative w-10 h-10 bg-[#5937e0] rounded-[50px] flex items-center justify-center">
          <PhoneIcon className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="font-['Work_Sans',Helvetica] font-normal text-defaultblack text-base leading-[26px]">
            Need help?
          </div>
          <div className="font-['Work_Sans',Helvetica] font-semibold text-defaultblack text-base leading-[26px]">
            +996 247-1680
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 custom1020:hidden animate-fade-in">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-start gap-2 p-4">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="inline-flex items-center justify-start px-3 py-2 w-full">
                    <span
                      className={`font-['Inter',Helvetica] text-lg text-defaultblack ${item.isActive ? "font-bold" : "font-medium"}`}
                    >
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-10 h-10 bg-[#5937e0] rounded-[50px] flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="font-['Work_Sans',Helvetica] font-normal text-defaultblack text-base leading-[26px]">
                    Need help?
                  </div>
                  <div className="font-['Work_Sans',Helvetica] font-semibold text-defaultblack text-base leading-[26px]">
                    +996 247-1680
                  </div>
                </div>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};
