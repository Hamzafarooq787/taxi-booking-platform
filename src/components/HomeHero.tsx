import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* yellow cinematic accents */}
        <div className="absolute -right-32 top-0 h-[160%] w-[35%] rotate-12 bg-[#fff700]/15" />
        <div className="absolute -right-44 top-16 h-[160%] w-[18%] rotate-12 bg-[#fff700]/25" />

        {/* soft glow */}
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#fff700]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="pt-20 md:pt-28 pb-32 md:pb-44">
          {/* Heading */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Pre-Book Taxis{" "}
              <span className="block text-[#fff700]">Online</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl">
              Compare prices from licensed taxi providers across the UK.
              Transparent pricing, professional drivers, and instant
              confirmation.
            </p>

            {/* Trust row (brand-safe) */}
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
              <TrustBadge text="Rated Excellent" />
              <TrustBadge text="1,000+ Taxi Operators" />
              <TrustBadge text="550+ UK Cities" />
            </div>
          </div>

          {/* Booking bar */}
          <div className="mt-12">
            <BookingBar />
          </div>

          {/* Benefits */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            <Benefit
              title="Free cancellations"
              desc="Cancel easily with flexible refund options"
            />
            <Benefit
              title="Licensed providers"
              desc="Only verified taxi operators nationwide"
            />
            <Benefit
              title="Wait time included"
              desc="Up to 45 minutes at major airports"
            />
            <Benefit
              title="24/7 customer support"
              desc="Help available whenever you need it"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- SUB COMPONENTS ----------------- */

function TrustBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-white/80">
      {text}
    </span>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm">
      <div className="font-semibold text-white">{title}</div>
      <div className="mt-1 text-white/70">{desc}</div>
    </div>
  );
}

function BookingBar() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-2xl shadow-black/40">
      <div className="p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <Field label="From" placeholder="Pickup, postcode, venue..." span="md:col-span-3" />
          <Field label="To" placeholder="Destination, postcode..." span="md:col-span-3" />

          <Field type="date" label="Date" span="md:col-span-2" />
          <Field type="time" label="Time" span="md:col-span-2" />

          <div className="md:col-span-1">
            <label className="text-xs font-semibold text-white/80">
              Passengers
            </label>
            <select className="mt-1 w-full rounded-xl bg-white px-3 py-3 text-sm text-slate-900 outline-none">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-1">
            <Link
              href="/book-a-taxi"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#fff700] px-4 py-3 text-sm font-extrabold text-black hover:opacity-90 transition"
            >
              Get Quotes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  span,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  span: string;
}) {
  return (
    <div className={span}>
      <label className="text-xs font-semibold text-white/80">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl bg-white px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
      />
    </div>
  );
}
