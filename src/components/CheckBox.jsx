import React, { Fragment } from "react";

const CheckBox = ({ id, title }) => {
  return (
    <Fragment>
      {" "}
      <div className="text-lg text-grey-dark">
        <input
          type="checkbox"
          name={id}
          id={id}
          className="mr-4 bg-transparent"
        />
        <label htmlFor={id}>{title}</label>
      </div>
    </Fragment>
  );
};

export default CheckBox;
