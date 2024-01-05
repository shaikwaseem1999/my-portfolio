import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { IoMdContact } from "react-icons/io";
import { Animate } from "react-simple-animate";
import { Card, Space, Typography } from "antd";
import { FaRegCheckCircle } from "react-icons/fa";
import "./styles.scss";
const { Title } = Typography;

const contactDetails = [
  {
    label: "Name",
    value: "Shaik Waseem",
  },
  {
    label: "LinkedIn Profile",
    value: "https://www.linkedin.com/in/shaik-waseem-130a7a184/",
  },
  {
    label: "Github Profile",
    value: "https://github.com/shaikwaseem1999",
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showCard, setShowCard] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    setShowCard(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<IoMdContact size={30} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">To Contact Me:</h3>
        </Animate>
        <div className="contact__content__contactWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-400px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <ul>
              {contactDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label + ":"}</span>
                  <span className="value">
                    {item.label === "LinkedIn Profile" ||
                    item.label === "Github Profile" ? (
                      <a
                        href={item.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="highlight-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </li>
              ))}
            </ul>
            {showCard && !showSuccessMessage && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  maxHeight: "30vh",
                }}
              >
                <Space direction="vertical" size={26}>
                  <Card
                    title={
                      <h2 style={{ fontSize: "34px" }}>Get In Touch !!</h2>
                    }
                    style={{
                      width: 600,
                      height: 500,
                      backgroundColor: "#FFE5B4",
                      border: "2px solid #fff",
                    }}
                  >
                    <Title level={4}>Contact Me!!</Title>
                    <form onSubmit={handleSubmit} className="custom-form">
                      <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Your Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Your Message:</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-input"
                          style={{
                            width: "100%",
                            height: "60px",
                            resize: "none",
                          }}
                        ></textarea>
                      </div>
                      <button type="submit" className="submit-button">
                        Send
                      </button>
                    </form>
                  </Card>
                </Space>
              </div>
            )}
            {showSuccessMessage && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="test"
              >
                <h2 style={{ color: "green" }}>Sent successfully!</h2>
                <FaRegCheckCircle
                  size={30}
                  style={{
                    marginRight: "8px",
                    background: "transparent",
                    color: "green",
                  }}
                />
              </div>
            )}
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Contact;
