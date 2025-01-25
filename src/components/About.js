import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I design and code beautiful things, and I love what I do.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/khalil_about.png"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} a Freelance Full Stack Developer, WordPress Developer and Graphics Designer based in Lahore,
              Pakistan. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name:</span>
                    Muhammad Khalil
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name:</span>
                    Ur Rehman
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate:</span>12 OCT
                    1994
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality:</span>
                    Pakistani
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience:</span>1 year
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address:</span>
                    Lahore, Pakistan
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance:</span>
                    Available
                  </h6>
                </li>
                <li><br/>
                  <h6>
                    <span className="font-weight-600">Languages:</span>
                    Urdu, English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone:</span>+92-322-9122256
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email:</span>
                    khaleelr4@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Github:</span>
                    <a href="https://github.com/khaleelr4" className="text-white" target="_blank" rel="noopener noreferrer">khaleelr4</a><br/>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Linkedin:</span>
                    <a href="https://www.linkedin.com/in/muhammad-khalil-ur-rehman-031643b0/" className="text-white" target="_blank" rel="noopener noreferrer">Muhammad Khalil Ur Rehman</a>
                  </h6>
                </li>
              </ul>
            </div>
            {/* <div className="col-12 resume-btn-container">
              <a href="#" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div> */}
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2017 - 2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Marketeer
                        <span className="separator" />
                        <span className="font-weight-700">Murkez.com (FutureNow Technologies)</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        WordPress Developer
                        <span className="separator" />
                        <span className="font-weight-700">Maveran Solutions</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        WordPress Developer
                        <span className="separator" />
                        <span className="font-weight-700">seamlessSolutionz.com</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2025
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        WordPress Developer
                        <span className="separator" />
                        <span className="font-weight-700">seamlessSolutionz.com</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2009 - 2010
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Matric - ( Science )
                        <span className="separator" />
                        <span className="font-weight-700">
                          Bise Lahore
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      2 years (grade 9 and grade 10). Content: usually 8 exam subjects. The subjects English, Urdu, Islamic studies (Islamiyat) and Pakistan studies (history, geography, politics and culture of Pakistan) are compulsory.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2011 - 2014
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        D.A.E - ( Electrical )
                        <span className="separator" />
                        <span className="font-weight-700">
                          Punjab Board Of Technical Education
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Diploma of Associate Engineer or DAE is a three years post intermediate (grade 12) program of instructions in various engineering disciplines.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2014 - 2018
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Hajvery University
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        A Bachelor of Science in Computer Science (BSCS) is a four-year degree program that teaches students how to use computers to solve problems. The program includes both theoretical and practical components.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}<br/>
            {/* Certifications Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
              <br/><br/>Certifications
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Graphics Designing
                        <span className="separator" />
                        <span className="font-weight-700">
                          DigiSkills
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Graphic design is “the art and practice of planning and projecting ideas and experiences with visual and textual content,”.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        WordPress
                        <span className="separator" />
                        <span className="font-weight-700">
                          Digiskills
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        WordPress is a free, open-source content management system (CMS) that allows users to create, manage, and publish websites.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - 2020
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Web Design and development
                        <span className="separator" />
                        <span className="font-weight-700">
                          Wise Collage (Gulberg Lahore - PSDF)
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Web design and development are the processes of creating and maintaining a website, respectively. Web design focuses on the visual appeal and user experience, while web development focuses on the functionality.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">HTML</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">CSS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Bootstrap</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Tailwind CSS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Typescript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={45}
                  style={{ width: "45%" }}
                />
                <span className="percent" style={{ right: "calc(55% - 21px)" }}>
                  45%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React JS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Node JS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={40}
                  style={{ width: "40%" }}
                />
                <span className="percent" style={{ right: "calc(60% - 21px)" }}>
                  40%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Python</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={40}
                  style={{ width: "40%" }}
                />
                <span className="percent" style={{ right: "calc(60% - 21px)" }}>
                  40%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Django</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={40}
                  style={{ width: "40%" }}
                />
                <span className="percent" style={{ right: "calc(60% - 21px)" }}>
                  40%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">WordPress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
             {/* Skill Bar Starts */}
             <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Adobe Photoshop</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
             {/* Skill Bar Starts */}
             <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Adobe Illustrator</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
             {/* Skill Bar Starts */}
             <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Corel Draw</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
