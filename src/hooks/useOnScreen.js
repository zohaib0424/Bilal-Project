/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
export default function useOnScreen(ref) {
  const handlInView = (id) => {
    // #about
    // Collections.js:29 #collections
    // Collections.js:29 #benifits
    // Collections.js:29 #roadmap
    // Collections.js:29 #team
    // Collections.js:29 #faq
    let containers = document.querySelectorAll(
      ".navbar .navbar-menu .navbar-nav > li > a"
    );
    Array.from(containers).forEach((item) => {
      // console.log(item.getAttribute('href'));
      let href = item.getAttribute("href");
      if (href == "#" + id) {
        console.log("", href, id);
        item.className = "header-active";
      } else {
        item.className = "";
      }
    });
  };
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return [isIntersecting, handlInView];
}
