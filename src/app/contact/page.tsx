import FadeInSection from "@/components/FadeInSection";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen p-8">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <ContactForm />
      </FadeInSection>
    </section>
  );
}