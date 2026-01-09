'use client';

import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-black text-white">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2000&q=80"
            alt="Zappy Taxis city transport"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            About <span className="text-[#fff700]">Zappy Taxis</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-lg">
            Revolutionizing urban transportation with premium service and
            cutting-edge technology.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-[#fff700]">Our Story</h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Founded in 2020, Zappy Taxis emerged from a vision to transform
              urban transportation. We identified an opportunity to combine
              premium service with modern technology, creating a taxi platform
              that truly puts customers first.
            </p>
            <p className="text-white/70 leading-relaxed">
              Today, we proudly serve thousands of customers every day,
              delivering safe, reliable, and comfortable journeys across major
              UK cities.
            </p>
          </div>

          <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80"
              alt="Taxi service city"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS WITH YELLOW BG ================= */}
      <section className="py-16" style={{ backgroundColor: '#fff700' }}>
        <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
          <div className="rounded-2xl bg-black p-8">
            <div className="text-3xl font-extrabold text-[#fff700]">50K+</div>
            <div className="mt-2 text-sm text-white/70">Happy Customers</div>
          </div>
          <div className="rounded-2xl bg-black p-8">
            <div className="text-3xl font-extrabold text-[#fff700]">1000+</div>
            <div className="mt-2 text-sm text-white/70">Premium Vehicles</div>
          </div>
          <div className="rounded-2xl bg-black p-8">
            <div className="text-3xl font-extrabold text-[#fff700]">2000+</div>
            <div className="mt-2 text-sm text-white/70">Expert Drivers</div>
          </div>
          <div className="rounded-2xl bg-black p-8">
            <div className="text-3xl font-extrabold text-[#fff700]">20+</div>
            <div className="mt-2 text-sm text-white/70">Cities Covered</div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-14 text-[#fff700]">
            Meet Our Team
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
              <div className="relative h-56">
                <Image 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" 
                  alt="John Smith" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-[#fff700]">John Smith</h3>
                <p className="text-sm text-white/70">CEO & Founder</p>
                <p className="mt-3 text-sm text-white/60">20+ years of experience in transportation and technology.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
              <div className="relative h-56">
                <Image 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80" 
                  alt="Sarah Johnson" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-[#fff700]">Sarah Johnson</h3>
                <p className="text-sm text-white/70">Operations Director</p>
                <p className="mt-3 text-sm text-white/60">Expert in fleet management and customer experience.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
              <div className="relative h-56">
                <Image 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" 
                  alt="Michael Chen" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
              <div className="p-6">
                <h3 className="font-extrabold text-[#fff700]">Michael Chen</h3>
                <p className="text-sm text-white/70">Technology Head</p>
                <p className="mt-3 text-sm text-white/60">Leading innovation in ride-hailing technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VALUES ================= */}
      <section className="py-20" style={{ backgroundColor: '#fff700' }}>
        <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-black p-8">
            <h3 className="text-xl font-extrabold mb-4 text-[#fff700]">
              Our Mission
            </h3>
            <p className="text-white/70 leading-relaxed">
              To provide safe, reliable, and comfortable transportation services
              that exceed customer expectations while contributing to
              sustainable urban mobility.
            </p>
          </div>

          <div className="rounded-2xl bg-black p-8">
            <h3 className="text-xl font-extrabold mb-4 text-[#fff700]">
              Our Values
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>• Customer Safety First</li>
              <li>• Professional Excellence</li>
              <li>• Innovation & Technology</li>
              <li>• Environmental Responsibility</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}