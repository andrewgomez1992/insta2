import Image from "next/image";

import instagram from "../assets/instagram.png";
import iglogo from "../assets/iglogo.png";

import { SearchIcon, MenuIcon, HomeIcon } from "@heroicons/react/solid";
import {
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState, useRecoilValue } from "recoil";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const openModal = useRecoilValue(modalState);
  const router = useRouter();

  return (
    <div className="shadow-md shadow-[#434343a3] border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
        >
          <Image
            src={instagram}
            alt="instagram-logo-word"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative w-12 lg:hidden flex-shrink-0 cursor-pointer pt-2"
        >
          <Image
            src={iglogo}
            alt="instagram-logo"
            ayout="fill"
            objectFit="contain"
          />
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-[#3c36e9a3]" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 block 
            w-full pl-10 sm:text-sm border-gray-300
             focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn hover:rotate-45" />
                <div
                  className="absolute -top-1 -right-1 text-xs w-4 h-4
            bg-red-500 rounded-full flex items-center justify-center 
            text-white animate-pulse"
                >
                  3
                </div>
              </div>

              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <div
                className="h-10 w-10 rounded-full
        cursor-pointer hover:scale-110 transition 
        transform duration-200 ease-out"
              >
                <Image
                  onClick={signOut}
                  src={session?.user?.image}
                  alt="profile pic"
                  className="rounded-full cursor-pointer"
                  layout="fill"
                />
              </div>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
