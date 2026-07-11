import RevealText from "@/shared/effects/RevealText";

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

export default function Section5() {
  return (
    <section className="pt-120 pb-120 border-bottom-100">
      <div className="container">
        <div className="rounded-5 border border-neutral-200 p-4 p-md-5 bg-neutral-50">
          <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
            <span className="text-uppercase">
              <span className="text-1">What you&apos;ll receive</span>
              <span className="text-2">What you&apos;ll receive</span>
            </span>
            <i>
              {ARROW_SVG}
              {ARROW_SVG}
            </i>
          </span>
          <h4 className="reveal-text mb-4 fw-600">
            <RevealText>
              More discoverability, more qualified traffic, and a stronger
              digital foundation.
            </RevealText>
          </h4>
          <div className="row g-3">
            {[
              "A clear SEO roadmap for your site",
              "Better visibility for the right keywords",
              "Higher quality traffic and stronger conversion potential",
            ].map((item) => (
              <div key={item} className="col-md-4">
                <div className="rounded-4 border border-neutral-200 p-4 h-100 bg-white">
                  <p className="mb-0 neutral-950">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
