import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { IProfileCard } from "../types/profile";

export const ProfileCard = () => {
  const [profileList, setProfileList] = useState<IProfileCard[]>([]);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const res = await axios.get("/db/profileData.json");
        const data = res.data.data;
        setProfileList(data);
      } catch (error) {
        if (isAxiosError(error)) throw new Error(error.response?.data);
      }
    };
    getProfileData();
  }, []);

  return (
    <Wrapper>
      {profileList
        ?.sort(() => Math.random() - 0.5)
        .map((profile) => (
          <Profile key={profile.id}>
            <img src={profile.img} alt={profile.title} />
            <TextWrap>
              <h2>{profile.title}</h2>
              <p>{profile.content}</p>
              <Button>LEARN MORE</Button>
            </TextWrap>
          </Profile>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 80px;
  margin-bottom: 110px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
  font-family: Montserrat;
  color: ${(props) => props.theme.black};
  h2 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.36px;
  }
  p {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.67;
    letter-spacing: -0.27px;
    color: ${(props) => props.theme.black_80};
  }
`;

const Profile = styled.div``;

const Button = styled.div`
  width: 100%;
  height: 30px;
  font-family: Exo2;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.67;
  letter-spacing: -0.27px;
  text-align: left;
  color: ${(props) => props.theme.azure};
`;
