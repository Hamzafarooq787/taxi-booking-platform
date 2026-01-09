import Link from "next/link";

export default function VehicleTypes() {
  const cars = [
    {
      title: "MPV / Minivan",
      desc: "Perfect for families and group travel",
      meta: "Up to 6 Passengers • 4 Luggage",
    },
    {
      title: "Executive",
      desc: "Comfort and professionalism combined",
      meta: "Up to 4 Passengers • 2 Luggage",
    },
    {
      title: "Luxury",
      desc: "Premium travel experience",
      meta: "Up to 4 Passengers • 2 Luggage",
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#fff700]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Choose the <span className="text-[#fff700]">Right Vehicle</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            From family trips to executive travel, we have the perfect vehicle
            for every journey.
          </p>
        </div>

        {/* Fleet cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-[#fff700]/40"
            >
              {/* image placeholder */}
              <div className="relative mb-6 h-36 rounded-xl bg-gradient-to-br from-[#111] to-black border border-white/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm">
                  Vehicle Image
                </div>
              </div>

              {/* content */}
              <h3 className="text-lg font-bold text-white">
                {car.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {car.desc}
              </p>
              <p className="mt-4 text-xs text-white/60">
                {car.meta}
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  href="/book-a-taxi"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#fff700] hover:underline"
                >
                  Get Quotes →
                </Link>
              </div>

              {/* bottom accent */}
              <div className="absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-[#fff700]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
