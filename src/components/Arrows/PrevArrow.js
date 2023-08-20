import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";

const PrevArrow = ({ onClick }) => {
  return (
    <>
      <div className="prev-arrow" onClick={onClick}>
        <GrFormPreviousLink />
      </div>
    </>
  );
};

export default PrevArrow;
