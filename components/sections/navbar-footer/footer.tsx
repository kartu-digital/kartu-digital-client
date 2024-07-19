"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], weight: "600" });

export default function Footer() {
  return (
    <footer>
      <section className="flex h-96 w-full items-center justify-center rounded-t-[60px] bg-[#5056FF]">
        <div className=" w-4/5 text-center md:w-1/2">
          <h1 className="mb-4 text-xl font-bold text-white md:text-4xl">
            Mari Ciptakan Sesuatu Yang Luar Biasa!
          </h1>
          <p className="mb-6 text-sm font-medium text-white text-opacity-75 md:text-base lg:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra arcu ut elit luctus, sed suscipit nisl iaculis. Mauris eget
            lectus lobortis, mollis diam eget, interdum erat. Etiam non purus
            vitae nibh sagittis laoreet
          </p>
          <Button variant={"neon_green"} className="mx-auto py-5">
            Buat Kartu Sekarang
          </Button>
        </div>
      </section>
      <section className="w-full bg-zinc-900 pb-5 pt-10 text-white lg:pt-20">
        {/* desktop layout start */}
        <div className="mb-10 hidden justify-between border-b-2 border-white border-opacity-50 pb-10 lg:mx-24 lg:flex">
          <div className=" mb-16 w-full lg:mx-0 lg:mb-0 lg:w-2/5">
            <div className="mb-8 flex items-center justify-center gap-3 text-2xl font-semibold lg:justify-start lg:gap-4">
              <Image
                src={"/svgs/logo-monochrome.svg"}
                width={40}
                height={40}
                alt="logo-mono"
              />
              <span className={workSans.className}>Kartu Digital</span>
            </div>
            <div className="mb-5 grid grid-cols-1">
              <span className="mb-3 text-center leading-5 opacity-75 lg:text-start">
                hello@kartudigital.com
              </span>
              <span className="text-center leading-5 opacity-75 lg:text-start">
                +62 800-1111-2222
              </span>
            </div>
            <div className="flex justify-center gap-5 lg:justify-start">
              <Link
                href={"/"}
                className="flex items-center rounded-3xl bg-white bg-opacity-25 p-4"
              >
                <InstagramIcon className="scale-150" />
              </Link>
              <Link
                href={"/"}
                className="flex items-center rounded-3xl bg-white bg-opacity-25 p-4"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2715 9.9805C19.1642 10.0268 17.1974 9.37802 15.5116 8.17305V16.4688C15.5116 19.6203 13.5448 22.401 10.5477 23.5133C7.59753 24.6255 4.22586 23.7913 2.1654 21.4277C0.0581034 19.0178 -0.316526 15.6346 1.18199 12.8539C2.68051 10.1195 5.77121 8.59015 8.95556 9.00726V13.1783C7.50387 12.7149 5.91169 13.2247 5.02195 14.4296C4.17903 15.6809 4.17903 17.303 5.06878 18.508C5.95852 19.713 7.5507 20.2228 8.95556 19.7593C10.4073 19.2959 11.3907 17.9518 11.3907 16.4688V0.248047H15.5116C15.5116 0.618807 15.5116 0.943222 15.6052 1.31398C15.8862 2.84337 16.776 4.18737 18.134 5.02158C19.0237 5.62407 20.1476 5.94849 21.2715 5.94849V9.9805Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href={"/"}
                className="flex items-center rounded-3xl bg-white bg-opacity-25 p-4"
              >
                <XIcon className="scale-125" />
              </Link>
            </div>
          </div>
          <div className="mx-3 flex w-full justify-center gap-3 md:gap-16 lg:mx-0 lg:w-auto">
            <ul className="text-center lg:text-start">
              <li className="text-sm font-semibold leading-4">Platform</li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                <Link href={"/"}>Paket & Harga</Link>
              </li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                <Link href={"/"}>Editor Kartu Digital</Link>
              </li>
            </ul>
            <ul className="text-center lg:text-start">
              <li className="text-sm font-semibold leading-4">Perusahaan</li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                <Link href={"/"}>Affiliate</Link>
              </li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                <Link href={"/"}>Hubungi Kami</Link>
              </li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                <Link href={"/"}>Tentang Kami</Link>
              </li>
            </ul>
            <ul className="text-center lg:text-start">
              <li className="text-sm font-semibold leading-4">Resources</li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                <Link href={"/"}>FAQs</Link>
              </li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                <Link href={"/"}>Bantuan</Link>
              </li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                <Link href={"/"}>Pelayanan Pelanggan</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="just mx-24 hidden items-center justify-between lg:flex">
          <p className="opacity-50">
            &copy;2024 PT. Kartu Digital Indonesia. All rights reserved{" "}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href={"/"}
              className="opacity-50 transition-all duration-300 hover:opacity-100"
            >
              Kententuan Layanan
            </Link>
            <Link
              href={"/"}
              className="opacity-50 transition-all duration-300 hover:opacity-100"
            >
              Ketentuan Privasi
            </Link>
            <Link
              href={"/"}
              className="opacity-50 transition-all duration-300 hover:opacity-100"
            >
              Cookies
            </Link>
          </div>
        </div>
        {/* desktop layout end */}

        {/* mobile layout start */}
        <div className="mb-10 flex flex-wrap justify-between border-b-2 border-white border-opacity-50 pb-10 lg:hidden">
          <div className="mb-10 w-full">
            <div className="mb-8 flex items-center justify-center gap-3 text-2xl font-semibold">
              <Image
                src={"/svgs/logo-monochrome.svg"}
                width={40}
                height={40}
                alt="logo-mono"
              />
              <span className={workSans.className}>Kartu Digital</span>
            </div>
          </div>
          <div className="mx-3 grid w-full grid-cols-2 justify-center gap-x-5 gap-y-10 align-middle md:gap-16">
            <ul className="text-center">
              <li className="text-base font-semibold leading-4">Platform</li>
              <li className=" mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <Link href={"/"}>Paket & Harga</Link>
              </li>
              <li className=" mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <Link href={"/"}>Editor Kartu Digital</Link>
              </li>
            </ul>
            <ul className="text-center ">
              <li className="text-base font-semibold leading-4">Perusahaan</li>
              <li className=" mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <Link href={"/"}>Affiliate</Link>
              </li>
              <li className="mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <Link href={"/"}>Hubungi Kami</Link>
              </li>
              <li className=" mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <Link href={"/"}>Tentang Kami</Link>
              </li>
            </ul>
            <ul className="text-center">
              <li className="text-base font-semibold leading-4">Resources</li>
              <li className="mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <Link href={"/"}>FAQs</Link>
              </li>
              <li className="mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <Link href={"/"}>Bantuan</Link>
              </li>
              <li className="mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <Link href={"/"}>Pelayanan Pelanggan</Link>
              </li>
            </ul>
            <ul className="text-center">
              <li className="text-base font-semibold leading-4">Contact</li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <span className="mb-3 text-center text-sm">
                  hello@kartudigital.com
                </span>
              </li>
              <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                <span className="text-center text-sm">+62 800-1111-2222</span>
              </li>
            </ul>
          </div>
          {/* socials start */}
          <div className="mx-auto mt-10 flex justify-center gap-5 lg:justify-start">
            <Link
              href={"/"}
              className="flex items-center rounded-3xl bg-white bg-opacity-25 p-4"
            >
              <InstagramIcon className="scale-150" />
            </Link>
            <Link
              href={"/"}
              className="flex items-center rounded-3xl bg-white bg-opacity-25 p-4"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2715 9.9805C19.1642 10.0268 17.1974 9.37802 15.5116 8.17305V16.4688C15.5116 19.6203 13.5448 22.401 10.5477 23.5133C7.59753 24.6255 4.22586 23.7913 2.1654 21.4277C0.0581034 19.0178 -0.316526 15.6346 1.18199 12.8539C2.68051 10.1195 5.77121 8.59015 8.95556 9.00726V13.1783C7.50387 12.7149 5.91169 13.2247 5.02195 14.4296C4.17903 15.6809 4.17903 17.303 5.06878 18.508C5.95852 19.713 7.5507 20.2228 8.95556 19.7593C10.4073 19.2959 11.3907 17.9518 11.3907 16.4688V0.248047H15.5116C15.5116 0.618807 15.5116 0.943222 15.6052 1.31398C15.8862 2.84337 16.776 4.18737 18.134 5.02158C19.0237 5.62407 20.1476 5.94849 21.2715 5.94849V9.9805Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link
              href={"/"}
              className="flex items-center rounded-3xl bg-white bg-opacity-25 p-4"
            >
              <XIcon className="scale-125" />
            </Link>
          </div>
          {/* socials end */}
        </div>
        <div className="text-center lg:hidden">
          <div className=" mb-4 flex justify-center gap-3 sm:gap-5">
            <Link
              href={"/"}
              className="text-xs font-medium opacity-50 transition-all duration-300 hover:opacity-100"
            >
              Kententuan Layanan
            </Link>
            <Link
              href={"/"}
              className="text-xs font-medium opacity-50 transition-all duration-300 hover:opacity-100"
            >
              Ketentuan Privasi
            </Link>
            <Link
              href={"/"}
              className="text-xs font-medium opacity-50 transition-all duration-300 hover:opacity-100"
            >
              Cookies
            </Link>
          </div>
          <p className="text-xs font-medium tracking-wider opacity-50">
            &copy;2024 PT. Kartu Digital Indonesia. All rights reserved
          </p>
        </div>
        {/* mobile layout end */}
      </section>
    </footer>
  );
}
