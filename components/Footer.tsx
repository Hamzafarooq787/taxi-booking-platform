export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto p-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Zappy Taxis. All rights reserved.
      </div>
    </footer>
  );
}
