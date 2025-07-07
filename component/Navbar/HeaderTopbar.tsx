"use client";
import React, { useRef } from "react";
import {
  Enveloped,
  Facebook,
  Instagram,
  Linkdin,
  Location,
  Twiter,
  World,
} from "../icons";
import Logo from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";
import useGsapAnim from "@/hooks/useGsapAnimation";

const HeaderTopbar = () => {
  const topHeaderRef = useRef<HTMLElement | null>(null);
  useGsapAnim(topHeaderRef, "slideFadeDown");

  return (
    <header
      ref={topHeaderRef}
      className="mt-5 text-[var(--textColor)]"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row items-center md:justify-between gap-4 rounded-lg px-7 md:px-6 py-3 bg-[linear-gradient(to_right,rgba(42,48,61,0.15),rgba(0,35,75,0.15),rgba(42,48,61,0.15))]
 shadow-[inset_0_20px_46px_#f1f3ff,inset_2.25px_-7px_44px_#f1f3ff]"
        >
          {/* Left Side */}
          <address className="not-italic flex flex-col sm:flex-row items-center gap-8 text-sm">
            <div className="relative flex items-center gap-2 after:absolute after:top-0 after:-right-4 after:w-px after:h-full after:bg-[rgba(42,48,61,0.15)]">
              <Location />
              <span>15th Street, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Enveloped />
              <a href="mailto:support@gamil.com" className="hover:underline">
                support@gamil.com
              </a>
            </div>
          </address>

          {/* Logo */}
          <div className="max-w-[200px]">
            <Link href="/" aria-label="Go to homepage">
              <Image src={Logo} alt="Company Logo" width={200} height={50} />
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <div className="relative flex items-center gap-2 after:absolute after:top-0 after:-right-5 after:w-px after:h-full after:bg-[rgba(42,48,61,0.15)]">
              <World />
              <label htmlFor="language-select" className="sr-only">
                Choose Language
              </label>
              <select
                id="language-select"
                name="language"
                className="text-sm bg-transparent border-none focus:outline-none cursor-pointer"
                aria-label="Select language"
              >
                <option value="English">English</option>
                <option value="Bangla">Bangla</option>
              </select>
            </div>
            <nav
              className="flex items-center gap-4"
              aria-label="Social Media Links"
            >
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[var(--primaryColor)] cursor-pointer"
              >
                <Facebook />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[var(--primaryColor)] cursor-pointer"
              >
                <Twiter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[var(--primaryColor)] cursor-pointer"
              >
                <Instagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[var(--primaryColor)] cursor-pointer"
              >
                <Linkdin />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTopbar;
