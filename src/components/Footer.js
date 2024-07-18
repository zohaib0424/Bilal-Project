/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Reveal } from "react-reveal";
import Logo from "../Assets/logo.png";

export default function (props) {
  const { fixed } = props;
  let class_ = fixed
    ? "d-flex justify-content-between text-center py-2 footer fixed gradient-green"
    : "d-flex justify-content-between text-center py-2 footer gradient-green";
  return (
    <div className={class_}>
      <a href="#">
        <img src={Logo} width={120} />
        {/* <h4>Awesome<span>logo</span></h4> */}
      </a>
      <p
        className="title right px-4 my-auto"
        style={{ color: "#010101", fontWeight: 500, fontWeight: 600 }}
      >
        © {new Date().getFullYear()} Powered by The Terraverse - All Rights
        Reserved
      </p>
    </div>
  );
}
