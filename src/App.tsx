import React from "react";
import { ProfileCard } from "./components/ProfileCard";
import { styled } from "styled-components";
import { Newsletter } from "./components/ Newsletter";

function App() {
  return (
    <Wrapper>
      <Header>
        Snap photos and share
        <br /> like never before
      </Header>
      <ProfileCard />
      <Newsletter />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 120px 0 25px;
`;

const Header = styled.div`
  padding: 0 80px;
  margin-bottom: 70px;
  font-family: Exo2;
  font-size: 48px;
  font-weight: normal;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: left;
  color: ${(props) => props.theme.black};
`;
