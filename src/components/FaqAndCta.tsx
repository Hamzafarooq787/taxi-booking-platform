"use client";

import { useState } from "react";
import Link from "next/link";

export default function FaqAndCta() {
  const faqs = [
    {
      q: "How do I book a taxi on Zappy Taxis?",
      a: "Simply enter your pickup and destination, compare quotes from trusted providers, and book instantly online.",
    },
    {
      q: "Do I need to call a taxi?",
      a: "No calls needed. Everything is handled online with instant confirmation.",
    },
    {
      q: "Is it cheaper to book in advance?",
      a: "Yes. Pre-booking often gives you access to fixed, lower prices and guaranteed availability.",
    },
    {
      q: "Can I cancel my booking anytime?",
      a: "Most bookings include free cancellation up to a certain time before pickup.",
    },
    {
      q: "Are car seats available?",
      a: "Yes. You can request child or booster seats during the booking process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* subtle yellow glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#fff700]/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked <span className="text-[#fff700]">Questions</span>
          </h2>
          <p className="mt-4 text-white/70">
            Everything you need to know before booking your ride.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white">
                    {item.q}
                  </span>

                  <span
                    className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#fff700]/40 text-[#fff700] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm text-white/70 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black to-[#111] border border-[#fff700]/30 p-12 text-center shadow-2xl shadow-black/40">
          {/* glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#fff700]/15 blur-3xl" />
          </div>

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Ready to Book Your Taxi?
            </h3>
            <p className="text-white/75 mb-8 max-w-xl mx-auto">
              Compare prices from licensed taxi providers across the UK and book
              your ride in seconds.
            </p>

            <Link
              href="/book-a-taxi"
              className="inline-flex items-center justify-center rounded-xl bg-[#fff700] px-10 py-4 font-extrabold text-black hover:opacity-90 transition"
            >
              Book a Taxi Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
