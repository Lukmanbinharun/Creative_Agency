import { NavLink } from "react-router-dom";

type SimpleServiceDetailsProps = {
  title: string;
  eyebrow: string;
  intro: string;
  highlights: string[];
  processSteps: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function SimpleServiceDetails({
  title,
  eyebrow,
  intro,
  highlights,
  processSteps,
  ctaLabel = "Book a call",
  ctaHref = "/contact-1",
}: SimpleServiceDetailsProps) {
  return (
    <section className="container py-120">
      <div className="row g-5 align-items-start">
        <div className="col-lg-7">
          <span className="d-inline-block mb-4 text-uppercase fw-600 letter-spacing-2 neutral-600">
            {eyebrow}
          </span>
          <h1 className="fz-ds-2 fw-500 mb-4">{title}</h1>
          <p className="fz-font-2xl neutral-950 mb-4">{intro}</p>
          <div className="d-flex flex-wrap gap-3">
            <NavLink
              to={ctaHref}
              className="btn btn-dark rounded-pill px-4 py-3"
            >
              {ctaLabel}
            </NavLink>
            <NavLink
              to="/services"
              className="btn btn-outline-dark rounded-pill px-4 py-3"
            >
              View all services
            </NavLink>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="rounded-5 border border-neutral-200 bg-neutral-50 p-4 p-md-5">
            <h3 className="fz-font-xl fw-600 mb-3">What we include</h3>
            <ul className="list-unstyled mb-0">
              {highlights.map((item) => (
                <li key={item} className="mb-2 neutral-950">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="rounded-5 border border-neutral-200 p-4 p-md-5">
            <h2 className="fz-ds-3 fw-500 mb-4">How we work</h2>
            <div className="row g-4">
              {processSteps.map((step, index) => (
                <div key={step} className="col-md-4">
                  <div className="rounded-4 bg-neutral-50 p-4 h-100">
                    <div className="fw-700 mb-2">0{index + 1}</div>
                    <p className="mb-0 neutral-950">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
