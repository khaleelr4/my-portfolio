import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";
import seamlesslogo from "../../public/img/projects/Seamless_Loog.png"

const workData = [
  {
    img: "img/projects/project-1.png",
    name: "Zylo Frames",
    format: "img",
    project: "WORDPRESS WEBSITE",
    client: "Zylo Frames",
    duration: "2 WEEKS",
    technologies: ["WordPress"],
    // budget: "1550 USD",
    link: "https://zyloframes.com",
  },
  {
    img: "img/projects/project-2.png",
    name: "Maveran Solutions",
    format: "img",
    project: "WORDPRESS WEBSITE",
    client: "Maveran Solutions",
    duration: "1 WEEKS",
    technologies: ["WordPress"],
    // budget: "1550 USD",
    link: "https://maveransolutions.com",
  },
  {
    img: "img/projects/project-3.png",
    name: "Seamless Solution",
    format: "img",
    project: "WORDPRESS WEBSITE",
    client: "Seamless Solutions",
    duration: "2 WEEKS",
    technologies: ["WordPress"],
    // budget: "1550 USD",
    link: "https://seamlesssolutionz.com",
  },
  {
    img: "img/projects/nexusdesignbuild.png",
    name: "Nexus Design Build",
    format: "img",
    project: "WORDPRESS WEBSITE",
    client: "Nexus Design Build",
    duration: "2 WEEKS",
    technologies: ["WordPress"],
    // budget: "1550 USD",
    link: "img/projects/nexusdesignbuild.jpg",
  },
  {
    img: "img/projects/BlackstoneFoundations.png",
    name: "Blackstone Foundations",
    format: "img",
    project: "WORDPRESS WEBSITE",
    client: "Blackstone Foundations",
    duration: "2 WEEKS",
    technologies: ["WordPress"],
    // budget: "1550 USD",
    link: "img/projects/BlackstoneFoundations.jpg",
  },
  {
    img: "img/projects/txrooftoprangers.png",
    name: "TX ROOFTOP RANGERS",
    format: "img",
    project: "WORDPRESS WEBSITE",
    client: "TX ROOFTOP RANGERS",
    duration: "2 WEEKS",
    technologies: ["WordPress"],
    // budget: "1550 USD",
    link: "http://txrooftoprangers.com",
  },
  {
    img: "img/projects/dbsconstructiongroup.png",
    name: "DBS CONSTRUCTION GROUP",
    format: "img",
    project: "WORDPRESS WEBSITE",
    client: "DBS CONSTRUCTION GROUP",
    duration: "2 WEEKS",
    technologies: ["WordPress"],
    // budget: "1550 USD",
    link: "http://dbsconstructiongroup.com",
  },
  {
    img: "img/projects/codeblueai.png",
    name: "CODE BLUE AI",
    format: "img",
    project: "WORDPRESS WEBSITE",
    client: "CODE BLUE AI",
    duration: "2 WEEKS",
    technologies: ["Wordpress"],
    // budget: "1550 USD",
    link: "img/projects/codeblueai.png",
  },
  {
    img: "img/projects/Seamless_Loog.png",
    name: "Seamless Solutions Logo",
    format: "img",
    project: "LOGO",
    client: "Seamless Solutions",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/Seamless_Loog.png",
  },
  {
    img: "img/projects/thenationpointlogo.png",
    name: "The Nation Point Logo",
    format: "img",
    project: "LOGO",
    client: "The Nation Point Logo",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/thenationpointlogo.png",
  },
  {
    img: "img/projects/fidletyhoemslogo.png",
    name: "Fidelity Homes Logo",
    format: "img",
    project: "LOGO",
    client: "Fidelity Homes",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/fidletyhoemslogo.png",
  },
  {
    img: "img/projects/kasurpharmacylogo.png",
    name: "Kasur Pharmacy Logo",
    format: "img",
    project: "LOGO",
    client: "Kasur Pharmacy",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/kasurpharmacylogo.png",
  },
  {
    img: "img/projects/dbsconstructiongrouplogo.png",
    name: "DBS CONSTRUCTION GROUP LOGO",
    format: "img",
    project: "LOGO",
    client: "DBS CONSTRUCTION GROUP",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/dbsconstructiongrouplogo.png",
  },
  {
    img: "img/projects/Ateeblogo.png",
    name: "Baby Garments Logo",
    format: "img",
    project: "LOGO",
    client: "Baby Garments",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/Ateeblogo.png",
  },
  {
    img: "img/projects/purplehomelogo.png",
    name: "Purple Homes Logo 1",
    format: "img",
    project: "LOGO",
    client: "Purple Homes",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/purplehomelogo.png",
  },
  {
    img: "img/projects/purplehomes1.png",
    name: "Purple Homes Logo 2",
    format: "img",
    project: "LOGO",
    client: "Purple Homes",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/purplehomes1.png",
  },
  {
    img: "img/projects/CodeBlueailogo.png",
    name: "Code Blue AI Logo",
    format: "img",
    project: "LOGO",
    client: "Code Blue AI",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/CodeBlueailogo.png",
  },
  {
    img: "img/projects/arslan_logo.png",
    name: "KAKA Mobile Shop Logo",
    format: "img",
    project: "LOGO",
    client: "KAKA Mobile",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/arslan_logo.png",
  },
  {
    img: "img/projects/ateebcard.png",
    name: "Ateeb Baby Shop Business Card",
    format: "img",
    project: "BUSINESS CARD",
    client: "Baby Garments",
    duration: "1 DAY",
    technologies: ["COREL DRAW"],
    // budget: "1550 USD",
    link: "img/projects/ateebcard.png",
  },
  {
    img: "img/projects/arslancard.png",
    name: "KAKA Mobile Shop Business Card",
    format: "img",
    project: "BUSINESS CARD",
    client: "KAKA Mobile",
    duration: "1 DAY",
    technologies: ["COREL DRAW"],
    // budget: "1550 USD",
    link: "img/projects/arslancard.png",
  },
  {
    img: "img/projects/seamlesschart_thumbnail.png",
    name: "Seamless Solutions Tech Chart",
    format: "img",
    project: "Technology Chart",
    client: "Seamless Solutions",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/seamlesschart.png",
  },
  {
    img: "img/projects/seamlessflyer_thumbnail.png",
    name: "Seamless Solutions Flyer",
    format: "img",
    project: "Flyer",
    client: "Seamless Solutions",
    duration: "1 DAY",
    technologies: ["ADOBE ILLUSTRATOR"],
    // budget: "1550 USD",
    link: "img/projects/seamlessflyer.png",
  },
  
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent design and coding projects.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie}</Fragment>
                      ))}
                    </span>
                  </li>
                  {/* <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li> */}
                </ul>
                <a href={work.link} className="btn" target="_blank" rel="noopener noreferrer">
                  <span>
                    <i className="fa fa-external-link" />
                    preview 
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
