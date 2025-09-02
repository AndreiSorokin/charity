import FadeInSection from '@/components/FadeInSection'
import React from 'react'

export default function page() {
  return (
    <main className="p-8">
      <FadeInSection>
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-2 text-gray-700">
          We are a team dedicated to building great websites.
        </p>
      </FadeInSection>
    </main>
  )
}
