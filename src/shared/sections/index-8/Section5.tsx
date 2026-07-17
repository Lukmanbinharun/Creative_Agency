import Marquee from "react-fast-marquee";

// type Brand = {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
// };



export default function Section3() {
  return (
    <section className="at-brand-area at_fade_anim">
      <div className="carouselTicker carouselTicker-right position-relative z-1">
        <Marquee
          speed={100}
          // speed={40}
          direction="right"
          pauseOnHover={false}
          gradient={false}
          className="carouselTicker__marquee"
        >
          <ul
            className="carouselTicker__list scroll-move-right"
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              overflow: "visible",
              gap: "0 1rem",
              // gap: "0 2rem",
            }}
          >
            {[
              "NorthPeak",
              "Bloom Co.",
              "Vertex",
              "Lumen",
              "Quantix",
              "Maison",
              "Orbit",
              "Strata",
            ].map((brand, i) => (
              <li
                key={i}
                className="carouselTicker__item"
                // style={{ margin: "0 0.75rem", float: "none" }}
                style={{ margin: "0 1.5rem", float: "none" }}
              >
                <div className="brand-item dark-mode-invert fz-font-lg">
                  <span
                    key={brand}
                    className="fs-5 fw-bolder "
                  >
                    {brand}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  );
}
