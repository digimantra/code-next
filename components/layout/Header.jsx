"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhoneVolume } from "react-icons/fa";

export default function Header() {
  const [navStyle, setNavStyle] = React.useState({});

  const handleClickOpen = () => {
    setNavStyle({ right: '0' });
    document.body.style.overflow = 'hidden';
  };

  const handleClickClose = () => {
    setNavStyle({ right: '-100%' });
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <header className="font-raleway">
        <section className="bg-[#228256] text-[#fff] py-[8px] max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:z-50">
          <div className="container max-w-[1600px] px-[10px] lg:px-[80px] mx-auto">
            <div className="text-right">
              <ul className="inline-flex flex-wrap">
                <li className="flex gap-x-[30px]">
                  <span className="flex gap-x-[10px] items-center"><FaPhoneVolume /> Contact Us</span>
                  <a href="">+91-123-456-7890</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-[15px] relative max-lg:mt-[42px] bg-[#000D0D]">
          <div className="container max-w-[1600px] px-[10px] lg:px-[80px] mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full max-w-[250px] max-lg:max-w-[150px]">
                <Link href="/">
                  <img className="" src="/images/voixapp-web-logo.svg" alt="VOIXAPP AI" />
                </Link>
              </div>

              <div className="ml-auto max-lg:hidden">
                <a href="" className="inline-block bg-[#228256] text-[#fff] rounded-[50px] py-[8px] px-[15px] text-[16px] leading-[24px] tracking-[0.28px]">
                  Enroll Now
                </a>
              </div>

              <button className="absolute z-10 right-[15px] top-[50%] translate-y-[-50%] lg:hidden" onClick={handleClickOpen}>
                <span className="w-[30px] h-[1px] bg-[#fff] block"></span>
                <span className="w-[33px] h-[1px] bg-[#fff] block my-[6px]"></span>
                <span className="w-[26px] h-[1px] bg-[#fff] block"></span>
              </button>
            </div>
          </div>
        </section>

        <nav className="lg:border-t border-solid border-[#f6f6f6] shadow-[0_4px_12px_0_rgba(0,0,0,.03)] max-lg:fixed max-lg:right-[-100%] max-lg:top-[42px] max-lg:bottom-0 max-lg:z-50 max-lg:w-full max-lg:bg-[rgba(0,0,0,0.4)] transition-all" style={navStyle}>
          <div className="container max-w-[1600px] px-[30px] lg:px-[80px] ml-auto lg:mx-auto max-lg:max-w-[300px] max-lg:bg-[#228256] max-lg:h-full">
            <div className="lg:hidden py-[20px] flex border-b border-solid border-[rgba(255,255,255,0.3)] mb-[20px]">
              <button type="button" className="" onClick={handleClickClose}>
                <span className="w-[30px] h-[2px] bg-[#fff] block rotate-45"></span>
                <span className="w-[30px] h-[2px] bg-[#fff] block -rotate-45 mt-[-2px]"></span>
              </button>

              <a href="" className="inline-block bg-[#fff] text-[#228256] rounded-[30px] py-[6px] px-[15px] text-[14px] leading-[24px] tracking-[0.28px] font-[600] ml-auto">
                Sign up
              </a>
            </div>

            <ul className="lg:font-[700] lg:flex lg:flex-wrap lg:justify-center lg:gap-x-[50px] text-[18px] leading-[19px] [&>li]:py-[16px] [&>li>a]:transition [&>li>a]:text-[#323848] [&>li>a:hover]:text-[#00b26a] max-lg:[&>li>a]:text-white">
              <li><Link href="/">Home</Link></li>
              <li><Link href="">Courses</Link></li>
              <li><Link href="">About Us</Link></li>
              <li><Link href="">Admissions</Link></li>
              <li><Link href="">Resources</Link></li>
              <li><Link href="/blog">Contact</Link></li>
            </ul>
          </div>
        </nav>

      </header>
    </>
  );
}
