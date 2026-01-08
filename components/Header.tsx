import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-semibold">Zappy Taxis</Link>
        <nav className="space-x-6 text-sm">
          <Link href="/airport-transfers">Airport Transfers</Link>
          <Link href="/services">Services</Link>
          <Link href="/booking">Book Now</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
