import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/seo-services-details/Section1";
import Section3 from "@/shared/sections/seo-services-details/Section3";
import Section4 from "@/shared/sections/seo-services-details/Section4";
import Section5 from "@/shared/sections/seo-services-details/Section5";

export default function SeoServicePage() {
  return (
    <>
      <PageMeta title="Orisa - SEO" />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
