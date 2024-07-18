/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import Home from "../Assets/Ahome.png";
import Twitter from "../Assets/Atwitter.png";
import Instagram from "../Assets/Ainstagram.png";
import Discord from "../Assets/Adiscord.png";
import OpenSea from "../Assets/Aopensea.png";
import Logo from "../Assets/logo.png";
export default function Header2(props) {
  const { buttons = true } = props;
  const routes = {
    discord: "https://discord.gg/k8q6NWGpdF",
    twitter: "https://twitter.com/Terraverse_NFT",
    instagram: "https://www.instagram.com/theterraverse/",
  };
  return (
    <nav class="navbar gradient-green">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggler" data-toggle="open-navbar1">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="/#">
            <img src={Logo} width={150} />
            {/* <h4>Awesome<span>logo</span></h4> */}
          </a>
        </div>

        <div class="navbar-menu" id="open-navbar1">
          <ul class="navbar-nav ml-3">
            {/* <li class="navbar-dropdown">
                <a href="#" class="dropdown-toggler" data-dropdown="my-dropdown-id">
                  Categories <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown" id="my-dropdown-id">
                  <li><a href="#">Actions</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li class="separator"></li>
                  <li><a href="#">Seprated link</a></li>
                  <li class="separator"></li>
                  <li><a href="#">One more seprated link.</a></li>
                </ul>
              </li> */}
            {/* <li class=""><a href="/#">Home</a></li> */}
            {/* <li><a href="/#about">About</a></li>
              <li><a href="/#collections">Collection</a></li>
              <li><a href="/#roadmap">Roadmap</a></li>
              <li><a href="/#benifits">Benifits</a></li>
              <li><a href="/#team">Team</a></li>
              <li><a href="/#faq">FAQ</a></li> */}
            {/* <li><a href="./mataverse_story">Mataverse Story</a></li> */}

            <div className="row ml-5 mt-auto buttons">
              <div class="socials mr-4">
                <a class="navbar-logo" href={routes.discord}>
                  <img class="socialsicon" src={Discord} />
                  {/* <FontAwesomeIcon icon={faDiscord} size='2x' /> */}
                </a>
                <a class="navbar-logo" href={routes.instagram}>
                  <img class="socialsicon" src={Instagram} />
                  {/* <FontAwesomeIcon icon={faInstagram} size='2x' /> */}
                </a>
                <a class="navbar-logo" href={routes.twitter}>
                  <img class="socialsicon" src={Twitter} />
                  {/* <FontAwesomeIcon icon={faTwitter} size='2x' /> */}
                </a>
              </div>
              {/* <div className="button-primary"> */}
              {/* <img src={Vector} width="auto" height={"20"} style={{margin:"auto"}}/> */}
              {/* <span style={{marginLeft:5}}>Wallet Connect</span> */}
              {/* </div> */}
              {buttons && (
                <div className="button-secondary">
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href={"/mint"}
                  >
                    Mint
                  </a>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
