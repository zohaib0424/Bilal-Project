/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import B from "../Assets/20sNFT/2236.png";
import A from "../Assets/20sNFT/2749.png";
// import A from "../Assets/20sNFT/2708.png";
import { Reveal } from "react-reveal";
import ParticlesView from "../components/ParticlesView";
import useOnScreen from "../hooks/useOnScreen";
export default function About() {
  const ref = useRef();
  const [isVisible, handlInView] = useOnScreen(ref);
  if (isVisible) {
    handlInView("abouts");
  }
  return (
    <div ref={ref} className="p-5 x-4 about" id="abouts">
      {/* <ParticlesView type="triangles"/>        */}
      <div>
        <div className="row px-3">
          <div className="col-md-4 col-sm-4 col-xs-0 hidden-xs py-4 ">
            <br />
            <br />
            <h1 style={{ textAlign: "center", color: "white" }}>
              <strong style={{ margin: "auto" }}>
                {/* Intoduction To Terraverse */}
              </strong>
              <br />
            </h1>
            <br />
            <Reveal top>
              <img
                src={A}
                width={"100%"}
                height={"auto"}
                style={{ marginTop: -10 }}
              />
            </Reveal>
            <br />
            <h1 style={{ textAlign: "center", color: "white" }}>
              <strong style={{ margin: "auto" }}>
                {/* Intoduction To Terraverse */}
              </strong>
              <br />
            </h1>
            <br />
            <Reveal bottom>
              <img
                src={B}
                width={"100%"}
                height={"auto"}
                style={{ marginTop: "2.7rem" }}
              />
            </Reveal>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-12 py-4 d-flex align-center">
            <div>
              <br />
              <h1 style={{ textAlign: "center", color: "white" }}>
                <strong style={{ margin: "auto" }}>
                  The Terraverse - Introduction
                </strong>
                <br />
              </h1>
              <br />
              <Reveal right>
                <div className="aboutText mt-3">
                  <p style={{ textAlign: "center" }}>
                    <strong>Guardians of our Earth</strong>
                    <br />
                  </p>
                  The Terraverse is aimed to revitalize the forest life on our
                  Earth with technological assistance. Deforestation has taken
                  our Earth to the massive devastation of global climate. This
                  initiative is taken to overcome the decay of nature caused by
                  global warming. The victory in this war against deforestation
                  is only possible with humanly efforts.
                  <br />
                </div>
              </Reveal>
              <Reveal right>
                <div className="aboutText mt-3">
                  <p style={{ textAlign: "center" }}>
                    <strong>The Ultimate Solution</strong>
                    <br />
                  </p>
                  The Terraverse is motivated to raise a voice against global
                  warming. Our core team is steadfast to revolutionize
                  reforestation with official collaborations with forestation
                  associations. We urge everyone to act as saviors of our Earth
                  and to invest in The Terraverse to save our Earth from global
                  warming.
                  <br />
                </div>
              </Reveal>
              <Reveal right>
                <br />
                <h1 style={{ textAlign: "center", color: "white" }}>
                  <strong style={{ margin: "auto" }}>
                    The Terraverse - Strategy
                  </strong>
                  <br />
                </h1>
                <br />

                <div className="aboutText mt-3">
                  <p style={{ textAlign: "center" }}>
                    <strong>Reviving Forestation</strong>
                    <br />
                  </p>
                  We have came up with advanced solutions to the traditional
                  problems. Everyone has a great opportunity to be a part of
                  this revolution to save the global climate. This can be done
                  by buying an NFT, an 30% of profits will go into donation for
                  tree plantation. With this donation, efforts will be carried
                  out to rescue the natural ecosystem, to flourish the
                  environment, and to heal our Earth with rapidly growing trees.
                  <br />
                </div>
              </Reveal>
              <Reveal right>
                <div className="aboutText mt-3">
                  <p style={{ textAlign: "center" }}>
                    <strong>Community and Humanly Support</strong>
                    <br />
                  </p>
                  The Terraverse is incomplete without community and humanly
                  support. We need everyone's passion to regenerate forests and
                  to save our Earth from global warming. The best way to
                  contribute to this noble cause is to buy an NFT, as part of
                  all profits will be donated to forestation associations to
                  rescue our Earth from global warming and deforestation.
                  <br />
                </div>
              </Reveal>
              <Reveal right>
                <div className="aboutText mt-3">
                  <p style={{ textAlign: "center" }}>
                    <strong>Future Plans and Utilities </strong>
                    <br />
                  </p>
                  The Terraverse NFT is a token of access to future events in
                  the Metaverse. It also serves as a proof of your contribution
                  towards forest and nature regeneration, and will be added in
                  our Metaverse as wearable Badge of Honor. Each NFT is backed
                  by a unique and valuable tree that we will plant and take care
                  of, contributing to the natural ecosystem reviving our Earth.
                  Be the precious part of forest regeneration, and revive our
                  earth through The Terraverse!
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
