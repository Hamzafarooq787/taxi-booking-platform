"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black text-white shadow-lg shadow-black/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-wide"
          >
            <span>
              Zappy<span className="text-[#fff700]">Taxis</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/book-a-taxi">Book a Taxi</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/terms">Terms</NavLink>
            <NavLink href="/privacy">Privacy</NavLink>

            <a
              href="https://citieszappytaxis.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Your City
            </a>
            <NavLink href="/contact-us">Contact Us</NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/auth"
              className="hidden sm:inline-block text-sm text-white/80 hover:text-[#fff700] transition"
            >
              Login / Signup
            </Link>

            <Link
              href="/book-now"
              className="hidden sm:inline-flex items-center rounded-xl bg-[#fff700] px-5 py-2.5 text-sm font-extrabold text-black hover:opacity-90 transition"
            >
              Book Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/20 p-2"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition ${open ? "visible" : "invisible"
          }`}
      >
        {/* overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/70 transition-opacity ${open ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black border-l border-white/10 p-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-extrabold">
              Zappy<span className="text-[#fff700]">Taxis</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border border-white/20 p-2"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-col gap-5 text-base font-medium">
            <MobileLink href="/" onClick={setOpen}>
              Home
            </MobileLink>
            <MobileLink href="/about-us" onClick={setOpen}>
              About Us
            </MobileLink>
            <MobileLink href="/book-a-taxi" onClick={setOpen}>
              Book a Taxi
            </MobileLink>
            <MobileLink href="/services" onClick={setOpen}>
              Services
            </MobileLink>
            <MobileLink href="/terms" onClick={setOpen}>
              Terms
            </MobileLink>
            <MobileLink href="/privacy" onClick={setOpen}>
              Privecy
            </MobileLink>
            <a
              href="https://citieszappytaxis.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mobile-link"
            >
              Find Your City
            </a>


            <MobileLink href="/contact-us" onClick={setOpen}>
              Contact Us
            </MobileLink>
          </nav>

          <div className="mt-10 border-t border-white/10 pt-6">
            <Link
              href="/auth"
              className="block text-white/80 mb-4"
              onClick={() => setOpen(false)}
            >
              Login / Signup
            </Link>

            <Link
              href="/book-a-taxi"
              className="block rounded-xl bg-[#fff700] px-6 py-3 text-center font-extrabold text-black"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Helpers ---------- */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-white/80 hover:text-[#fff700] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#fff700] after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => onClick(false)}
      className="text-white/90 hover:text-[#fff700] transition"
    >
      {children}
    </Link>
  );
}

/* ---------- Icons ---------- */

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff">
      <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff">
      <path d="M6 6l12 12M18 6l-12 12" strokeWidth="2" />
    </svg>
  );
}
