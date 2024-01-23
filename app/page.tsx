import {
  Contact,
  Education,
  Eminence,
  Hero,
  Journey,
  Portfolio,
  Testimonial,
} from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden padding-y">
      <Hero />

      {/* <Portfolio /> */}

      <Journey />

      <Education />

      <Eminence />

      <Testimonial />

      <Contact />
    </main>
  );
}
