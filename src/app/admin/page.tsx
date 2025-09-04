import React from 'react'
import FadeInSection from '@/components/FadeInSection';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function adminPage() {

const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <section className="min-h-screen p-8">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-6 text-center">Admin</h2>
      </FadeInSection>
   </section>
  )
}
