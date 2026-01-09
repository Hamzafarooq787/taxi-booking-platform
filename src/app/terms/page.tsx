import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0b0b0b]" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Terms & <span className="text-[#fff700]">Conditions</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 space-y-10">

          <TermCard
            number="1"
            title="Acceptance of Terms"
            text="By accessing and using TaxiGo's services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
          />

          <TermCard
            number="2"
            title="Service Description"
            text="TaxiGo provides a platform connecting passengers with transportation services. We facilitate the booking process but are not responsible for the actual transportation service provided by independent contractors."
          />

          <TermCard
            number="3"
            title="User Responsibilities"
            list={[
              "Provide accurate information when booking rides",
              "Maintain appropriate behavior during rides",
              "Pay for services as agreed",
              "Comply with all applicable laws and regulations",
            ]}
          />

          {/* ================= YELLOW HIGHLIGHT ================= */}
          <div className="rounded-3xl bg-[#fff700] p-10 text-black">
            <h3 className="text-2xl font-extrabold mb-4">
              4. Payment Terms
            </h3>
            <p className="text-black/80 leading-relaxed">
              Users agree to pay all fees and charges associated with their use
              of our services. Payments are processed securely through our
              platform using approved payment methods.
            </p>
          </div>

          <TermCard
            number="5"
            title="Cancellation Policy"
            text="Cancellation fees may apply based on the timing of the cancellation and other factors. Please refer to our cancellation policy for specific details."
          />

          <TermCard
            number="6"
            title="Liability"
            text="TaxiGo is not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services."
          />

          <TermCard
            number="7"
            title="Changes to Terms"
            text="We reserve the right to modify these terms at any time. Users will be notified of significant changes and continued use of our services constitutes acceptance of the modified terms."
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0b0b0b] py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Questions About Our <span className="text-[#fff700]">Terms?</span>
          </h2>
          <p className="text-white/70 mb-8">
            Contact our support team for clarification on any of our terms and
            conditions.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-xl bg-[#fff700] px-8 py-4 font-extrabold text-black hover:opacity-90 transition"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENT ================= */

function TermCard({
  number,
  title,
  text,
  list,
}: {
  number: string;
  title: string;
  text?: string;
  list?: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black p-8">
      <h3 className="text-xl font-extrabold mb-3">
        <span className="text-[#fff700]">{number}.</span> {title}
      </h3>

      {text && <p className="text-white/70 leading-relaxed">{text}</p>}

      {list && (
        <ul className="mt-4 space-y-2 text-white/70">
          {list.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
