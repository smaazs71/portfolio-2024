import {
  Contact,
  Education,
  Eminence,
  Hero,
  HireMe,
  Journey,
  Portfolio,
  Testimonial,
} from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <Portfolio />

      <HireMe />

      <Journey />

      <Education />

      <Eminence />

      <Testimonial />

      <Contact />
    </main>
  );
}
