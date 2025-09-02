import FadeInSection from "@/components/FadeInSection";

export default function AboutPage() {
  return (
    <section className="h-screen flex items-center justify-center">
      <FadeInSection>
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-2 text-gray-700">
            We build fast, modern, SEO-friendly websites using Next.js.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
