/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Reveal } from "react-reveal";
import Accordion from "../components/Accordion";
import ParticlesView from "../components/ParticlesView";
import useOnScreen from "../hooks/useOnScreen";
export default function FAQ() {
  let data = [
    {
      title: "What is the Terraverse NFT?",
      content: `The Terraverse NFT is the case study of forestland. This forestland is created to enhance awareness among foresters to revive their forests using regenerative agricultures.`,
    },
    {
      title: "WHAT IS THE SUPPLY OF THE TERRAVERSE GENESIS COLLECTION?",
      content: `There will be 5,000 Terraverse Genesis NFTS on the Ethereum blockchain.`,
    },
    {
      title: "WHAT IS THE PRICE OF EACH TERRAVERSE GENESIS NFT?",
      content: `The price of one Terraverse Genesis NFT will be 0.03 ETH + gas.`,
    },
    {
      title: "HOW MANY TERRAVERSE GENESIS NFTS CAN I OWN?",
      content: `An unlimited number of Terraverse Genesis NFTs can be purchased per each address (50 maximum).`,
    },
    {
      title: "WHICH WALLET PLATFORMS CAN I USE FOR THE MINT?",
      content: `We support Metamask wallets.`,
    },
    {
      title: "WHERE CAN I LIST MY TERRAVERSE GENESIS NFTS AFTER MINT?",
      content: `Terraverse Genesis NFTs will be listed on Opensea once we start minting.`,
    },
    {
      title: "WHERE CAN I SEE MY TERRAVERSE GENESIS NFTS THAT I’VE MINTED?",
      content: `You can see it on your Opensea profile, or in your Metamask wallet.`,
    },
    {
      title: "HOW CAN I CONTACT THE CORE TEAM?",
      content: `The best way to contact the core team is either through our official Discord or Twitter. Links are on the top right of the site.`,
    },
    {
      title: "HOW DO I MINT?",
      content: (
        <p>
          You can begin minting on July 28th, which is when public mint begins.
          <br />
          <br />
          Here are the steps to mint a Terraverse Genesis NFT:
          <br />
          <br />
          1. Download the Metamask extension on your browser.
          <br />
          2. Purchase Ethereum ($ETH) from any crypto exchange, such as Binance
          or Coinbase.
          <br />
          3. Send Ethereum from your exchange of choice to your Metamask wallet.
          <br />
          4. Connect to this website using the mint button with your wallet, and
          select the number of NFTs you wish to mint.
          <br />
          5. Review and confirm your transaction.
          <br />
          6. Once your transaction has been confirmed and completed on the
          blockchain, your Terraverse Genesis NFTs will appear in your Metamask
          wallet, and on Opensea.
          <br />
          <br />
          *Note that once the collection begins to mint, you can purchase a
          Terraverse Genesis NFT from the official collection on the Opensea
          marketplace.
          <br />
        </p>
      ),
    },
    {
      title: "WILL THERE BE A SECOND NFT DROP IF I MISS OUT?",
      content: (
        <strong>
          Yes! Once the Terraverse Genesis Collection is sold out, we will begin
          to develop a second collection. Stay tuned!
        </strong>
      ),
    },
  ];
  const ref = useRef();
  const [isVisible, handlInView] = useOnScreen(ref);
  if (isVisible) {
    handlInView("faq");
  }
  return (
    <>
      <div ref={ref} className="row p-5 x-4 faq" id="faq">
        {/* <ParticlesView type="bubbles"/> */}
        <Reveal top>
          <div style={{ textAlign: "center", margin: "auto" }}>
            <h1 style={{ color: "#fff" }}>FAQs</h1>
            <p className="p-5" style={{ color: "black", fontSize: 20 }}>
              {/* NFT will be artistic representation of “Globes in the palms of humans” and it compels humans to act as shepherds of earth against stagnation caused by deforestation leading to global warming and the many other catastrophic environmental damage. As such represented by our NFTs that whether it may be the blooming nature and revived and preserved naturally earth or a catastrophic disaster engulfed earth, all is within our hands and our abilities to either do something about it or to just let our home burn down… */}
            </p>
          </div>
        </Reveal>
        <Reveal bottom>
          <div className="col-md-12 col-sm-12 col-xs-12 py-4 ">
            <Accordion data={data} />
          </div>
        </Reveal>
      </div>
    </>
  );
}
