import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";
import { NavLink } from "react-router-dom";

type Item = { to: string; label: string };

const about_links1: Item[] = [
  { to: "/services", label: "Service" },
  { to: "/team", label: "Team" },
  { to: "/pricing", label: "Pricing" },
];

const about_links2: Item[] = [
  { to: "/about", label: "About" },
  { to: "/faqs", label: "FAQs" },
];

const our_crafts_links1: Item[] = [
  {
    to: "/portfolio/web-design-development",
    label: "Web Design & Development",
  },
  { to: "/portfolio/branding", label: "Brand Identity" },
  { to: "/portfolio/graphics-design", label: "Graphic Design & Development" },
];

const our_crafts_links2: Item[] = [
  { to: "/portfolio/motion-graphics-video", label: "Motion & Video" },
  { to: "/portfolio/ai-ugc", label: "AI UGC" },
];

function MenuLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : undefined)}
    >
      {children}
    </NavLink>
  );
}

function MegaColumn({ items }: { items: Item[] }) {
  return (
    <div className="at-megamenu-box">
      <ul>
        {items.map((it) => (
          <li key={it.label}>
            <MenuLink to={it.to}>{it.label}</MenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

export default function MainMenu() {
  return (
    <MainMenuRootList>
      <li className="has-dropdown">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <LinkSwap label="About Us" />
        </a>
        <div className="at-submenu submenu at-megamenu">
          <div className="row">
            <div className="col-xl-5">
              <MegaColumn items={about_links1} />
            </div>
            <div className="col-xl-5">
              <MegaColumn items={about_links2} />
            </div>
          </div>
        </div>
      </li>
      <li className="has-dropdown">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <LinkSwap label="Our Crafts" />
        </a>
        <div className="at-submenu submenu at-megamenu">
          <div className="row">
            <div className="col-xl-5">
              <MegaColumn items={our_crafts_links1} />
            </div>
            <div className="col-xl-5">
              <MegaColumn items={our_crafts_links2} />
            </div>
          </div>
        </div>
      </li>
      <li className="with-out-dropdown">
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <LinkSwap label="Blog" />
        </NavLink>
      </li>
      <li className="with-out-dropdown">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <LinkSwap label="Contact" />
        </NavLink>
      </li>
    </MainMenuRootList>
  );
}
