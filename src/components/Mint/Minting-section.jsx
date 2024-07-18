/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import Web3 from "web3";
import abi from "./abi.json";
import "./Minting-section.css";
import gif from "./pic.jpg";
const { REACT_APP_CONTRACT_ADDRESS } = process.env;
const Buy = ({ connecctstatus, setConnectedstatus }) => {
  const [connectedAccount, setConnectedAccount] = useState("CONNECT");
  const [contract, setContract] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supply, setTokenSupply] = useState(null);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.03);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  console.log("C", connecctstatus);

  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // await window.ethereum.enable();
      const web3 = window.web3;
      // creating contract instance
      const contractaddress = "0xbb385df552be1d7b6b05ee7ba46ba424ace5fd03";
      const ct = new web3.eth.Contract(abi, contractaddress);
      setContract(ct);
      console.log("ct", ct);
      let price = await ct.methods.PRICE().call();
      setContract(ct);
      setPrice(price);
      setPriceInEth(web3.utils.fromWei(price, "ether"));
      const supply = 5000;
      setTokenSupply(supply);
      const minted = await ct.methods.totalSupply().call();
      setMinted(supply - minted);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async function mint() {
    const web3 = window.web3;
    const _value = price * quantity;
    const address = await web3.eth.getAccounts();
    await contract.methods
      .mint(quantity)
      .send({ from: address.toString(), value: _value });
    const totalSupply = await contract.methods.totalSupply().call();
    setTokenSupply(totalSupply);
  }
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      // setConnectedstatus(true);
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return (
    <>
      <div id="Buynft" className="Buynft">
        <div className="container -fluid p-5 ">
          <div className="row mx-auto text-center">
            <div className="col-md-4 mx-auto my-auto text-center">
              <img className="image" src={gif} alt="Pic" />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <div className="col-md-12 btngroup ">
                <h1 className="mint-heading text-center">The Terraverse</h1>
                <h4 style={{ color: "white" }}>
                  Official Launch - July 28th at 9am CET
                </h4>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Price</h4>
                    <h4 style={{ color: "white" }} className="float-right ">
                      {priceInEth} ETH
                    </h4>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }} className="pt-2">
                      Quantity
                    </h4>
                    <div
                      className="d-flex rounded btngroup "
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        className="btn increment-btn m-0 p-0"
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <button type="button" className="btn text-white btn-size">
                        {quantity}
                      </button>
                      <button
                        className="btn increment-btn m-0 p-0"
                        onClick={() => {
                          if (quantity < 50) {
                            setQuantity(quantity + 1);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Total</h4>
                    <h4 style={{ color: "white" }} className="float-right">
                      5000
                    </h4>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Remaining</h4>
                    <h4 style={{ color: "white" }} className="float-right">
                      {minted}
                    </h4>
                  </div>
                </div>
                <p className="text-center py-5 what_inner_text ">
                  {/* <button href="#Buynft"
                    className="btn mint-btn"
                    onClick={async () => {
                      await connectWallet();
                      await mint();
                    }}
                  // disabled
                  >
                    Mint Now
                  </button> */}
                  <button
                    class="c-button c-button--gooey btn mint-btn"
                    onClick={async () => {
                      await connectWallet();
                      await mint();
                    }}
                  >
                    {" "}
                    <p>Mint Now</p>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Buy;
