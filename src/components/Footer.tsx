import React from 'react';
import Link from "next/link";


export default function Footer() {
  return (
    <div>
      <Link href="/login" className="text-xl font-bold">
        Admin
      </Link>
    </div>
  )
}
