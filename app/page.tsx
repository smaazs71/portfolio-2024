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

export default function Home({ searchParams }: any) {
  return (
    <main className="overflow-hidden padding-y">
      <Hero />

      <Portfolio searchParams={searchParams}  />

      <HireMe />

      <Journey />

      <Education />

      <Eminence />

      <Testimonial />

      <Contact />
    </main>
  );
}
