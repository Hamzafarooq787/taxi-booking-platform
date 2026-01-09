import Link from "next/link";
/* Reusable components */
import React from "react";

export default function BookTaxiPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Yellow accent */}
        <div className="absolute -right-40 top-0 h-[140%] w-[45%] rotate-12 bg-[#fff700]/10" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Book Your Taxi <br />
              <span className="text-[#fff700]">Online in Seconds</span>
            </h1>

            <p className="mt-5 text-white/75 max-w-xl">
              Compare fares from over <strong>1,000 licensed taxi providers</strong>
              across the UK. Transparent pricing, no hidden charges.
            </p>

            {/* FEATURES */}
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-[#fff700]">●</span>
                UK-wide service in 550+ towns & cities
              </li>
              <li className="flex gap-3">
                <span className="text-[#fff700]">●</span>
                Book up to 12 months in advance
              </li>
              <li className="flex gap-3">
                <span className="text-[#fff700]">●</span>
                Free cancellations on most bookings
              </li>
              <li className="flex gap-3">
                <span className="text-[#fff700]">●</span>
                24/7 customer support
              </li>
            </ul>
          </div>

          {/* BOOKING CARD */}
          <div className="rounded-3xl bg-white text-slate-900 shadow-2xl">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-extrabold mb-6">Book a Taxi</h2>

              <div className="space-y-4">
                <Input label="From location" placeholder="Pickup, postcode, venue" />
                <Input label="To location" placeholder="Destination, postcode" />

                <div className="grid grid-cols-2 gap-3">
                  <Input type="date" label="Date" />
                  <Input type="time" label="Time" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Select label="Passengers" options={[1,2,3,4,5,6,7,8]} />
                  <Select label="Luggage" options={["None","1","2","3","4+"]} />
                </div>

                <Link
                  href="/quotes"
                  className="mt-4 flex items-center justify-center rounded-xl bg-[#fff700] px-6 py-4 font-extrabold text-black hover:opacity-90 transition"
                >
                  Get Quotes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-[#0b0b0b] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Trusted by <span className="text-[#fff700]">Millions of Travellers</span>
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Compare and book with confidence from verified UK taxi operators.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <TrustCard title="Free cancellations" desc="Plans change? Cancel easily." />
            <TrustCard title="Licensed providers" desc="Fully vetted taxi companies." />
            <TrustCard title="Best prices guaranteed" desc="Compare & save instantly." />
          </div>
        </div>
      </section>
    </main>
  );
}


/* TYPES */
interface InputProps {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

interface SelectProps {
  label: string;
  options: Array<string | number>;
}

interface TrustCardProps {
  title: string;
  desc: string;
}

/* COMPONENTS */
function Input({ label, placeholder, type = "text" }: InputProps) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-black"
      />
    </div>
  );
}

function Select({ label, options }: SelectProps) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600">
        {label}
      </label>
      <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-black">
        {options.map((o) => (
          <option key={o.toString()} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function TrustCard({ title, desc }: TrustCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-6">
      <h3 className="font-bold text-[#fff700]">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}


