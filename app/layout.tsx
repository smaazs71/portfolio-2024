import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uchiha Mugiwara",
  generator: 'Next.js',
  applicationName: 'Uchiha Mugiwara',
  referrer: 'origin-when-cross-origin',
  description:
    "Uchiha Mugiwara, a NextJS-based portfolio web app by M. Maaz Shaikh, serves as a dynamic showcase of my professional journey for potential clients and companies.",
  authors: { name: "M. Maaz shaikh", url: "https://m-maaz.vercel.app" },
  creator: "M. Maaz shaikh",
  publisher: "M. Maaz shaikh",
  keywords: [
    "Portfolio",
    "Web App",
    "NextJS",
    "M. Maaz Shaikh",
    "Uchiha Mugiwara",
    "Web Development",
    "Full Stack",
    "MERN Stack",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "UI/UX Design",
    "Frontend",
    "Backend",
    "Responsive Design",
    "Technology",
    "Software Development",
    "Information Technology",
    "IT Solutions",
    "Web Applications",
    "Portfolio Showcase",
    "Software Engineer",
    "Web Developer",
    "IT Consultant",
    "Freelancer",
    "Project Manager",
    "Computer Science",
    "Software Engineering",
    "MERN Stack Certification",
    "University Degree",
    "Git",
    "GitHub",
    "VSCode",
    "JIRA",
    "Agile Development",
    "API Integration",
    "Database Design",
    "HTML",
    "CSS",
    "RESTful API",
    "Web Development Certification",
    "E-commerce Websites",
    "Corporate Portals",
    "Blog Platforms",
    "Custom Web Applications",
    "Client Collaboration",
    "Requirement Analysis",
    "Solution Delivery",
    "Client Satisfaction",
  ],
  metadataBase: new URL('https://m-maaz.vercel.app'),
  openGraph: {
    title: "Uchiha Mugiwara - M. Maaz Shaikh's Portfolio",
    description:
      "Explore the professional journey of M. Maaz Shaikh through Uchiha Mugiwara, a dynamic portfolio web app built on NextJS.",
    images: "/display-icons/Uchiha-Mugiwara-logos-black.png",
    url: "https://m-maaz.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uchiha Mugiwara - M. Maaz Shaikh's Portfolio",
    description:
      "Explore the professional journey of M. Maaz Shaikh through Uchiha Mugiwara, a dynamic portfolio web app built on NextJS.",
    images: "/display-icons/Uchiha-Mugiwara-logos-black.png",
    site: "@Mr_M_Maaz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
