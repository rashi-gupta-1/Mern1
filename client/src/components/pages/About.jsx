import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";
export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="breadcrumb-hero">
            <div className="container">
              <div className="breadcrumb-hero">
                <h2>About</h2>
                <h4>
                  Welcome,{" "}
                  {user ? `${user.username} to our website` : "to our website"}
                </h4>
                <p>
                  Est dolorum ut non facere possimus quibusdam eligendi
                  voluptatem. Quia id aut similique quia voluptas sit quaerat
                  debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo
                  harum praesentium.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <ol>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>About</li>
            </ol>
          </div>
        </section>
        {/* <!-- End Breadcrumbs -->

<!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-11">
                <div className="row justify-content-end">
                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box py-5">
                      <i className="bi bi-emoji-smile"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="65"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Happy Clients</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box py-5">
                      <i className="bi bi-journal-richtext"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Projects</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box pb-5 pt-0 pt-lg-5">
                      <i className="bi bi-clock"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="27"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Years of experience</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box pb-5 pt-0 pt-lg-5">
                      <i className="bi bi-award"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="22"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 video-box align-self-baseline position-relative">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                <NavLink
                  to="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="glightbox play-btn mb-4"
                ></NavLink>
              </div>

              <div className="col-lg-6 pt-3 pt-lg-0 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Voluptate repellendus
                    pariatur reprehenderit corporis sint.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section -->

<!-- ======= Work Process Section ======= --> */}
        <section id="work-process" className="work-process">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Work Process</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row content">
              <div className="col-md-5" data-aos="fade-right">
                <img
                  src="assets/img/work-process-1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-4" data-aos="fade-left">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row content">
              <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                <img
                  src="assets/img/work-process-2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-md-7 pt-5 order-2 order-md-1"
                data-aos="fade-right"
              >
                <h3>Corporis temporibus maiores provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

            <div className="row content">
              <div className="col-md-5" data-aos="fade-right">
                <img
                  src="assets/img/work-process-3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5" data-aos="fade-left">
                <h3>
                  Sunt consequatur ad ut est nulla consectetur reiciendis animi
                  voluptas
                </h3>
                <p>
                  Cupiditate placeat cupiditate placeat est ipsam culpa.
                  Delectus quia minima quod. Sunt saepe odit aut quia voluptatem
                  hic voluptas dolor doloremque.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Facilis ut et voluptatem
                    aperiam. Autem soluta ad fugiat.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row content">
              <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                <img
                  src="assets/img/work-process-4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-md-7 pt-5 order-2 order-md-1"
                data-aos="fade-right"
              >
                <h3>
                  Quas et necessitatibus eaque impedit ipsum animi consequatur
                  incidunt in
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Work Process Section -->

<!-- ======= Our Skills Section ======= --> */}
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Our Skills</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <img
                  src="assets/img/skills-img.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>

                <div className="skills-content">
                  <div className="progress">
                    <span className="skill">
                      HTML <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      CSS <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      JavaScript <i className="val">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      Photoshop <i className="val">55%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Our Skills Section --> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
};
