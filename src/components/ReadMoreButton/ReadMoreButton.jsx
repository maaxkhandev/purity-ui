import React from "react";
import { Row } from "antd";
import ArrowRightIcon from "@assets/arrow-right.svg";
import "./ReadMoreButton.css";

const ReadMoreButton = ({ onButtonClick, isWhite }) => {
  const handleReadMoreClick = () => {
    alert("Read More button clicked!");
  };

  return (
    <Row className="read-more-button" onClick={handleReadMoreClick}>
      <h4>Read more</h4>
      <img
        className={`${isWhite ? "white-arrow" : ""}`}
        src={ArrowRightIcon}
        alt="Arrow right"
      />
    </Row>
  );
};

export default ReadMoreButton;
