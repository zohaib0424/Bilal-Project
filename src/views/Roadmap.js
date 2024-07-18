/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Reveal, Fade } from "react-reveal";
import useOnScreen from "../hooks/useOnScreen";

export default function RoadMap() {
  const ref = useRef();
  const [isVisible, handlInView] = useOnScreen(ref);
  if (isVisible) {
    handlInView("roadmap");
  }

  return (
    <div ref={ref} className="p-5 roadmap" id="roadmap">
      <Reveal top>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#4C4920" }}>Roadmap</h1>
          <p className="p-5" style={{ color: "black", fontSize: 20 }}>
            {/* NFT will be artistic representation of “Globes in the palms of humans” and it compels humans to act as shepherds of earth against stagnation caused by deforestation leading to global warming and the many other catastrophic environmental damage. As such represented by our NFTs that whether it may be the blooming nature and revived and preserved naturally earth or a catastrophic disaster engulfed earth, all is within our hands and our abilities to either do something about it or to just let our home burn down… */}
          </p>
        </div>
      </Reveal>
      {/* <Fade bottom> */}

      <Reveal left>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6 milestone">
            <div className="milestone-text">
              <p>
                <strong>MILESTONE 1</strong>
                <br />
                The website and the Discord will be launched, and marketing will
                begin on Twitter and Instagram.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-0 hidden-xs">
            <p>{/* MILESTONE 1 */}</p>
          </div>
        </div>
      </Reveal>
      <Reveal right>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-0 hidden-xs">
            <p></p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 milestone">
            <div className="milestone-text">
              <p>
                <strong> MILESTONE 2</strong>
                <br />
                Official collaborations with other like-minded projects will be
                announced. Giveaways on Discord and Twitter for prizes like
                whitelist and free NFT airdrops will also be hosted.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal left>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6 milestone">
            <div className="milestone-text">
              <p>
                <strong> MILESTONE 3</strong>
                <br />
                The Terraverse Genesis collection will launch on July 28th at
                9AM (CET Time) with a total supply of 5,000, and a mint price of
                0.03 ETH + gas.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-0 hidden-xs">
            <p>{/* MILESTONE 1 */}</p>
          </div>
        </div>
      </Reveal>
      <Reveal right>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-0  hidden-xs">
            <p></p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 milestone">
            <div className="milestone-text">
              {" "}
              <p>
                <strong>MILESTONE 4</strong>
                <br />
                Each NFT from The Terraverse Genesis collection will be
                represented by a tree planted in the Peruvian Andes and the
                Amazon. Everyone will be able to see these trees grow.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal left>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6 milestone">
            <div className="milestone-text">
              <p>
                <strong>MILESTONE 5</strong>
                <br />
                20% of all profits from The Terraverse Genesis collection will
                be contributed to environmental organizations around the globe
                focused on stopping global warming. These contributions will
                begin after minting ends.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-0 hidden-xs">
            <p>{/* MILESTONE 1 */}</p>
          </div>
        </div>
      </Reveal>
      <Reveal right>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-0  hidden-xs">
            <p></p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 milestone">
            <div className="milestone-text">
              <p>
                <strong>MILESTONE 6</strong>
                <br />A second collection will begin development. This
                collection will also follow the goal of protecting the
                environment from global warming.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      {/* </Fade> */}
    </div>
  );
}
