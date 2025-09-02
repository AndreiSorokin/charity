import ContactForm from "@/components/ContactForm";
import FadeInSection from "@/components/FadeInSection";
import Navbar from "@/components/Navbar";

export default function Home() {
   return (
    <main>
      <Navbar />

      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gray-100"
      >
        <h1 className="text-5xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg text-gray-600">Scroll down to explore 🚀</p>
      </section>

      <section id="about" className="h-screen flex items-center justify-center">
        <FadeInSection>
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-2 text-gray-700">
              We build fast, modern, SEO-friendly websites using Next.js.
            </p>
          </div>
        </FadeInSection>
      </section>

      <section
        id="services"
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <FadeInSection>
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="mt-2 text-gray-700">
              From design to deployment, we deliver high-quality solutions.
            </p>
          </div>
        </FadeInSection>
      </section>

      <section id="contact" className="min-h-screen p-8">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <ContactForm />
        </FadeInSection>
      </section>
    </main>
  );
}
