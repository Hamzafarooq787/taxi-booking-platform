import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-40 top-0 h-[140%] w-[45%] rotate-12 bg-[#fff700]/10" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-[#fff700]">Services</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70">
            Premium transportation solutions designed for comfort, reliability
            and flexibility across the UK.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2">
          <ServiceCard
            title="City Rides"
            desc="Quick and comfortable rides within the city"
            points={[
              "Professional drivers",
              "Clean, air-conditioned vehicles",
              "Multiple payment options",
              "Fast response times",
            ]}
          />

          <ServiceCard
            title="Airport Transfers"
            desc="Reliable airport pickup and drop-off services"
            points={[
              "Flight tracking",
              "Meet & greet service",
              "Luggage assistance",
              "Fixed pricing",
            ]}
          />

          <ServiceCard
            title="Business Travel"
            desc="Corporate transportation solutions"
            points={[
              "Corporate accounts",
              "Priority bookings",
              "Executive vehicles",
              "Flexible billing options",
            ]}
          />

          <ServiceCard
            title="Group Travel"
            desc="Comfortable rides for groups and events"
            points={[
              "Multiple vehicle sizes",
              "Event coordination",
              "Group discounts",
              "Flexible scheduling",
            ]}
          />
        </div>
      </section>

      {/* ADDITIONAL FEATURES */}
      <section className="bg-[#0b0b0b] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-14">
            Additional <span className="text-[#fff700]">Features</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="24/7 Availability"
              desc="Round-the-clock service for your convenience"
            />
            <FeatureCard
              title="Route Optimization"
              desc="Smart routing for faster and smoother journeys"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold">
          Ready to <span className="text-[#fff700]">Experience Our Service?</span>
        </h2>
        <p className="mt-4 text-white/70">
          Book your ride now and enjoy premium taxi services nationwide.
        </p>

        <Link
          href="/book-a-taxi"
          className="inline-flex mt-8 rounded-xl bg-[#fff700] px-8 py-4 font-extrabold text-black hover:opacity-90 transition"
        >
          Book Now
        </Link>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

interface ServiceCardProps {
  title: string;
  desc: string;
  points: string[];
}

function ServiceCard({ title, desc, points }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-[#fff700]/40 transition">
      <h3 className="text-xl font-extrabold text-[#fff700]">
        {title}
      </h3>
      <p className="mt-2 text-white/70 text-sm">
        {desc}
      </p>

      <ul className="mt-6 space-y-3 text-sm">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="text-[#fff700]">●</span>
            <span className="text-white/80">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  desc: string;
}

function FeatureCard({ title, desc }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-8">
      <h3 className="font-bold text-[#fff700] text-lg">
        {title}
      </h3>
      <p className="mt-2 text-white/70 text-sm">
        {desc}
      </p>
    </div>
  );
}
