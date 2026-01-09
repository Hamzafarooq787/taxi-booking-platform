import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#fff700]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-10">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-[#fff700] mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li><FooterLink href="/about-us">About Us</FooterLink></li>
              <li><FooterLink href="/services">Our Services</FooterLink></li>
              <li><FooterLink href="/book-a-taxi">Book a Taxi</FooterLink></li>
              <li><FooterLink href="/contact-us">Contact Us</FooterLink></li>
              <li><FooterLink href="/faqs">FAQs</FooterLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-[#fff700] mb-4">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>Airport Transfers</li>
              <li>Corporate Travel</li>
              <li>Event Transportation</li>
              <li>City Tours</li>
              <li>Intercity Travel</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-[#fff700] mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li><FooterLink href="/terms">Terms & Conditions</FooterLink></li>
              <li><FooterLink href="/privacy-policy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/cookie-policy">Cookie Policy</FooterLink></li>
              <li><FooterLink href="/licenses">Licenses</FooterLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#fff700] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <IconMail />
                <span>info@zappytaxis.com</span>
              </li>
              <li className="flex gap-3">
                <IconPhone />
                <span>+44 330 133 2199</span>
              </li>
              <li className="flex gap-3">
                <IconLocation />
                <span>
                  Altotts Lane, Castleford, WF10 5PZ
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2 text-lg font-extrabold">
            Zappy<span className="text-[#fff700]">Taxis</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <SocialIcon />
            <SocialIcon />
            <SocialIcon />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-white/50">
          © 2026 – ZappyTaxis.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-[#fff700] transition"
    >
      {children}
    </Link>
  );
}

/* ---------------- Icons ---------------- */

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff700">
      <path d="M4 4h16v16H4z" strokeWidth="2" />
      <path d="M4 4l8 8 8-8" strokeWidth="2" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff700">
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.7 4.2a2 2 0 0 1-.55 1.73L9.91 12a16 16 0 0 0 6.09 6.09l1.35-1.23a2 2 0 0 1 1.73-.55l4.2.7a2 2 0 0 1 1.72 2z" strokeWidth="2" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff700">
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z" strokeWidth="2" />
      <circle cx="12" cy="11" r="3" strokeWidth="2" />
    </svg>
  );
}

function SocialIcon() {
  return (
    <div className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-[#fff700] hover:text-[#fff700] transition cursor-pointer">
      <span className="text-xs">●</span>
    </div>
  );
}
