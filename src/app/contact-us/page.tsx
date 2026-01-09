import React from 'react'

function ContacusPage() {
  return (
    <div>{/* ================= CONTACT HERO ================= */}
<section className="bg-black py-24">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <span className="inline-block mb-4 rounded-full bg-[#fff700]/10 px-4 py-1 text-xs font-semibold text-[#fff700]">
      Contact Zappy Taxis
    </span>
    <h1 className="text-4xl md:text-5xl font-extrabold text-white">
      Get in Touch
    </h1>
    <p className="mt-4 text-white/70 max-w-2xl mx-auto">
      Have questions? We’d love to hear from you. Send us a message and our team
      will respond as soon as possible.
    </p>
  </div>
</section>

{/* ================= CONTACT SECTION ================= */}
<section className="bg-neutral-950 py-20">
  <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-2">

    {/* ===== LEFT INFO ===== */}
    <div className="rounded-3xl border border-white/10 bg-black p-8 md:p-10">
      <h2 className="text-2xl font-bold text-white mb-8">
        Contact Information
      </h2>

      <div className="space-y-6 text-white/80">
        <div>
          <p className="text-sm text-[#fff700] font-semibold mb-1">Visit Us</p>
          <p>
            Althots Lane<br />
            Castleford<br />
            WF10 5PZ
          </p>
        </div>

        <div>
          <p className="text-sm text-[#fff700] font-semibold mb-1">Email Us</p>
          <p>info@zappytaxis.com</p>
        </div>

        <div>
          <p className="text-sm text-[#fff700] font-semibold mb-1">Call Us</p>
          <p>+44 330 133 2199</p>
        </div>
      </div>

      {/* Social */}
      <div className="mt-10">
        <p className="text-sm text-[#fff700] font-semibold mb-3">Follow Us</p>
        <div className="flex gap-4">
          <span className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#fff700] hover:text-[#fff700] cursor-pointer">F</span>
          <span className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#fff700] hover:text-[#fff700] cursor-pointer">T</span>
          <span className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#fff700] hover:text-[#fff700] cursor-pointer">I</span>
          <span className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#fff700] hover:text-[#fff700] cursor-pointer">L</span>
        </div>
      </div>
    </div>

    {/* ===== FORM ===== */}
    <div className="rounded-3xl border border-white/10 bg-black p-8 md:p-10">
      <h2 className="text-2xl font-bold text-white mb-8">
        Send Us a Message
      </h2>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fff700] outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fff700] outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fff700] outline-none"
        />

        <textarea
          rows={4}
          placeholder="How can we help you?"
          className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fff700] outline-none"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#fff700] py-3 text-sm font-bold text-black hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

{/* ================= MAP ================= */}
<section className="bg-black py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="overflow-hidden rounded-3xl border border-white/10">
      {/* map iframe same rahe */}
    </div>
  </div>
</section>

{/* ================= FAQ ================= */}
<section className="bg-neutral-950 py-20">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-extrabold text-white mb-4">
      Frequently Asked Questions
    </h2>
    <p className="text-white/60 mb-10">
      Find answers to common questions about our service
    </p>

    <div className="space-y-4 text-left">
      {[
        "How do I book a taxi on Zappy Taxis?",
        "Do I need to call a taxi?",
        "Is it cheaper to book a taxi in advance?",
        "Can I cancel my booking at any time?",
        "Are car seats available?"
      ].map((q, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/10 bg-black px-6 py-4 text-white hover:border-[#fff700] transition"
        >
          {q}
        </div>
      ))}
    </div>
  </div>
</section>
</div>
  )
}

export default ContacusPage