/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Reveal, Fade } from "react-reveal";
import B from "../Assets/20sNFT/2213.png";
import C from "../Assets/20sNFT/2219.png";
import D from "../Assets/20sNFT/2236.png";
import E from "../Assets/20sNFT/2253.png";
import F from "../Assets/20sNFT/2384.png";
import G from "../Assets/20sNFT/2517.png";
import H from "../Assets/20sNFT/2579.png";
import I from "../Assets/20sNFT/2707.png";
import J from "../Assets/20sNFT/2708.png";
import K from "../Assets/20sNFT/2729.png";
import L from "../Assets/20sNFT/2754.png";
import M from "../Assets/20sNFT/2764.png";
import N from "../Assets/20sNFT/2767.png";
import O from "../Assets/20sNFT/2771.png";
import Slider from "../components/Slider";
import ParticlesView from "../components/ParticlesView";
import useOnScreen from "../hooks/useOnScreen";

export default function Collection() {
  const images = [B, C, D, F, G, H, E, I, J, K, L, M, N, O];
  const ref = useRef();
  const [firstForceDone, setFirstForceDone] = useState(false);
  const [isVisible, handlInView] = useOnScreen(ref);
  if (isVisible) {
    handlInView("collections");
  }
  // useEffect(()=>{

  //     let containers = document.querySelectorAll(".navbar .navbar-menu .navbar-nav > li > a");
  //     Array.from(containers).forEach((item)=>{
  //         // console.log(item.getAttribute('href'));
  //         let href = item.getAttribute('href');
  //         if(href=="#collections"){

  //             item.className = "header-active"
  //         }else{
  //             item.className = "";
  //         }
  //       });
  //       setFirstForceDone(true);

  // },[])
  return (
    <div ref={ref} className="p-5 collection" id="collections">
      {/* <ParticlesView type="bubbles"/> */}
      <p>In View {isVisible.toString()}</p>
      <Reveal top>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#4C4920" }}>
            The Terraverse - Genesis Collection
          </h1>
          <p
            className="p-2"
            style={{ color: "black", fontSize: 20, fontWeight: 700 }}
          >
            Our collection is an artistic representation of planets in the palms
            of humans. It compels humans to act as shepherds of our Earth
            against stagnation, caused by deforestation, which leads to global
            warming and the many other catastrophic environmental damages. The
            Terraverse Genesis collection represents whether our Earth may host
            blooming natures if revived and preserved naturally, or catastrophic
            disasters if ignored. This is all within our hands and we have the
            ability to do something about it, or to just let our home burn down.
          </p>
        </div>
      </Reveal>
      {/* <Fade bottom> */}
      <div>
        <Slider images={images} />
      </div>
      {/* </Fade> */}
    </div>
  );
}
