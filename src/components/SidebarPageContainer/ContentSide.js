import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ContentSide = ({ service = {} }) => {
  const {
    image,
    title,
    text1,
    featuredImage,
    featuredTitle,
    featuredText,
    features,
    appTypes,
    text2,
    text3,
    text4,
    text5,
    text6,
    subHeading1,
    subHeading2,
    subHeading3,
    subHeading4,
    subHeading5,
    subHeading6,
    displayPlanning = true,
  } = service;

  return (
    <div className="service-details">
      <div className="main-image image">
        <Image src={image.src} alt="" />
      </div>
      <div className="text-content">
        <h3>{title}</h3>
        <p>
          <span style={{ fontWeight: "bold" }}>{subHeading1} </span>
          {text1}
        </p>
        {displayPlanning && (
          <div className="featured">
            <Row className="clearfix">
              <Col md={6} sm={12} className="image-col">
                <div className="image">
                  <Image src={featuredImage.src} alt="" />
                </div>
              </Col>

              <Col md={6} sm={12} className="text-col">
                <div className="inner">
                  <h4>{featuredTitle}</h4>
                  <p>{featuredText}</p>
                  <ul>
                    {features.map((text, i) => (
                      <li key={i}>{text}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        )}
        <p>
          <span style={{ fontWeight: "bold" }}>{subHeading2}</span>
          {text2}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>{subHeading3}</span>
          {text3}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>{subHeading4}</span>
          {text4}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>{subHeading5}</span>
          {text5}
        </p>
        <p className="last">
          <span style={{ fontWeight: "bold" }}>{subHeading6}</span>
          {text6}
        </p>
      </div>
      {title === "App Development" && (
        <div className="featured" style={{ marginTop: "40px" }}>
          <Row className="clearfix">
            {/* <Col md={6} sm={12} className="image-col">
              <div className="image">
                <Image src={featuredImage.src} alt="" />
              </div>
            </Col> */}

            <Col md={12} sm={12} className="text-col">
              <div className="inner">
                <h4>{featuredTitle}</h4>
                <p>{featuredText}</p>
                <ul>
                  {appTypes.map((type, i) => (
                    <li key={i}>
                      <span style={{ fontWeight: "bold" }}>{type.title}: </span>
                      {type.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ContentSide;
