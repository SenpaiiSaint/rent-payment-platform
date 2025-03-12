'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 p-4 text-white flex space-x-4">
      <Link 
        href="/" 
        className={`${pathname === "/" ? "underline font-bold" : ""}`}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Home
      </Link>
      <Link 
        href="/payments" 
        className={`${pathname === "/payments" ? "underline font-bold" : ""}`}
        aria-current={pathname === "/payments" ? "page" : undefined}
      >
        Payments
      </Link>
      <Link 
        href="/profile" 
        className={`${pathname === "/profile" ? "underline font-bold" : ""}`}
        aria-current={pathname === "/profile" ? "page" : undefined}
      >
        Profile
      </Link>
    </nav>
  );
}
