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
    text2,
    text3,
    text4,
    text5,
    text6,
  } = service;

  return (
    <div className="service-details">
      <div className="main-image image">
        <Image src={image.src} alt="" />
      </div>
      <div className="text-content">
        <h3>{title}</h3>
        <p>
          <span style={{ fontWeight: "bold" }}>{title} </span>
          {text1}
        </p>
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
        <p>
          <span style={{ fontWeight: "bold" }}>Front-End Developemnt, </span>
          {text2}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Back-End Development, </span>
          {text3}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Security </span>
          {text4}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Performance optimization </span>
          {text5}
        </p>
        <p className="last">
          <span style={{ fontWeight: "bold" }}>Web development </span>
          {text6}
        </p>
      </div>
    </div>
  );
};

export default ContentSide;
