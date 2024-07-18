/* eslint-disable eqeqeq */

import "./Accordions.css";
import React from "react";
import { Reveal } from "react-reveal";
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { accordionItems: [] };
    this.click = this.click.bind(this);
  }
  componentWillMount() {
    let accordion = [];

    this.props.data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false,
      });
    });

    this.setState({
      accordionItems: accordion,
    });
  }

  click(i) {
    const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(i);

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({ accordionItems: newAccordion });
  }

  render() {
    const sections = this.state.accordionItems.map((i, index) => (
      <Reveal
        left={index % 2 == 0 ? true : false}
        right={index % 2 == 0 ? false : true}
      >
        <div key={this.state.accordionItems.indexOf(i)}>
          <div
            style={this.props?.style?.title || {}}
            className="title"
            onClick={() => this.click(i)}
          >
            <div className="arrow-wrapper">
              <span className="title-text">{i.title}</span>
              <span
                style={this.props?.style?.icons || {}}
                className={
                  i.open ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"
                }
              ></span>
            </div>
          </div>
          <div
            style={this.props?.style?.contentOpen || {}}
            className={i.open ? "content content-open" : "content"}
          >
            <div
              className={
                i.open ? "content-text content-text-open" : "content-text"
              }
            >
              {" "}
              {i.content}
            </div>
          </div>
        </div>
      </Reveal>
    ));

    return <div className="accordion">{sections}</div>;
  }
}

export default Accordion;
