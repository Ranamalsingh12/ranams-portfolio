import { siteConfig } from "@/lib/data";

export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    url: siteConfig.url,
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
      siteConfig.twitter,
      siteConfig.hashnode,
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Chandigarh Group of Colleges",
    },
    worksFor: {
      "@type": "Organization",
      name: "Hinduja Renewables",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "AI Engineering",
      "System Design",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        type="application/ld+json"
      />
    </>
  );
}
