/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import List from "../components/List";
import { Reveal } from "react-reveal";
import ParticlesView from "../components/ParticlesView";
import useOnScreen from "../hooks/useOnScreen";
export default function Benifits() {
  const items = [
    "Access to exclusive on-farm events hosted by The Terraverse, with availability physically or virtually.",
    "We will help to save our Earth from global warming with carbon sequestration.",
    "We will plant many trees to stop deforestation.",
    "We are going to create environmental awareness through our series of conferences with renowned local and international experts.",
    "Exclusive access to future NFT drops by The Terraverse.",
    "Each NFT comes with a formal certification of the information on the respective tree planted.",
  ];
  const ref = useRef();
  const [isVisible, handlInView] = useOnScreen(ref);
  if (isVisible) {
    handlInView("benifits");
  }
  return (
    <>
      <div ref={ref} className="p-4 benifits" id="benifits">
        {/* <ParticlesView type="bubbles"/> */}
        <Reveal left>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "white" }}>Benefits</h1>
            {/* <p className="p-5" style={{color:"white",fontSize:20}}>
                </p> */}
          </div>
        </Reveal>
        {/* <Fade bottom> */}
        <div>
          <List items={items} />
        </div>
        {/* </Fade> */}
      </div>
    </>
  );
}
