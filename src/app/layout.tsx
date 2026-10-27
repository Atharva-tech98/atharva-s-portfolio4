import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva Naikodi | Mechanical Engineering & Automotive Portfolio",
  description:
    "Explore the engineering portfolio of Atharva Naikodi, a Mechanical Engineering student at MIT ADT University, Pune, showcasing automotive industry experience, mechanical design projects, CAD modelling, manufacturing exposure, and robotics interests.",
  keywords: [
    "Atharva Naikodi",
    "Atharva Sanjay Naikodi",
    "Mechanical Engineering Portfolio",
    "Automotive Engineer",
    "MIT ADT University",
    "Tata Motors Intern",
    "Homologation",
    "Mercedes-Benz Silver Star Workshop",
    "CAD Modelling",
    "Fusion 360",
    "Solid Edge",
    "Robotics",
    "Manufacturing",
  ],
  authors: [{ name: "Atharva Naikodi" }],
  openGraph: {
    title: "Atharva Naikodi | Mechanical Engineering & Automotive Portfolio",
    description:
      "Mechanical Engineering student at MIT ADT University, Pune with hands-on experience at Tata Motors, Mercedes-Benz Silver Star, and Ankur Enterprises.",
    type: "website",
    url: "https://www.linkedin.com/in/atharva-naikodi-621635252/",
    images: [
      {
        url: "/images/atharva-profile.jpg",
        width: 800,
        height: 1000,
        alt: "Atharva Naikodi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#06080d" />
      </head>
      <body className="min-h-screen bg-dark-950 text-slate-100 antialiased blueprint-grid">
        {children}
      </body>
    </html>
  );
}
