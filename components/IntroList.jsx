import React from "react";
import styled from "styled-components";

const ListItem = styled.div({
  display: "flex",
  alignItems: "center",
  marginLeft: "8rem"
});

const Icon = styled.img({
  height: "50px",
  width: "120px"
});

const ItemText = styled.p({
  margin: "1rem 1rem"
});

const Emoji = styled.div({
  width: "120px"
});

const SocialIcon = styled.img({
  height: "50px",
  margin: "5px"
});

const IntroList = () => (
  <>
    <ListItem>
      <Icon
        src={
          "https://aws-athene-workshop.netlify.com/0f261578cc5e4e90fe25429ea78b5e9f.svg"
        }
      />
      <ItemText>Omaha, NE</ItemText>
    </ListItem>
    <ListItem>
      <Emoji>👨🏻‍💻</Emoji>
      <ItemText>JavaScript Developer</ItemText>
    </ListItem>
    <ListItem>
      <SocialIcon
        src={
          "https://aws-athene-workshop.netlify.com/d00ce21957e1bc4c45f9e3ca57c14826.svg"
        }
      />
      <SocialIcon
        src={
          "https://aws-athene-workshop.netlify.com/438c17272c5f0e9f4a6da34d3e4bc5bd.png"
        }
      />
      <ItemText>@JakePartusch</ItemText>
    </ListItem>
  </>
);
export default IntroList;
