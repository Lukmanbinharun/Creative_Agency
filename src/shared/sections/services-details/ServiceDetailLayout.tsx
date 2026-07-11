import { NavLink } from "react-router-dom";

type ServiceDetailLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  tags?: string[];
  services: string[];
  approachSteps: Array<{ title: string; description: string }>;
  outcomes: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ServiceDetailLayout({
  eyebrow,
  title,
  intro,
  tags = [],
  services,
  approachSteps,
  outcomes,
  ctaLabel = "Book a call",
  ctaHref = "/contact-1",
}: ServiceDetailLayoutProps) {
  return (
    <section className="container py-5 py-md-5 py-lg-6 pt-140 pb-120">
      <div className="rounded-5 border border-neutral-200 bg-neutral-50 p-4 p-md-5 mb-4">
        <span className="d-inline-block mb-4 text-uppercase fw-600 letter-spacing-2 neutral-600">
          {eyebrow}
        </span>
        <h1 className="fz-ds-2 fw-500 mb-4">{title}</h1>
        <p className="fz-font-2xl neutral-950 mb-4">{intro}</p>

        {tags.length > 0 ? (
          <div className="d-flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 rounded-pill border border-neutral-200 bg-white fz-font-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="d-flex flex-wrap gap-3">
          <NavLink
            to={ctaHref}
            className="btn btn-dark rounded-pill px-4 py-3 w-100 w-sm-auto"
          >
            {ctaLabel}
          </NavLink>
          <NavLink
            to="/services"
            className="btn btn-outline-dark rounded-pill px-4 py-3 w-100 w-sm-auto"
          >
            View all services
          </NavLink>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="rounded-5 border border-neutral-200 p-4 p-md-5 h-100">
            <h3 className="fz-ds-4 fw-500 mb-4">What we do</h3>
            <div className="row g-3">
              {services.map((item, index) => (
                <div key={item} className="col-12 col-md-6">
                  <div className="rounded-4 bg-neutral-50 p-4 h-100">
                    <div className="fw-700 mb-2">0{index + 1}</div>
                    <p className="mb-0 neutral-950">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="rounded-5 border border-neutral-200 p-4 p-md-5 h-100">
            <h3 className="fz-ds-4 fw-500 mb-4">How we work</h3>
            <div className="d-flex flex-column gap-3">
              {approachSteps.map((step, index) => (
                <div key={step.title} className="rounded-4 bg-neutral-50 p-4">
                  <div className="fw-700 mb-2">0{index + 1}</div>
                  <h6 className="fw-600 mb-2">{step.title}</h6>
                  <p className="mb-0 neutral-950">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="rounded-5 border border-neutral-200 p-4 p-md-5">
            <h3 className="fz-ds-4 fw-500 mb-4">What you get</h3>
            <div className="row g-3">
              {outcomes.map((item) => (
                <div key={item} className="col-12 col-md-4">
                  <div className="rounded-4 border border-neutral-200 p-4 h-100">
                    <p className="mb-0 neutral-950">{item}</p>
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
