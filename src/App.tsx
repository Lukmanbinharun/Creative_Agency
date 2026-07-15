import MainLayout from "@/layouts/MainLayout";
import About1Page from "@/pages/About1Page";
import AiUgcPage from "@/pages/AiUgcPage";
import Archive2Page from "@/pages/Archive2Page";
import BrandingPage from "@/pages/BrandingPage";
import Contact1Page from "@/pages/Contact1Page";
import DigitalMarketingPage from "@/pages/DigitalMarketingPage";
import FaqsPage from "@/pages/FaqsPage";
import FreeConsultancyPage from "@/pages/FreeConsultancyPage";
import GraphicsDesignPage from "@/pages/GraphicsDesignPage";
import Home3Page from "@/pages/Home3Page";
import Home4Page from "@/pages/Home4Page";
import Home5Page from "@/pages/Home5Page";
import Home6Page from "@/pages/Home6Page";
import Home7Page from "@/pages/Home7Page";
import Home8Page from "@/pages/Home8Page";
import MotionGraphicsVideoPage from "@/pages/MotionGraphicsVideoPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PortfolioCinemaPage from "@/pages/PortfolioCinemaPage";
import PortfolioCurtainPage from "@/pages/PortfolioCurtainPage";
import PortfolioDetails5Page from "@/pages/PortfolioDetails5Page";
import PortfolioHorizontalPage from "@/pages/PortfolioHorizontalPage";
import PortfolioSplitPage from "@/pages/PortfolioSplitPage";
import PortfolioStackPage from "@/pages/PortfolioStackPage";
import PortfolioVistaPage from "@/pages/PortfolioVistaPage";
import PortfolioZstackPage from "@/pages/PortfolioZstackPage";
import PricingPage from "@/pages/PricingPage";
import SeoServicePage from "@/pages/SeoServicePage";
import Services2Page from "@/pages/Services2Page";
import TeamPage from "@/pages/TeamPage";
import WebDesignDevlopmentPage from "@/pages/Web-design-devlopment";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout headerStyle={8} footerStyle={8} />}>
        {" "}
        // change
        <Route path="/" element={<Home8Page />} />
        <Route path="/index-dark" element={<Home8Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={1} footerStyle={1} noFooter />}>
        {/* Portfolio Pages */}
        <Route
          path="/portfolio/motion-graphics-video"
          element={<PortfolioCurtainPage />}
        />
        <Route
          path="/portfolio/graphics-design"
          element={<PortfolioVistaPage />}
        />
        <Route path="/portfolio/ai-ugc" element={<PortfolioVistaPage />} />
      </Route>
      <Route element={<MainLayout headerStyle={1} footerStyle={2} />}>
        <Route
          path="/portfolio-details-5"
          element={<PortfolioDetails5Page />}
        />
      </Route>
      <Route element={<MainLayout headerStyle={2} footerStyle={1} noFooter />}>
        {/* Portfolio Pages */}
        <Route
          path="/portfolio/web-design-development"
          element={<PortfolioCinemaPage />}
        />
        <Route path="/portfolio/branding" element={<PortfolioSplitPage />} />
        <Route
          path="/portfolio/horizontal"
          element={<PortfolioHorizontalPage />}
        />
        <Route path="/portfolio-stack" element={<PortfolioStackPage />} />
        <Route path="/portfolio-zstack" element={<PortfolioZstackPage />} />
      </Route>
      <Route element={<MainLayout headerStyle={2} footerStyle={2} />}>
        <Route path="/about" element={<About1Page />} />
        <Route path="/blog" element={<Archive2Page />} />
        <Route path="/contact" element={<Contact1Page />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<Services2Page />} />
        <Route path="/team" element={<TeamPage />} />
        {/* Service Detail Pages */}
        <Route
          path="/services/web-design-development"
          element={<WebDesignDevlopmentPage />}
        />
        <Route path="/services/seo" element={<SeoServicePage />} />
        <Route path="/services/branding" element={<BrandingPage />} />
        <Route
          path="/services/graphics-design"
          element={<GraphicsDesignPage />}
        />
        <Route
          path="/services/motion-graphics-video"
          element={<MotionGraphicsVideoPage />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketingPage />}
        />
        <Route path="/services/ai-ugc" element={<AiUgcPage />} />
        <Route
          path="/services/free-consultancy"
          element={<FreeConsultancyPage />}
        />
      </Route>
      <Route element={<MainLayout headerStyle={3} footerStyle={3} />}>
        <Route path="/index-3" element={<Home3Page />} />
        <Route path="/index-3-dark" element={<Home3Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={4} footerStyle={4} />}>
        <Route path="/index-4" element={<Home4Page />} />
        <Route path="/index-4-dark" element={<Home4Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={5} footerStyle={5} />}>
        <Route path="/index-5" element={<Home5Page />} />
        <Route path="/index-5-dark" element={<Home5Page />} />
      </Route>
      <Route
        element={
          <MainLayout
            headerStyle={6}
            footerStyle={6}
            mainClass="bg-neutral-50"
          />
        }
      >
        <Route path="/index-6" element={<Home6Page />} />
        <Route path="/index-6-dark" element={<Home6Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={7} footerStyle={7} />}>
        <Route path="/index-7" element={<Home7Page />} />
        <Route path="/index-7-dark" element={<Home7Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={2} footerStyle={2} />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
