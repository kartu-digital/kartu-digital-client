'use client';
import React, { Fragment, useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Work_Sans } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const workSans = Work_Sans({ subsets: ['latin'], weight: '600' });

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const router = useRouter();
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (auth.user) {
      router.push('/dashboard');
    }
  }, [auth, router]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {/* {Start Navigation (Prajna)} */}
      {currentPath !== '/login' && currentPath !== '/register' && (
        <nav className="relative z-50 mb-5 flex w-full justify-between lg:px-10 lg:py-8">
          {/* {Start Mobile Navigation (Prajna)} */}
          <div
            className={`${isOpen ? 'bg-white' : ''} mobile-menu fixed mb-20 w-full duration-300 lg:hidden `}
          >
            <div
              className={`${isOpen ? '' : 'shadow-sm'} flex justify-between bg-white bg-opacity-40 px-3 backdrop-blur-sm `}
            >
              <Link
                href={'/'}
                className="flex flex-nowrap items-center text-lg font-semibold md:text-xl"
              >
                <Image
                  src={'/svgs/logo-color.svg'}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mr-1 w-auto scale-50 pl-3"
                />
              </Link>
              <div className="mr-3 flex gap-4">
                <Link
                  href={'/register'}
                  className="border-neonGreen bg-neonGreen my-3 flex items-center rounded-[34px] border-2 px-3 text-sm font-semibold transition-all duration-300 hover:bg-transparent hover:text-lime-400 md:px-6 md:py-2 md:text-lg"
                >
                  Get Started
                </Link>
                <button
                  onClick={handleClick}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <span
                    className={`block h-0.5 w-6 rounded-sm bg-black 
                   transition-all duration-300 ease-out ${
                     isOpen
                       ? 'translate-y-[0.360rem] rotate-45'
                       : '-translate-y-0.5'
                   }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 rounded-sm bg-black 
                   transition-all duration-300 ease-out ${
                     isOpen ? 'opacity-0' : 'opacity-100'
                   }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 rounded-sm bg-black 
                   transition-all duration-300 ease-out ${
                     isOpen
                       ? '-translate-y-[0.360rem] -rotate-45'
                       : 'translate-y-0.5'
                   }`}
                  ></span>
                </button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="mobile-menu"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                  className={`h-full w-full pt-3 lg:hidden`}
                >
                  <div className="border-lightGray h-screen w-screen border-b-2">
                    <Button
                      size={'mobile_nav'}
                      variant={'mobile_navigation'}
                      asChild
                      className="font-normal"
                    >
                      <Link href={'/'}>Home</Link>
                    </Button>
                    <Button
                      size={'mobile_nav'}
                      variant={'mobile_navigation'}
                      asChild
                      className=" font-normal"
                    >
                      <Link href={'/templates'}>Templates</Link>
                    </Button>
                    <Button
                      size={'mobile_nav'}
                      variant={'mobile_navigation'}
                      asChild
                      className=" font-normal"
                    >
                      <Link href={'/harga'}>Harga</Link>
                    </Button>
                    <Button
                      size={'mobile_nav'}
                      variant={'mobile_navigation'}
                      asChild
                      className=" font-normal"
                    >
                      <Link href={'/produk'}>Produk</Link>
                    </Button>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="produk" className="border-none">
                        <AccordionTrigger className="hover:bg-lightGray justify-between px-4 py-3 text-base font-normal">
                          Bantuan
                        </AccordionTrigger>
                        <AccordionContent className=" pl-3 text-Black500">
                          <Button
                            size={'mobile_nav'}
                            variant={'mobile_navigation'}
                            asChild
                            className="font-normal"
                          >
                            <Link href={'https://panduan.kartudigital.com/'}>
                              Panduan Pengguna
                            </Link>
                          </Button>
                          <Button
                            size={'mobile_nav'}
                            variant={'mobile_navigation'}
                            asChild
                            className="font-normal"
                          >
                            <Link href={'/'}>Customer Service</Link>
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="z-50 w-screen py-10">
                      <Link
                        href={'/login'}
                        className="mx-10 mb-4 flex items-center justify-center rounded-[34px] border-2 border-black px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        Masuk
                      </Link>
                      <Link
                        href={'/register'}
                        className="mx-10 flex items-center justify-center rounded-[34px] border-2 border-lime-400 bg-lime-400 px-4 py-2 text-center transition-all duration-300 hover:bg-transparent hover:text-lime-400"
                      >
                        Mulai
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* {End Mobile Navigation} */}

          {/* {Start Desktop Navigation (Prajna)} */}
          <Link
            href={'/'}
            className="hidden flex-nowrap items-center text-2xl font-semibold lg:flex"
          >
            <Image
              src={'/svgs/logo-color.svg'}
              alt="Logo"
              width={100}
              height={100}
              className="mr-2 w-auto scale-50 xl:mr-4"
            />
            <span className={workSans.className}>Kartu Digital</span>
          </Link>
          <div className="relative hidden items-center lg:flex lg:gap-3">
            <Button size={'desktop_nav'} variant={'desktop_navigation'} asChild>
              <Link href={'/'}>Home</Link>
            </Button>
            <Button size={'desktop_nav'} variant={'desktop_navigation'} asChild>
              <Link href={'/templates'}>Templates</Link>
            </Button>
            <Button size={'desktop_nav'} variant={'desktop_navigation'} asChild>
              <Link href={'/harga'}>Harga</Link>
            </Button>
            <Button size={'desktop_nav'} variant={'desktop_navigation'} asChild>
              <Link href={'/produk'}>Produk</Link>
            </Button>
            <NavigationMenu>
              <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger>Bantuan</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 bg-white p-4 md:grid-cols-1 lg:w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href={'https://panduan.kartudigital.com'}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                        >
                          Panduan Pengguna
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href={'/'}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b px-3 py-2 transition-all duration-300 hover:bg-slate-100"
                        >
                          Customer Service
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </div>
          <div className="hidden gap-1 md:gap-3 lg:flex xl:gap-5">
            <Link
              href={'/login'}
              className="my-3 flex items-center rounded-[34px] border-2 border-black font-semibold transition-all duration-300 hover:bg-black hover:text-white lg:px-6 lg:py-2"
            >
              Masuk
            </Link>
            <Link
              href={'/register'}
              className="my-3 flex items-center rounded-[34px] border-2 border-lime-400 bg-lime-400 font-semibold transition-all duration-300 hover:bg-transparent hover:text-lime-400 lg:px-6 lg:py-2"
            >
              Daftar
            </Link>
          </div>
          {/* {End Desktop Navigation} */}
        </nav>
      )}
      {/* {End Navigation} */}

      {children}

      {/* {Start Footer (Prajna)} */}
      {currentPath !== '/login' && currentPath !== '/register' && (
        <footer>
          {currentPath === '/' && (
            <section className="flex h-96 w-full items-center justify-center rounded-t-[60px] bg-[#5056FF]">
              <div className=" w-4/5 text-center md:w-1/2">
                <h1 className="mb-4 text-xl font-bold text-white md:text-4xl">
                  Mari Ciptakan Sesuatu Yang Luar Biasa!
                </h1>
                <p className="mb-6 text-sm font-medium text-white text-opacity-75 md:text-base lg:mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  pharetra arcu ut elit luctus, sed suscipit nisl iaculis.
                  Mauris eget lectus lobortis, mollis diam eget, interdum erat.
                  Etiam non purus vitae nibh sagittis laoreet
                </p>
                <Button variant={'neon_green'} className="mx-auto py-5">
                  Buat Kartu Sekarang
                </Button>
              </div>
            </section>
          )}

          <section className="w-full bg-zinc-900 pb-5 pt-10 text-white lg:pt-20">
            {/* {Start Desktop Footer (Prajna)} */}
            <div className="mb-10 hidden justify-between border-b-2 border-white border-opacity-50 pb-10 lg:mx-24 lg:flex">
              <div className=" mb-16 w-full lg:mx-0 lg:mb-0 lg:w-2/5">
                <div className="mb-8 flex items-center justify-center gap-3 text-2xl font-semibold lg:justify-start lg:gap-4">
                  <Image
                    src={'/svgs/logo-monochrome.svg'}
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
                    href={'/'}
                    className="flex items-center rounded-3xl bg-white bg-opacity-25 p-4"
                  >
                    <InstagramIcon className="scale-150" />
                  </Link>
                  <Link
                    href={'/'}
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
                    href={'/'}
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
                    <Link href={'/'}>Paket & Harga</Link>
                  </li>
                  <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                    <Link href={'/'}>Editor Kartu Digital</Link>
                  </li>
                </ul>
                <ul className="text-center lg:text-start">
                  <li className="text-sm font-semibold leading-4">
                    Perusahaan
                  </li>
                  <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                    <Link href={'/'}>Affiliate</Link>
                  </li>
                  <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                    <Link href={'/'}>Hubungi Kami</Link>
                  </li>
                  <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                    <Link href={'/'}>Tentang Kami</Link>
                  </li>
                </ul>
                <ul className="text-center lg:text-start">
                  <li className="text-sm font-semibold leading-4">Resources</li>
                  <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                    <Link href={'/'}>FAQs</Link>
                  </li>
                  <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                    <Link href={'/'}>Bantuan</Link>
                  </li>
                  <li className="mt-5 leading-5 opacity-75 transition-all duration-300 hover:opacity-100 lg:mt-7">
                    <Link href={'/'}>Pelayanan Pelanggan</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="just mx-24 hidden items-center justify-between lg:flex">
              <p className="opacity-50">
                &copy;2024 PT. Kartu Digital Indonesia. All rights reserved{' '}
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href={'/'}
                  className="opacity-50 transition-all duration-300 hover:opacity-100"
                >
                  Kententuan Layanan
                </Link>
                <Link
                  href={'/'}
                  className="opacity-50 transition-all duration-300 hover:opacity-100"
                >
                  Ketentuan Privasi
                </Link>
                <Link
                  href={'/'}
                  className="opacity-50 transition-all duration-300 hover:opacity-100"
                >
                  Cookies
                </Link>
              </div>
            </div>
            {/* {End Desktop Footer} */}

            {/* {Start Mobile Footer (Prajna)} */}
            <div className="mb-10 flex flex-wrap justify-between border-b-2 border-white border-opacity-50 pb-10 lg:hidden">
              <div className="mb-10 w-full">
                <div className="mb-8 flex items-center justify-center gap-3 text-2xl font-semibold">
                  <Image
                    src={'/svgs/logo-monochrome.svg'}
                    width={40}
                    height={40}
                    alt="logo-mono"
                  />
                  <span className={workSans.className}>Kartu Digital</span>
                </div>
              </div>
              <div className="mx-3 grid w-full grid-cols-2 justify-center gap-x-5 gap-y-10 align-middle md:gap-16">
                <ul className="text-center">
                  <li className="text-base font-semibold leading-4">
                    Platform
                  </li>
                  <li className=" mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                    <Link href={'/'}>Paket & Harga</Link>
                  </li>
                  <li className=" mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                    <Link href={'/'}>Editor Kartu Digital</Link>
                  </li>
                </ul>
                <ul className="text-center ">
                  <li className="text-base font-semibold leading-4">
                    Perusahaan
                  </li>
                  <li className=" mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                    <Link href={'/'}>Affiliate</Link>
                  </li>
                  <li className="mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                    <Link href={'/'}>Hubungi Kami</Link>
                  </li>
                  <li className=" mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                    <Link href={'/'}>Tentang Kami</Link>
                  </li>
                </ul>
                <ul className="text-center">
                  <li className="text-base font-semibold leading-4">
                    Resources
                  </li>
                  <li className="mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                    <Link href={'/'}>FAQs</Link>
                  </li>
                  <li className="mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                    <Link href={'/'}>Bantuan</Link>
                  </li>
                  <li className="mt-5 text-sm leading-5 opacity-75 transition-all duration-300 hover:opacity-100">
                    <Link href={'/'}>Pelayanan Pelanggan</Link>
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
                    <span className="text-center text-sm">
                      +62 800-1111-2222
                    </span>
                  </li>
                </ul>
              </div>
              {/* socials start */}
              <div className="mx-auto mt-10 flex justify-center gap-5 lg:justify-start">
                <Link
                  href={'/'}
                  className="flex items-center rounded-3xl bg-white bg-opacity-25 p-4"
                >
                  <InstagramIcon className="scale-150" />
                </Link>
                <Link
                  href={'/'}
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
                  href={'/'}
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
                  href={'/'}
                  className="text-xs font-medium opacity-50 transition-all duration-300 hover:opacity-100"
                >
                  Kententuan Layanan
                </Link>
                <Link
                  href={'/'}
                  className="text-xs font-medium opacity-50 transition-all duration-300 hover:opacity-100"
                >
                  Ketentuan Privasi
                </Link>
                <Link
                  href={'/'}
                  className="text-xs font-medium opacity-50 transition-all duration-300 hover:opacity-100"
                >
                  Cookies
                </Link>
              </div>
              <p className="text-xs font-medium tracking-wider opacity-50">
                &copy;2024 PT. Kartu Digital Indonesia. All rights reserved
              </p>
            </div>
            {/* {End Mobile Footer} */}
          </section>
        </footer>
      )}
      {/* {End Footer} */}
    </Fragment>
  );
}
