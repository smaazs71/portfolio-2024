import React from "react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-white padding-x min-h-screen p-nav-scroll flex items-center justify-center"
    >
      <div className="a">
        <div className="mb hd ca">
          <div className="bc df">
            <div className="vc fa sg gb">
              <span className="fh _g mh kb ta"> Creative Portfolios </span>
              <h2 className="dh jh wg wj kk oa">Recent Works</h2>
              <p className="eh _g lh">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="bc df">
            <div className="portfolio-buttons mb hd id kd _a">
              <button
                className="sm:font-semibold vg _j kb if pf ck ta td lh active"
                data-filter="*"
              >
                All
              </button>
              <button
                className="sm:font-semibold vg _j kb if pf ck ta td lh ri vi"
                data-filter=".web"
              >
                Web Design
              </button>
              <button
                className="sm:font-semibold vg _j kb if pf ck ta td lh ri vi"
                data-filter=".graphics"
              >
                Graphics
              </button>
              <button
                className="sm:font-semibold vg _j kb if pf ck ta td lh ri vi"
                data-filter=".app"
              >
                App
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-container mb kd ga">
          <div className="bc zm/12 df">
            <div
              className="items-wrapper mb hd kd ca"
              style={{ position: "relative", height: "833.656px" }}
            >
              <div
                className="bc ek/2 df item web app"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="_a">
                  <div className="e dj ma od wh vd">
                    <img
                      src="images/portfolio-01.jpg"
                      alt="image"
                      className="bc"
                    />
                    <div className="d bc qb f g pe xe mb id kd rh b ij ej ai">
                      <a
                        href="images/portfolio/portfolio-01.jpg"
                        className="glightbox hc ub mb id kd pe kh td"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-6">
                    <a
                      href="portfolio-details.html"
                      className="fh jh ui zg lb ua"
                    >
                      {" "}
                      Startup landing page{" "}
                    </a>
                  </h3>
                  <p className="eh ug lh">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae dolor ultrices libero.
                  </p>
                </div>
              </div>
              <div
                className="bc ek/2 df item graphics web"
                style={{ position: "absolute", left: "475px", top: 0 }}
              >
                <div className="_a">
                  <div className="e dj ma od wh vd">
                    <img
                      src="images/portfolio-02.jpg"
                      alt="image"
                      className="bc"
                    />
                    <div className="d bc qb f g pe xe mb id kd rh b ij ej ai">
                      <a
                        href="images/portfolio/portfolio-02.jpg"
                        className="glightbox hc ub mb id kd pe kh td"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-6">
                    <a
                      href="portfolio-details.html"
                      className="fh jh ui zg lb ua"
                    >
                      {" "}
                      Job portal landing page{" "}
                    </a>
                  </h3>
                  <p className="eh ug lh">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae dolor ultrices libero.
                  </p>
                </div>
              </div>
              <div
                className="bc ek/2 df item app"
                style={{ position: "absolute", left: 0, top: "416.828px" }}
              >
                <div className="_a">
                  <div className="e dj ma od wh vd">
                    <img
                      src="images/portfolio-03.jpg"
                      alt="image"
                      className="bc"
                    />
                    <div className="d bc qb f g pe xe mb id kd rh b ij ej ai">
                      <a
                        href="images/portfolio/portfolio-03.jpg"
                        className="glightbox hc ub mb id kd pe kh td"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-6">
                    <a
                      href="portfolio-details.html"
                      className="fh jh ui zg lb ua"
                    >
                      {" "}
                      SaaS landing page{" "}
                    </a>
                  </h3>
                  <p className="eh ug lh">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae dolor ultrices libero.
                  </p>
                </div>
              </div>
              <div
                className="bc ek/2 df item graphics web"
                style={{
                  position: "absolute",
                  left: "475px",
                  top: "416.828px",
                }}
              >
                <div className="_a">
                  <div className="e dj ma od wh vd">
                    <img
                      src="images/portfolio-04.jpg"
                      alt="image"
                      className="bc"
                    />
                    <div className="d bc qb f g pe xe mb id kd rh b ij ej ai">
                      <a
                        href="images/portfolio/portfolio-04.jpg"
                        className="glightbox hc ub mb id kd pe kh td"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-6">
                    <a
                      href="portfolio-details.html"
                      className="fh jh ui zg lb ua"
                    >
                      {" "}
                      Business &amp; corporate template{" "}
                    </a>
                  </h3>
                  <p className="eh ug lh">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae dolor ultrices libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
