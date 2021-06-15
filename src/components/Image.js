import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";

export default function Image(props) {
  return (
    <li className="result">
        <img src={props.src} alt={props.alt} />
    </li>
  );
}
