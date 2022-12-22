import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8886373442456!2d78.3818949141067!3d17.417131188060768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb953f37782733%3A0x9d63b16a66e1123c!2sBuon%20Lavoro%20Info%20Tech!5e0!3m2!1sen!2sin!4v1667751689107!5m2!1sen!2sin"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;
