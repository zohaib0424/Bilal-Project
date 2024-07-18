import React from "react";
// import Logo from "../img/logo.png";
import OpenSea from "../Assets/opensea.png";
import Twitter from "../Assets/Twitter.png";
// import Instagram from "../img/instagram.svg";
import Discord from "../Assets/Discord.png";
export default function Footer2(){


    return (
        <div style={{padding:"2rem", textAlign:"center", backgroundColor:"#61DC97", justifyContent:"space-between"}} className="row">
            <p style={{color:"white", fontSize:20}}>
              © Invisible Bears 2022. All rights reserved
            </p>
            <p style={{color:"white", fontSize:20}}>
                  Powered by WobbleVerse
            </p>    
            <div className="right hide-mobile row" >
           
            <a style={{cursor:"pointer", marginRight:10}}  href="https://discord.gg/k8q6NWGpdF"><img src={Discord} width={27} height={27}/></a>    
              <a style={{cursor:"pointer", marginRight:10}}   href="https://twitter.com/Terraverse_NFT"><img src={Twitter}/></a>               
              <a style={{cursor:"pointer", marginRight:10, }} href="https://opensea.io/collection/invisiblebear-1"><img src={OpenSea} width={25} height={25}/></a>                        
                 
          </div>    
        </div>
    );
}