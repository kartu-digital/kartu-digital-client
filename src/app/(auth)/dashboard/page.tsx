'use client';
import Image from 'next/image';
import PillButton from '@/components/PillButton';
import HoveredImage from '@/components/HoveredImage';
import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Dashboard() {
  const [active, setActive] = useState<string | null>('Untuk Anda');

  const handleClick = (buttonName: string) => {
    setActive(buttonName);
  };

  let nama = 'John Doe';

  return (
    <>
      <div className="container mx-auto">
        <div className="relative">
          <Image
            className="mx-auto w-[90rem] rounded-2xl"
            alt="Frame"
            src="/svgs/dashboard_frame.svg"
          />
          <p className="text-md absolute left-1/2 top-4 w-full -translate-x-1/2  text-center font-semibold text-white lg:top-6 lg:text-xl xl:top-12">
            Halo {nama},
          </p>
          <h2 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
            Mari Ciptakan Sesuatu yang Luar Biasa
          </h2>
          <div className="pill absolute left-1/2 flex h-[3.8rem] w-[32rem] -translate-x-1/2 -translate-y-[1.9rem] justify-center overflow-hidden rounded-[42.5px] bg-white drop-shadow-md lg:h-[5.2rem] lg:w-[38rem] lg:-translate-y-[2.6rem]">
            <PillButton
              text="Untuk Anda"
              logo="Star"
              isActive={active === 'Untuk Anda'}
              onClick={() => handleClick('Untuk Anda')}
            />
            <PillButton
              text="Undangan Digital"
              logo="Cursor"
              isActive={active === 'Undangan Digital'}
              onClick={() => handleClick('Undangan Digital')}
            />
            <PillButton
              text="Kartu Digital"
              logo="Paper"
              isActive={active === 'Kartu Digital'}
              onClick={() => handleClick('Kartu Digital')}
            />
            <PillButton
              text="Link in Bio"
              logo="Profile"
              isActive={active === 'Link in Bio'}
              onClick={() => handleClick('Link in Bio')}
            />
            <PillButton
              text="One-Page"
              logo="Globe"
              isActive={active === 'One-Page'}
              onClick={() => handleClick('One-Page')}
            />
          </div>
        </div>

        <div className=" mx-auto mt-24 w-[90rem] font-bold">
          {active === 'Untuk Anda' && (
            <>
              <h2>Featured Templates</h2>
              <div className="flex w-[90rem] justify-between bg-red-400"></div>
              <h2>Situs Anda</h2>
            </>
          )}
          {active === 'Undangan Digital' && (
            <>
              <h2>Undangan Digital Pernikahan</h2>
              <h2>Undangan Digital Ulang Tahun</h2>
              <h2>Undangan Digital Khitan</h2>
              <h2>Undangan Digital Seminar</h2>
            </>
          )}
          {active === 'Kartu Digital' && (
            <>
              <h2>Kartu Digital Personal</h2>
              <h2>Kartu Digital Bisnis</h2>
            </>
          )}
          {active === 'Link in Bio' && (
            <>
              <h2>Link in Bio Social Media</h2>
              <h2>Link in Bio Small Business</h2>
              <h2>Link in Bio Influencer</h2>
            </>
          )}
          {active === 'One-Page' && (
            <>
              <h2>One-Page Profile</h2>
              <h2>One-Page Landing</h2>
              <h2>One-Page Form</h2>
              <h2>One-Page Portofolio</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
}
