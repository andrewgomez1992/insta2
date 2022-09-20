import React from "react";
import Image from "next/image";
import instagram from "../assets/instagram.png";
import iglogo from "../assets/iglogo.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl"></div>
      {/* Left */}
      <div className="relative hidden lg:inline-grid h-24 w-24">
        <Image
          src={instagram}
          alt="instagram-logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="relative w-12 h-12 lg:hidden flex-shrink-0">
        <Image
          src={iglogo}
          alt="instagram-logo"
          ayout="fill"
          objectFit="contain"
        />
      </div>
      {/* Middle */}
    
      {/* Right */}
    </div>
  );
};

export default Header;
