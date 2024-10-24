"use client";
import { ArrowUp, ChevronUp, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-green-600 text-white px-4 pt-16 mx-automd:px-24 lg:px-8">
      <a
        href="#"
        className="flex absolute right-10 md:right-28 z-40 items-center justify-center w-10 h-10 bg-amber-400 rounded-full hover:bg-amber-300 transition"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ChevronUp className="w-8 h-8 font-semibold text-black" />
      </a>
      <div className="max-w-7xl mx-auto">
        <Link
          href="#"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center"
        >
          <Image
            src="/logo-2.svg"
            alt="logo"
            priority
            width={100}
            height={100}
            className="w-full h-full"
          />
        </Link>
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 ">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="max-w-xs">
                <p className="mb-8 text-sm text-gray-100">
                  Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet,
                  Gedung Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI
                  Jakarta 12870, Indonesia
                </p>
                <div>
                  <p className="text-sm text-gray-100">
                    Email : info.eratani@eratani.co.id
                  </p>
                  <p className="text-sm text-gray-100">
                    Telepon : +62 811 952 2577
                  </p>
                </div>
              </div>
              <div className="w-full">
                <h5 className="mb-8 text-lg font-semibold text-white">Menu</h5>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-100">Tim Kami</p>
                  <p className="text-sm text-gray-100">Mitra Eratani</p>
                  <p className="text-sm text-gray-100">
                    Tips & Berita Pertanian
                  </p>
                  <p className="text-sm text-gray-100">Karir</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {/* <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span> */}
            <div className="flex items-center justify-center gap-2">
              <Globe className="w-6 h-6 text-gray-100" />
              <p className="text-gray-100 underline decoration-amber-400 decoration-4">
                IN
              </p>
              <p className="text-gray-100">EN</p>
            </div>
            <div className="grid grid-cols-5 mt-10 md:mt-20">
              <Image
                src="/icons/tiktok.svg"
                alt="logo"
                priority
                width={100}
                height={100}
                className="w-8 h-6"
              />
              <Image
                src="/icons/instagram.svg"
                alt="logo"
                priority
                width={100}
                height={100}
                className="w-8 h-6"
              />
              <Image
                src="/icons/linkedin.svg"
                alt="logo"
                priority
                width={100}
                height={100}
                className="w-8 h-6"
              />
              <Image
                src="/icons/youtube.svg"
                alt="logo"
                priority
                width={100}
                height={100}
                className="w-8 h-6"
              />
              <Image
                src="/icons/whatsapp.svg"
                alt="logo"
                priority
                width={100}
                height={100}
                className="w-8 h-6"
              />
            </div>
          </div>
        </div>

        <div className="pt-5 pb-5 ">
          <p className="text-sm text-gray-100 text-center">
            Copyright © 2021 by PT Eratani Teknologi Nusantara
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
