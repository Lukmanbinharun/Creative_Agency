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

const ITEMS = [
  {
    title: "AI avatars",
    description:
      "We produce realistic short-form creators for ads and social content.",
  },
  {
    title: "UGC scripts",
    description:
      "We write hooks, scripts, and variations for fast test cycles.",
  },
  {
    title: "Localization",
    description:
      "We adapt visuals and language to fit different markets and audiences.",
  },
];

export default function Section3() {
  return (
    <section className="pb-120">
      <div className="container section-fix pt-100">
        <div className="row">
          <div className="col-lg-5">
            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
              <span className="text-uppercase">
                <span className="text-1">What we build</span>
                <span className="text-2">What we build</span>
              </span>
              <i>
                {ARROW_SVG}
                {ARROW_SVG}
              </i>
            </span>
            <h3 className="reveal-text mb-40">
              <RevealText>
                Content at scale without losing authenticity.
              </RevealText>
            </h3>
            <h6 className="fw-600 mb-0">
              We make it faster to produce multiple creative variants while
              still feeling human and credible.
            </h6>
          </div>
          <div className="col-xxl-6 col-lg-7 offset-xxl-1">
            <div className="row g-3">
              {ITEMS.map((item, i) => (
                <div key={i} className="col-12 col-md-6">
                  <div className="rounded-4 border border-neutral-200 p-4 h-100 bg-neutral-50">
                    <h5 className="mb-3">{item.title}</h5>
                    <p className="mb-0 fz-font-lg">{item.description}</p>
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
