import RevealText from "@/shared/effects/RevealText";
import { NavLink } from "react-router-dom";

const ARROW_SVG = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
  </svg>
);

const SERVICES: ServiceItem[] = [
  {
    title: "Web Design & Development",
    link: "/web-design-development",
    description:
      "Conversion-focused websites and web apps built with modern stacks. From a 5-page marketing site to a full SaaS dashboard, we design and engineer for speed, scalability, and a flawless user experience across every device.",
    listLeft: [
      "UI/UX Design",
      "Next.js / React / Vue",
      "Shopify / Webflow / Headless CMS",
    ],
    listRight: [
      "E-commerce",
      "Web app development",
      "Performance optimization",
    ],
    image: "/assets/imgs/pages/img-30.webp",
    itemClass: "pb-40",
  },
  {
    title: "SEO",
    link: "/seo",
    description:
      "Technical, on-page, and content SEO that compounds over time. We audit your site, fix what's broken, build content that earns links, and track every keyword that matters — so you see traffic grow month over month, not just spikes.",
    listLeft: [
      "Technical SEO audit",
      "Keyword strategy",
      "On-page optimization",
    ],
    listRight: [
      "Content roadmap",
      "Link building",
      "Local SEO / Google Business Profile",
    ],
    image: "/assets/imgs/pages/img-31.webp",
    itemClass: "pb-40",
  },
  {
    title: "Branding",
    link: "/branding",
    description:
      "Identities that are impossible to ignore. We dig into your positioning, design a visual language that fits, and document it so your team can apply it consistently for years.",
    listLeft: [
      "Brand strategy & positioning",
      "Logo & visual identity",
      "Color & typography system",
    ],
    listRight: ["Brand guidelines", "Naming", "Brand voice & messaging"],
    image: "/assets/imgs/pages/img-32.webp",
    itemClass: "pb-40",
    badge: "Popular",
  },
  {
    title: "Graphics Design",
    link: "/graphics-design",
    description:
      "Design that captures attention and communicates clearly. From social creatives to packaging, pitch decks to print collateral — design that captures attention and communicates your message with clarity.",
    listLeft: [
      "Social media creatives",
      "Print & packaging",
      "Pitch decks & sales collateral",
    ],
    listRight: [
      "Illustration & iconography",
      "Ad creatives",
      "Event & signage design",
    ],
    image: "/assets/imgs/pages/img-33.webp",
    itemClass: "pb-50",
  },
  {
    title: "Motion Graphics & Video",
    link: "/motion-graphics-video",
    description:
      "Stories told in seconds, not paragraphs. Explainer videos, product demos, and scroll-stopping motion design that tells your story in seconds.",
    listLeft: ["Explainer videos", "Product demos", "Social reels & shorts"],
    listRight: ["3D motion graphics", "Logo animations", "Sound design"],
    image: "/assets/imgs/pages/img-33.webp",
    itemClass: "pb-50",
  },
  {
    title: "Digital Marketing",
    link: "/digital-marketing",
    description:
      "Full-funnel campaigns built for measurable ROI. We don't just run ads; we build a growth engine that compounds.",
    listLeft: [
      "Paid ads (Meta, Google, TikTok)",
      "Social media management",
      "Email marketing & automation",
    ],
    listRight: [
      "Conversion tracking & analytics",
      "A/B testing framework",
      "Monthly growth reporting",
    ],
    image: "/assets/imgs/pages/img-30.webp",
    itemClass: "pb-40",
  },
  {
    title: "AI UGC",
    link: "/ai-ugc",
    description:
      "Authentic-looking UGC, scaled infinitely with AI. Perfect for ad testing, social content, and brands that need volume without sacrificing quality.",
    listLeft: [
      "AI avatars & voice cloning",
      "Script + visual production",
      "A/B variant generation",
    ],
    listRight: [
      "Multi-language localization",
      "Ad-ready formats",
      "Weekly content batches",
    ],
    image: "/assets/imgs/pages/img-31.webp",
    itemClass: "pb-50",
    badge: "Popular",
  },
  {
    title: "Free Consultancy",
    link: "/free-consultancy",
    description:
      "A 30-min strategy call. No strings, just clarity. We will audit your digital presence, identify quick wins and bigger opportunities, and share a clear roadmap.",
    listLeft: [
      "Digital presence audit",
      "Competitor analysis",
      "Quick-win identification",
    ],
    listRight: [
      "Custom roadmap",
      "Tool & stack recommendations",
      "30-minute video call",
    ],
    image: "/assets/imgs/pages/img-32.webp",
    itemClass: "pb-50",
  },
];

type ServiceItem = {
  title: string;
  link: string;
  description: string;
  listLeft: string[];
  listRight: string[];
  image: string;
  itemClass: string;
  badge?: string;
};

type Section4Props = {
  className?: string;
};

export default function Section4({ className }: Section4Props) {
  return (
    <div className={`container-2200 ${className ?? ""}`.trim()}>
      <section className="at-service-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="at-service-subtitle-wrap at-about-border d-flex justify-content-between gap-3 mb-50">
                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                  <span className="text-uppercase">
                    <span className="text-1">Things we offer</span>
                    <span className="text-2">Things we offer</span>
                  </span>
                  <i>
                    {ARROW_SVG}
                    {ARROW_SVG}
                  </i>
                </span>
                <span className="fs-font-md fw-500 text-decoration-underline">
                  © Since 2012
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-section vertical-section position-relative">
          <div className="wrapper">
            {SERVICES.map((service, index) => (
              <div key={index} className="item">
                <div
                  className={`container bg-neutral-50 pt-20 ${service.itemClass}`}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="d-flex flex-column justify-content-between h-100 py-4 px-2">
                        <h1 className="fz-ds-1 fw-500 text-scale-anim-2 pb-xxl-5 pb-4">
                          <NavLink to={service.link}>
                            {service.title}
                            {service.badge ? (
                              <span className="ms-2 fs-6 fw-600 text-uppercase align-middle">
                                {service.badge}
                              </span>
                            ) : null}
                          </NavLink>
                        </h1>
                        <div className="d-xxl-flex align-items-end">
                          <p className="fz-font-2xl neutral-950 reveal-text pe-xxl-5 mb-3">
                            <RevealText>{service.description}</RevealText>
                          </p>
                          <div className="d-flex flex-column flex-md-row flex-xxl-column justify-content-between ps-xxl-5 ps-3">
                            <ul className="text-nowrap neutral-950">
                              {service.listLeft.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            <ul className="text-nowrap neutral-950">
                              {service.listRight.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="rounded-4 overflow-hidden">
                        <img
                          src={service.image}
                          alt="orisa"
                          width={600}
                          height={400}
                          className="img-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
