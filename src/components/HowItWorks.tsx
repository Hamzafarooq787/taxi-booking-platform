export default function HowItWorks() {
  const steps = [
    {
      title: "Set Location",
      desc: "Choose your pickup and destination using our smart location interface.",
      icon: LocationIcon,
    },
    {
      title: "Select Ride",
      desc: "Compare prices from trusted providers and choose the best option.",
      icon: CarIcon,
    },
    {
      title: "Enjoy Ride",
      desc: "Sit back and relax with licensed drivers and fixed pricing.",
      icon: StarIcon,
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#fff700]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            How It <span className="text-[#fff700]">Works</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Booking a taxi with Zappy Taxis is fast, simple, and transparent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 text-center transition hover:-translate-y-1 hover:border-[#fff700]/40"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#fff700]/40 bg-black shadow-lg shadow-[#fff700]/20">
                <step.icon />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {step.desc}
              </p>

              {/* bottom accent */}
              <div className="absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-[#fff700]/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ICONS ================= */

function LocationIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff700"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff700"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 16H9m10 0h1a2 2 0 0 0 2-2v-3a3 3 0 0 0-3-3l-1.5-4.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 8a3 3 0 0 0-3 3v3a2 2 0 0 0 2 2h1" />
      <circle cx="7" cy="16" r="2" />
      <circle cx="17" cy="16" r="2" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff700"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
    </svg>
  );
}
