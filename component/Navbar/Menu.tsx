"use client";
import Link from "next/link";
import { ArrowDown, Bars, Cart, SearchIcon } from "../icons";
import PrimaryButton from "../ui/PrimaryButton";
import { useEffect, useRef } from "react";
import { stickyNavScrollReveal } from "@/utils/gsapAnimation";

const Menu = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    stickyNavScrollReveal(navbarRef.current);
  }, []);

  return (
    <nav
      ref={navbarRef}
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-white shadow transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between border-b border-[var(--headingColor)]/15 py-4">
          {/* Left Icons */}
          <div className="flex items-center gap-6 text-[20px] text-[var(--textColor)]">
            <div className="relative pr-4 after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-[rgba(0,35,75,0.15)]">
              <Bars aria-label="Open menu" />
            </div>
            <div className="relative pr-4 after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-[rgba(0,35,75,0.15)]">
              <Cart aria-label="View cart" />
            </div>
            <div>
              <SearchIcon aria-label="Search" />
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden md:block">
            <ul className="flex gap-5 text-[16px] font-medium text-[var(--textColor)]">
              {["Home", "About", "Services", "Pages", "News", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative group cursor-pointer font-[var(--primary-font)]"
                  >
                    <span className="group-hover:text-[var(--primaryColor)] transition-colors duration-300">
                      {item}
                    </span>
                    <ArrowDown
                      className="inline-block ml-1 text-xs opacity-0 group-hover:opacity-100 group-hover:text-[var(--primaryColor)] transition-all duration-300"
                      aria-hidden="true"
                    />
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CTA Button */}
          <div>
            <Link href="/get-quote" aria-label="Get a free quote">
              <PrimaryButton>Get a free quote</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
