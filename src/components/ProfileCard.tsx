import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { IProfileCard } from "../types/ProfileCard";

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
    <div>
      {profileList?.map((profile) => (
        <div key={profile.id}>
          <img src={profile.img} alt={profile.title} />
          <h2>{profile.title}</h2>
          <p>{profile.content}</p>
          <Button>Learn more</Button>
        </div>
      ))}
    </div>
  );
};

const Button = styled.button`
  height: 30px;
  flex-grow: 0;
  margin: 24px 0 0;
  font-family: Exo2;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.27px;
  text-align: left;
  color: var(--azure);
`;
