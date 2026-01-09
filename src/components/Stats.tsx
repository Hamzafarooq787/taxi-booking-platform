export default function Stats() {
  const stats = [
    { value: "10+", label: "Years in Business" },
    { value: "2M+", label: "Passengers Served" },
    { value: "1,000+", label: "Cab Operators" },
    { value: "550+", label: "UK Cities Covered" },
    { value: "99%", label: "UK Stations" },
    { value: "95%", label: "Major UK Airports" },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#fff700]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Zappy Taxis <span className="text-[#fff700]">in Numbers</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Trusted by millions of travellers across the UK every year.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-center transition hover:-translate-y-1 hover:border-[#fff700]/40"
            >
              {/* value */}
              <div className="text-3xl font-extrabold text-[#fff700] tracking-tight">
                {s.value}
              </div>

              {/* label */}
              <div className="mt-3 text-sm text-white/70 leading-snug">
                {s.label}
              </div>

              {/* bottom accent line */}
              <div className="absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-[#fff700]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
