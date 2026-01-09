export default function Testimonials() {
  const reviews = [
    {
      name: "William R.",
      role: "Business Traveller",
      text: "Excellent service. Everything was smooth from booking to drop-off. Perfect for working on the move.",
    },
    {
      name: "Andy K.",
      role: "Frequent Flyer",
      text: "Professional driver, clean vehicle, and clear pricing. Exactly what you want after a long flight.",
    },
    {
      name: "Pauline M.",
      role: "Family Travel",
      text: "Very helpful and courteous driver. Child seat was ready as requested. Highly recommended.",
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/2 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-[#fff700]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Trusted by <span className="text-[#fff700]">Thousands of Travellers</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Real reviews from customers who rely on Zappy Taxis across the UK.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 transition hover:-translate-y-1 hover:border-[#fff700]/40"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 leading-relaxed italic">
                “{r.text}”
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-bold text-white">{r.name}</div>
                <div className="text-sm text-white/60">{r.role}</div>
              </div>

              {/* bottom accent */}
              <div className="absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-[#fff700]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Trust footer */}
        <div className="mt-16 flex justify-center">
          <div className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80">
            Rated Excellent • Verified Customer Reviews
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ICON ---------------- */

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#fff700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15 9H22L17 14L19 21L12 17L5 21L7 14L2 9H9L12 2Z" />
    </svg>
  );
}
