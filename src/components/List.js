import React from "react";
import { Reveal } from "react-reveal";
import "./List.css";
export default function List(props) {
  const { items } = props;
  return (
    <main>
      <ol class="gradient-list">
        {
          // eslint-disable-next-line eqeqeq
          items.map((item, index) => (
            <Reveal
              left={index % 2 === 0 ? true : false}
              right={index % 2 === 0 ? false : true}
            >
              <li>{item}</li>
            </Reveal>
          ))
        }
      </ol>
    </main>
  );
}
