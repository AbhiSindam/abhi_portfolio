import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { WritingEffect } from './WritingEffect';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <h1 style={{ color: "magenta" }}>{`Hi, I am Abhishek`}</h1>
      </SectionText>
      <WritingEffect />

      <Button
        onClick={() =>
          window.open(
            "https://docs.google.com/document/d/1rQQcsAkOlasuQwxf_OTWDoAqjWLxrJetPAeBKMZQt08/edit",
            "_blank"
          )
        }
      >
        View My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

