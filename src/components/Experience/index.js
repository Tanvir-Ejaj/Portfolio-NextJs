import React from "react";
import ExpLeft from "./ExpLeft";
import ExpRight from "./ExpRight";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <ExpLeft />
            </div>
            <div className="col-lg-6">
              <ExpRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
