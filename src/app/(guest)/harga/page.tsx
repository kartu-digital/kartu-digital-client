//tio===================================================================
//caution
// Spaghetti code ada di mapping plans
import { Fragment } from 'react'; // ini sama persis kaya <></>
import { plans } from '@/data/harga/data'; //item plans yang berisi daftar daftar plan dalam bentuk array
import Image from 'next/image';

import { Button } from '@/components/ui/button'; //shadcn button

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'; // component accordion

import { Separator } from '@/components/ui/separator'; // shadcn separator

import { buttonVariants } from '@/components/ui/button'; //shadcn button

export default function page() {
  return (
    <Fragment>
      <div className=""></div>
      <div className="mx-4 mt-20 lg:mx-4 lg:mt-0 xl:mx-28">
        <h1 className="text-center text-4xl font-bold">
          Pilih Paket yang Tepat Untuk Anda
        </h1>
        <p className="mx-auto mt-8 text-center lg:w-3/5 xl:w-2/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
          arcu ut elit luctus, sed suscipit nisl iaculis.{' '}
        </p>

        {/* <div className="flex justify-center lg:hidden">md</div>
        <div className="hidden lg:flex lg:justify-center xl:hidden">lg</div>
        <div className="hidden xl:flex xl:justify-center 2xl:hidden">xl</div>
        <div className="3xl:hidden 3xl:hidden hidden 2xl:flex 2xl:justify-center">
          2xl
        </div>
        <div className="3xl:flex 3xl:justify-center hidden ">3xl</div> */}
        {/* desktop version */}
        {/* table div container */}

        <div className="mt-16 hidden h-full w-full lg:flex">
          {/* table mapping */}
          {plans.map((item, index) =>
            item.isHeader ? (
              // header table
              <div key={index} className="w-1/4">
                <div className="flex flex-col justify-center border-l border-r border-t px-8 lg:aspect-[16/16] xl:aspect-[16/15]">
                  <h1 className="text-2xl font-semibold 2xl:text-3xl 3xl:text-4xl">
                    {item.plan?.title}
                  </h1>
                  <p className="mt-2 text-sm text-Neutral700 2xl:text-base 3xl:text-lg">
                    {item.plan.description}
                  </p>
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.number_of_websites}
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.users_per_page}
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.premium_theme}
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.custom_domain}
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.designing_and_development}
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.customizable}
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.secure_data_storage}
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.email_support}
                </div>
                <div className="flex aspect-[4/1] items-center border-l border-r border-t pl-8 3xl:text-lg 3xl:font-medium">
                  {item.customer_support}
                </div>
                <div className="flex aspect-[4/1] items-center border pl-8 3xl:text-lg 3xl:font-medium">
                  {item.analytics_and_reporting}
                </div>
              </div>
            ) : (
              // content table
              <div key={index} className="w-1/4">
                <div className="flex flex-col justify-between border-r border-t p-4 lg:aspect-[16/16] xl:aspect-[16/15]">
                  <div className="flex justify-between">
                    <h1 className="text-xl font-bold 2xl:text-3xl">
                      {item.plan?.type}
                    </h1>
                    <p
                      className={`text-sm bg-${item.theme?.tagBgColor} text-${item.theme?.tagTextColor} flex items-center rounded-full px-4 font-bold`}
                    >
                      {item.plan?.tag}
                    </p>
                  </div>
                  <div
                    className={`mt-3 flex ${item.plan.price === 0 ? '' : 'gap-1'} items-center`}
                  >
                    <div className={`flex gap-2`}>
                      <div className="flex flex-col">
                        <div className="text-xl font-bold 3xl:text-3xl">
                          Rp{' '}
                        </div>
                        {/* a itu dummy */}
                        <div className="invisible">a</div>
                      </div>
                      <div className="flex items-center text-2xl font-bold xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
                        {item.plan?.price?.toLocaleString('id-ID')}
                      </div>
                    </div>
                    {item.plan.price === 0 ? (
                      <div className="text-2xl font-bold xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
                        ,00
                      </div>
                    ) : (
                      <div className="">
                        {/* a nya dummy */}
                        <div className="invisible text-xs">a{''}</div>
                        <div className="text-base font-semibold 2xl:text-lg">
                          / bulan
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm 2xl:text-base 3xl:text-lg">
                    {item.plan?.description}
                  </p>
                  <Button
                    variant={item.theme?.buttonVariant}
                    className="mt-7 h-1/4 w-full rounded-2xl text-lg 3xl:text-2xl"
                  >
                    {item.plan?.buttonMsg}
                  </Button>
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t 3xl:text-lg 3xl:font-medium">
                  {item.number_of_websites}
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t 3xl:text-lg 3xl:font-medium">
                  {item.users_per_page}
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t">
                  <Image
                    src="/svgs/checks_plan.svg"
                    alt="plan"
                    width={30}
                    height={30}
                    className={`${item.premium_theme ? '' : 'invisible'}`}
                  />
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t">
                  <Image
                    src="/svgs/checks_plan.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={`${item.custom_domain ? '' : 'invisible'}`}
                  />
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t">
                  <Image
                    src="/svgs/checks_plan.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={`${item.designing_and_development ? '' : 'invisible'}`}
                  />
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t">
                  <Image
                    src="/svgs/checks_plan.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={`${item.customizable ? '' : 'invisible'}`}
                  />
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t">
                  <Image
                    src="/svgs/checks_plan.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={`${item.secure_data_storage ? '' : 'invisible'}`}
                  />
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t">
                  <Image
                    src="/svgs/checks_plan.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={`${item.email_support ? '' : 'invisible'}`}
                  />
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-r border-t">
                  <Image
                    src="/svgs/checks_plan.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={`${item.customer_support ? '' : 'invisible'}`}
                  />
                </div>
                <div className="flex aspect-[4/1] items-center justify-center border-b border-r border-t">
                  <Image
                    src="/svgs/checks_plan.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={`${item.analytics_and_reporting ? '' : 'invisible'}`}
                  />
                </div>
              </div>
            ),
          )}
          {/* end of table mapping */}
        </div>

        {/* Mobile Mapping*/}
        <div className="mt-8 flex flex-col gap-5 lg:hidden">
          {plans.map(
            (item, index) =>
              !item.isHeader && (
                <div key={index} className="rounded-3xl border-2 border-black">
                  <div className="p-8">
                    <div className="text-left">
                      <h1 className="text-4xl font-bold">{item.plan?.type}</h1>
                      <p>{item.plan?.description}</p>
                      <div
                        className={`mt-5 flex ${item.plan.price === 0 ? '' : 'gap-1'} items-center`}
                      >
                        <div className={`flex gap-2`}>
                          <div className="text-2xl font-bold">Rp </div>

                          <div className="flex items-center text-4xl font-bold">
                            {item.plan?.price?.toLocaleString('id-ID')}
                          </div>
                        </div>
                        {item.plan.price === 0 ? (
                          <div className="text-4xl font-bold">,00</div>
                        ) : (
                          <div className="text-lg font-semibold">/ bulan</div>
                        )}
                      </div>
                      <Button
                        variant={item.theme?.buttonVariant}
                        className="mt-7 h-1/4 w-full max-w-96 rounded-2xl text-lg 3xl:text-2xl"
                      >
                        {item.plan?.buttonMsg}
                      </Button>
                    </div>
                  </div>
                  <Separator />

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="item-1"
                      className=" rounded-3xl px-5 lg:px-10 lg:py-3"
                    >
                      <AccordionTrigger className="text-lg">
                        Show Features
                      </AccordionTrigger>
                      <AccordionContent>
                        <div>{item.number_of_websites}</div>
                        <div>{item.users_per_page}</div>
                        <div>{item.premium_theme ? 'Premium Theme' : ''}</div>
                        <div>{item.custom_domain ? 'Custom Domain' : ''}</div>
                        <div>
                          {item.designing_and_development
                            ? 'Designing And Development'
                            : ''}
                        </div>
                        <div>{item.customizable ? 'Customizable' : ''}</div>
                        <div>
                          {item.secure_data_storage
                            ? 'Secure Data Storage'
                            : ''}
                        </div>
                        <div>{item.email_support ? 'Email Support' : ''}</div>
                        <div>
                          {item.customer_support ? 'Customer Support' : ''}
                        </div>
                        <div>
                          {item.analytics_and_reporting
                            ? 'Analytics and Reporting'
                            : ''}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ),
          )}
        </div>
        <h1 className="mt-28 text-center text-4xl font-bold">
          Butuh Paket Khusus? Hubungi Kami
        </h1>
        <p className="mt-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
          arcu ut elit luctus, sed suscipit nisl iaculis.{' '}
        </p>
        <div className="mb-32 mt-8 flex justify-center">
          <Button size={'global_button'} variant={'black'}>
            Hubungi Kami
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
//==================================================================================
