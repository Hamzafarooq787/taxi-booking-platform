export default function PrivacyPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative py-28 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#fff700]/10" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Privacy <span className="text-[#fff700]">Policy</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-gradient-to-b from-black via-black to-[#1a1a00]">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <PolicyCard title="1. Information We Collect">
            <ul className="list-disc pl-5 space-y-2">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Location data for ride services</li>
              <li>Payment information</li>
              <li>Device and usage information</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="2. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process payments</li>
              <li>Communicate with you</li>
              <li>Ensure safety and security</li>
              <li>Comply with legal requirements</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="3. Data Security">
            <p>
              We use industry-standard security measures including encryption,
              secure servers, and regular audits to protect your data.
            </p>
          </PolicyCard>

          <PolicyCard title="4. Data Sharing">
            <ul className="list-disc pl-5 space-y-2">
              <li>Trusted service providers</li>
              <li>Legal authorities when required</li>
              <li>Partners with your consent</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="5. Your Rights">
            <ul className="list-disc pl-5 space-y-2">
              <li>Access your personal information</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Opt out of marketing</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="6. Cookies & Tracking">
            <p>
              Cookies help us improve performance and analyze traffic. You can
              control cookie preferences in your browser settings.
            </p>
          </PolicyCard>

          <PolicyCard title="7. Policy Updates">
            <p>
              This policy may be updated occasionally. Continued use of our
              services means you accept the latest version.
            </p>
          </PolicyCard>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold">
            Privacy <span className="text-[#fff700]">Concerns?</span>
          </h2>
          <p className="mt-3 text-white/70">
            Questions about privacy or data usage? Our team is here to help.
          </p>

          <button className="mt-8 rounded-xl bg-[#fff700] px-10 py-4 font-bold text-black shadow-lg shadow-[#fff700]/30 hover:scale-105 hover:opacity-90 transition">
            Contact Privacy Team
          </button>
        </div>
      </section>

    </main>
  );
}

/* ================= REUSABLE CARD ================= */

function PolicyCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121212] via-black to-[#2a2600] p-8 border border-[#fff700]/20 shadow-lg hover:shadow-[#fff700]/20 transition">

      <div className="absolute inset-0 bg-[#fff700]/5 blur-3xl opacity-40 pointer-events-none" />

      <h3 className="relative text-xl font-extrabold mb-4 flex items-center gap-3">
        <span className="text-[#fff700] text-2xl">◆</span>
        {title}
      </h3>

      <div className="relative text-white/70 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
