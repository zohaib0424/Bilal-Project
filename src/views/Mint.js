/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import MintView from "../components/Mint/Minting-section";
import { Reveal } from "react-reveal";
export default function Mint() {
  return (
    <div className="p-5 about" id="about">
      <Reveal top>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#4C4920" }}></h1>
          <p className="p-5" style={{ color: "black", fontSize: 20 }}>
            {/* NFT will be artistic representation of “Globes in the palms of humans” and it compels humans to act as shepherds of earth against stagnation caused by deforestation leading to global warming and the many other catastrophic environmental damage. As such represented by our NFTs that whether it may be the blooming nature and revived and preserved naturally earth or a catastrophic disaster engulfed earth, all is within our hands and our abilities to either do something about it or to just let our home burn down… */}
          </p>
        </div>
      </Reveal>
      {/* <Fade bottom> */}
      <div>
        <MintView />
      </div>
      {/* </Fade> */}
    </div>
  );
}
