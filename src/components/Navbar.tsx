"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white shadow z-50"
    >
      <ul className="flex justify-center gap-8 py-4">
        {navLinks.map((link) => (
          <motion.li
            key={link.href}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={link.href}>{link.name}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
