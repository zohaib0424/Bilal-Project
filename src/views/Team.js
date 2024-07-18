/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import styled, { ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import Link from '../../../components/Link/Link';
import { css } from "styled-components";

// Images

import Andy from "../Assets/20sNFT/2213.png";
import Nate from "../Assets/20sNFT/2213.png";
// import Travis from '../../../assets/travis.png';
import Kylie from "../Assets/20sNFT/2219.png";
import Enzo from "../Assets/20sNFT/2236.png";
import Haley from "../Assets/20sNFT/2253.png";
import { Reveal } from "react-reveal";
import useOnScreen from "../hooks/useOnScreen";

const Fade = require("react-reveal/Fade");

export const DropShadow = () => css`
  box-shadow: 10px 10px 25px rgba(255, 255, 255, 0.3);
  // box-shadow: 5px 5px 10px;
`;

export const GlassBackground = () => css`
  //backdrop-filter: blur(5px);
  // background-color:#E5DC7F;
  // background-color: #fff;
  // background-image: linear-gradient(315deg, #ffcd00 0%, #005238 74%);
  background-image: linear-gradient(
    315deg,
    #41973c 0%,
    #429d3e 40%,
    #47a43c 50%,
    #3a8d3d 64%,
    #33803c 70%,
    #33803c 80%,
    #3b8d3b 90%
  );
  // background-color: rgba(99, 212, 113, 0.9);
  // background-color: #63d471;
  // background-image: linear-gradient(315deg, rgb(99, 212, 113) 0%, #233329 74%);
  ${DropShadow()}
  &:hover {
    transform: scale(1.04);
  }
  // border-top: 1px solid rgba(255, 255, 255, 0.1);
  // border-left: 1px solid rgba(255, 255, 255, 0.1);
`;

export const MobileStyles = (style, maxWidth = 767) => css`
  @media only screen and (max-width: ${maxWidth}px) {
    ${style}
  }
`;
const Team = ({}) => {
  const ref = useRef();
  const [isVisible, handlInView] = useOnScreen(ref);
  if (isVisible) {
    handlInView("team");
  }

  return (
    <div ref={ref} className=" x-4 team" id="team">
      <div className="m-4 p-4">
        {/* <Spacer size='lg' /> */}
        <Reveal top>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#fff" }}>Team</h1>
            <p className="p-5" style={{ color: "black", fontSize: 20 }}>
              {/* NFT will be artistic representation of “Globes in the palms of humans” and it compels humans to act as shepherds of earth against stagnation caused by deforestation leading to global warming and the many other catastrophic environmental damage. As such represented by our NFTs that whether it may be the blooming nature and revived and preserved naturally earth or a catastrophic disaster engulfed earth, all is within our hands and our abilities to either do something about it or to just let our home burn down… */}
            </p>
          </div>
        </Reveal>
        {/* <Fade bottom> */}
        {/* <SectionHeader title='Homeless Friends Team' subtitle="Homeless Friends is more than your standard NFT project. Homeless friends is seeking to help those in need, those that are struggling, and those that simply are unable to or do not have the resources to help themselves. By owning an NFT in the Homeless Friends collection, you become a friend to the homeless. */}

        {/* We are a highly experienced team with crazy ambitious goals. We are product managers, upcoming digital artists, web3 nerds, marketing guru’s, but most importantly we are decent humans trying to bring a little bit of good to those in need.  " /> */}
        {/* </Fade> */}

        {/* <Spacer size='lg' /> */}

        <Members>
          <Fade left>
            <Member name="Andre R." role="Founder & Strategist" img={Nate} />
          </Fade>
          <Fade left>
            <Member
              name="Bilal S."
              role="Developer"
              img={Haley}
              //twitter='https://t6witter.com/Bountying'
            />
          </Fade>

          <Fade right>
            <Member
              name="Tommy"
              role="Community Manager"
              img={Kylie}
              //twitter='https://twitter.com/ctown4v'
            />
          </Fade>
          <Fade right>
            <Member
              name="Hamza"
              role="2D & 3D Designer"
              img={Enzo}
              //twitter='https://twitter.com/itjakub'
            />
          </Fade>
        </Members>
        {/* <Members className='bottom'>
            
        <Fade left>
                <Member name='Andi F.'
                        role='Artist' 
                        img={Andy}
                        // twitter='https://twitter.com/colourbleed'
                         />
            </Fade>
            <Fade right>
                        <Member name='X' 
                                role='Backend Developer' 
                                img={Backend2}
                                //twitter='https://twitter.com/ctown4v'
                                />
                </Fade>
            <Fade right>
                <Member name='X' 
                        role='Backend Developer'
                        img={Backend} />
            </Fade>
           
                <Fade right>
                <Member name='X'
                        role='Front End Developer' 
                        img={Frontend}
                        // twitter='https://twitter.com/colourbleed'
                         />
            </Fade>
        </Members> */}
        {/* <Members className='bottom'>
                
                <Fade left>
                <Member name='X' 
                        role='Backend Developer'
                        img={Backend3} />
            </Fade>
                <Fade right>
                <Member name='X' 
                        role='Smart Contract Development'
                        img={Backend4} />
            </Fade>
        </Members> */}

        {/* <Spacer size='lg' /> */}
      </div>
    </div>
  );
};
export { Member, Members, Team, Content, Member2 };
// export default Team;

const Content = styled.div`
  // width: 100%;
  // padding-top:8rem;
  // // border-bottom:2px solid rgba(255,255,255,0.2);
  // box-shadow: 5px 5px 10px;
  // padding-bottom:8rem;
`;
const Members = styled.div`
  display: flex;
  justify-content: center;
  &.bottom {
    margin-top: 40px;
  }
  ${MobileStyles(`
        display: block;
        justify-content: inherit;
        &.bottom{
            margin-top: 0px;
        }
    `)};
`;

// =============================================================
//   Member
// =============================================================

const Member = ({ name, role, img, twitter = "" }) => {
  return (
    <MemberContent>
      <MemberInner>
        <MemberPadding>
          <div className="img">
            <BoxShadow />
            <img src={img} />
          </div>
          <div className="info">
            <div className="name">{name}</div>
            <div className="role">{role}</div>
            <div className="media">
              {
                twitter && (
                  // <Link href={twitter}>
                  <FontAwesomeIcon icon={faTwitter} size="1x" />
                )
                // </Link>
              }
            </div>
          </div>
        </MemberPadding>
      </MemberInner>
    </MemberContent>
  );
};

const Member2 = ({ name, role, img, twitter = "" }) => {
  return (
    <MemberContent>
      <MemberInner>
        <MemberPadding2>
          <div className="img">
            <BoxShadow />
            <img src={img} />
          </div>
          <div className="info">
            <div className="name">{name}</div>
            <div className="role">{role}</div>
            <div className="media">
              {
                twitter && (
                  // <Link href={twitter}>
                  <FontAwesomeIcon icon={faTwitter} size="1x" />
                )
                // </Link>
              }
            </div>
          </div>
        </MemberPadding2>
      </MemberInner>
    </MemberContent>
  );
};

const BoxShadow = styled.div`
  -moz-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 5;
`;

const MemberPadding = styled.div`
  border-radius: 20px;
  padding: 20px 20px 0px 20px;
  margin: 0px 10px;
  ${GlassBackground()};
  width: 250px;
  height: 100%;

  .img {
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    height: 200px;
    img {
      height: 100%;
      position: relative;
      // left: -110px;
    }
  }

  ${MobileStyles(`
        min-height: 120px;
        height: auto;
        width: auto;

        display: flex;
        > .info {
            flex: 1;
            margin-top: -15px;
        }

        .img {
            margin-right: 10px;
            margin-bottom:30px;
            width: 100px;
            height: 100px;
            img {
                // left: -50px;
            }
        }
    `)};
`;
const MemberPadding2 = styled.div`
  border-radius: 20px;
  padding: 20px 20px 0px 20px;
  margin: 0px 10px;
  ${GlassBackground()};
  width: 512px;
  height: 100%;

  .img {
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    height: 512px;
    img {
      height: 100%;
      position: relative;
      // left: -110px;
    }
  }

  ${MobileStyles(`
        min-height: 120px;
        height: 100%;
        width: auto;

        display: flex;
        > .info {
            flex: 1;
            margin-top: -15px;
        }

        .img {
            margin-right: 10px;
            width: 100px;
            height: 100px;
            img {
                // left: -50px;
            }
        }
    `)};
`;

const MemberContent = styled.div`
  height: 100%;
  // color:#fff;

  text-align: center;

  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
  .name {
    font-weight: bold;
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .role {
    font-size: 16px;
  }

  .media {
    margin-top: 15px;
  }

  ${MobileStyles(`
        margin-bottom: 15px;
        text-align: left;
        .name {
            font-size: 20px;
        }
        .role {
            font-size: 16px;
        }
        img {
            height: 100px;
        }
    `)};
`;

const MemberInner = styled.div`
  height: 100%;
`;
