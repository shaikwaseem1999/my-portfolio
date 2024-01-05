import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import logo from "../../logo.svg";
import "./styles.scss";

const personalisedDetails = [
  {
    label: "Name",
    value: "Shaik Waseem",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Hyderabad, Telangana, India",
  },
  {
    label: "Email",
    value: "shaikwaseem1999@gmail.com",
  },
  {
    label: "Contact No",
    value: "9652268491",
  },
];

const jobSummary =
  "As a Software Developer with 3+ years of experience, I have played a vital role in the development and maintenance of software applications. My responsibilities have included designing, coding, testing, debugging, and documenting software solutions to meet project requirements. I have collaborated with cross-functional teams, including product managers, designers, and fellow developers, to deliver high-quality software products.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={30} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front-End Developer</h3>

            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalisedDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label + ":"}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(700px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
