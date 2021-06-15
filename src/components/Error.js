import React from "react";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export default function Error({text}) {
  return (
    <div className="warning">
      <p>
        <ErrorOutlineIcon style={{ color: "red" }} />
      </p>
      <span> Error : {text}</span>
    </div>
  );
}
