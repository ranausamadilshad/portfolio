import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
   
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "I am Professional Web Developer working on React JavaScript technology for the last 6 months and having hands on expertise on front end framework",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "We don’t just build websites, we build websites that SELLS.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Essentially what photography is it life lit up.",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "An app is not all about technology, It is a dream towards future.",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Great marketing starts with great stories. Be unique, inspire, and connect .",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "It's much easier to double your business by doubling your conversion rate than by doubling your traffic.",
    },
  ]);
  return (
     <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;