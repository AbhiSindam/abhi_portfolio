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
        <h1 style={{ color: "magenta" }}>{`Hi, I am Akshaykumar`}</h1>
      </SectionText>
      <WritingEffect />

      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1fzTQbu-WPL3FvsH7mj3e9fSDKWSJlkiq/view?usp=view",
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

