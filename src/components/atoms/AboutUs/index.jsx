"use client";

import styled from "styled-components";
import { Montserrat, Roboto } from 'next/font/google'

const AboutContent = {
  id: 1,
  heading: "About Us",
  content:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  image:
    "https://res.cloudinary.com/dh4qhdszo/image/upload/v1706089664/athena/try5yry14anl9kdlrxxl.png",
};

const AboutUsContainer = styled.div`
  width: 100%;
  padding: 48px 150px;
  background-color: #000;
  border-radius: 80px 80px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  @media (max-width: 767px) {
    padding: 48px 20px;
    gap: 50px;
  }
`;

const montserratFont = Montserrat({ subsets: ['latin'] })

const AboutUsHeading = styled.h2`
  font-size: 2em;
  margin-bottom: 16px;
  color: #267dff;
  font-size: 64px;
  font-weight: 600;
  font-family: ${montserratFont};
  word-wrap: break-word;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const robotoFont = Roboto({ subsets: ['latin'] , weight : '400'})

const AboutUsContent = styled.p`
  text-align: left;
  margin: 0 auto 24px;
  color: #fff;
  font-size: 24px;
  font-family: ${robotoFont};
  font-weight: 400;
  line-height: 35.65px;
  text-align: center; 
  @media (max-width: 767px) {
    font-size: 16px;
    margin: 0 auto   }
`;

const ImageContainer = styled.div`
  background-color: #fff;
  border-radius: 6px;
  margin: auto -150px;  
  @media (max-width: 767px) {
    width: 100%;
    background-color: transparent;
  }
`;

const AboutUsImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer id="about">
      <AboutUsHeading>About Us</AboutUsHeading>
      <AboutUsContent>{AboutContent.content}</AboutUsContent>
      <ImageContainer>
        <AboutUsImage src={AboutContent.image} alt={AboutContent.heading} />
      </ImageContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
