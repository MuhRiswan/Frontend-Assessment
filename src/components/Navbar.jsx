"use client";
import Image from "next/image";
import { useState } from "react";
import { X, AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  const Links = [
    { id: 1, name: "Beranda", link: "/" },
    { id: 2, name: "Tentang Kami", link: "/#" },
    { id: 3, name: "Tips & Berita Pertanian", link: "/#" },
    { id: 4, name: "Kegiatan", link: "/#" },
  ];

  // Function to handle clearing search and navigating to '/'
  const handleBerandaClick = () => {
    router.push("/");
    setOpen(false);
  };

  return (
    <nav className="w-full drop-shadow-md bg-white fixed top-0 z-50">
      <div className="md:flex items-center justify-between py-4 px-8 md:px-28 mx-auto">
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <div onClick={handleBerandaClick}>
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={150}
                height={50}
                priority
                className="md:object-contain"
              />
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="flex right-8 top-6 cursor-pointer md:hidden w-7 h-7 items-center transition-all duration-500 ease-in"
          >
            {open ? <X /> : <AlignLeft />}
          </div>
        </div>
        <ul
          className={cn(
            "md:flex md:items-center md:gap-x-10 md:pb-0 pb-5 md:static bg-transparent md:z-auto  w-full md:w-auto md:pl-0 px-2 md:px-3 transition-all duration-500 ease-in justify-between",
            open ? "block" : "hidden"
          )}
        >
          {Links.map((link) => (
            <li key={link.id} className=" py-3 md:py-0">
              <div
                className={cn(
                  "text-gray-950 hover:text-amber-500 duration-200 cursor-pointer",
                  pathname === link.link ? "font-semibold" : "" // Apply active style if the link is active
                )}
                onClick={
                  link.link === "/"
                    ? handleBerandaClick
                    : () => {
                        router.push(link.link);
                        setOpen(false); // Close the menu on navigation
                      }
                }
              >
                {link.name}
              </div>
            </li>
          ))}
          <button className="md:hidden w-full bg-amber-400 px-4 py-2 tracking-wide  text-black hover:bg-amber-600 transition-all duration-200">
            Mitra Petani
          </button>
        </ul>
        <button className="hidden md:block bg-amber-400 px-4 py-2 tracking-wide  text-black hover:bg-amber-600 transition-all duration-200">
          Mitra Petani
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
