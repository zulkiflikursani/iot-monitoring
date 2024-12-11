"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiHome } from "react-icons/hi2";

function BottomMenu() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 right-0 bottom-0 min-h-14 z-20 bg-green-600  ">
      <div className="flex justify-around items-center gap-0 mb-6">
        <Link
          className={`flex items-center hover:bg-foreground-200 ${pathname === "/room1" ? "bg-foreground-100" : ""}`}
          href={"/room1"}
        >
          <div className=" w-full flex flex-col  items-center justify-center text-center cursor-pointer p-2">
            <HiHome className=" h-6 w-15" />
            <div className="text-[10px] p-0 m-0">Room 1</div>
          </div>
        </Link>
        <Link
          className={`flex items-center hover:bg-foreground-200 ${pathname === "/room2" ? "bg-foreground-100" : ""}`}
          href={"/room2"}
        >
          <div className=" w-full flex flex-col items-center justify-center text-center  p-2  ">
            <HiHome className=" h-6 w-15" />
            <div className="text-[10px] p-0 m-0">Room 2</div>
          </div>
        </Link>
        <Link
          className={`flex items-center hover:bg-foreground-200 ${pathname === "/room3" ? "bg-foreground-100" : ""}`}
          href={"/room3"}
        >
          <div className=" w-full flex flex-col items-center justify-center text-center p-2">
            <HiHome className=" h-6 w-15" />
            <div className="text-[10px] p-0 m-0"> Room 3</div>
          </div>
        </Link>
        <Link
          className={`flex items-center hover:bg-foreground-200 ${pathname === "/room4" ? "bg-foreground-100" : ""}`}
          href={"/room4"}
        >
          <div className=" w-full flex flex-col items-center justify-center text-center p-2">
            <HiHome className=" h-6 w-15" />
            <div className="text-[10px] p-0 m-0"> Room 4</div>
          </div>
        </Link>
        <Link
          className={`flex items-center hover:bg-foreground-200 ${pathname === "/room5" ? "bg-foreground-100" : ""}`}
          href={"/room5"}
        >
          <div className="w-full flex flex-col items-center justify-center text-center p-2">
            <HiHome className=" h-6 w-15" />
            <div className="text-[10px] p-0 m-0">Room 5</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomMenu;
