import React, { useState, useRef, useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <br />
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Passionate software engineer, with strong design, problem-solving skills
        and in depth knowledge of Javascript, NodeJS, ExpressJS and MongoDB,
        seeking to work with a reputed technology driven firm.
      </SectionText>
    </Section>
  );
};

export default Timeline;
