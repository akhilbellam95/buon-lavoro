import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import ebook from "@/images/icons/ebook.png";
import Image from "next/image";

const SingleServiceOne = ({ service = {}, url }) => {
  const { icon, href, title } = service;

  // Add conditions to different icons
  const image = icon === "ebook.png" ? ebook : ebook;

  const checkIconOrImage = (icon) => {
    const lastFour = icon.slice(-4);
    return lastFour === ".jpg" || lastFour === ".png" ? "image" : "icon";
  };

  return (
    <Col
      xl={3}
      lg={6}
      md={6}
      sm={12}
      className="service-block animated fadeInLeft"
    >
      <div className="inner-box">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          {checkIconOrImage(icon) === "icon" ? (
            <span className={icon}></span>
          ) : (
            <Image
              id="ebook-icon"
              src={image.src}
              width={64}
              height={64}
              // style={{
              //   filter:
              //     "invert(86%) sepia(29%) saturate(6316%) hue-rotate(344deg) brightness(100%) contrast(103%)",
              // }}
              alt="ebook-icon"
            />
          )}
        </div>
        <h6>
          <a href={href}>
            <TextSplit text={title} />
          </a>
        </h6>
      </div>
    </Col>
  );
};

export default SingleServiceOne;
