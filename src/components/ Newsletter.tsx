import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getBackgroundData } from "../apis/BackgroundApi";

export const Newsletter = () => {
  const [background, setBackground] = useState<string>("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    setIsValid(regex.test(currentEmail));
  };

  useEffect(() => {
    const savedBackground = localStorage.getItem("backgroundUrl");

    if (savedBackground) {
      setBackground(savedBackground);
    } else {
      const fetchBackground = async () => {
        try {
          const imageUrl = await getBackgroundData();
          setBackground(imageUrl);
          localStorage.setItem("backgroundUrl", imageUrl);
        } catch (error) {
          if (isAxiosError(error)) throw new Error(error.response?.data);
        }
      };
      fetchBackground();
    }
  }, []);

  return (
    <Wrapper background={background}>
      <ContentOverlay>
        <h2>Sed ut perspiciatis unde omnis</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary.
        </p>
        <hr />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore.
        </p>
        <Form className="form-el">
          <h3>Subscribe to our newsletter</h3>
          <InputWrap $isValid={isValid} $isEmail={email}>
            <label htmlFor="email">
              <img src="/images/submit.png" alt="Submit" />
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={validateEmail}
              required
            />
            {email !== "" && !isValid && (
              <InvalidMessage>Please enter a valid email!</InvalidMessage>
            )}
          </InputWrap>
        </Form>
      </ContentOverlay>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ background: string }>`
  width: 100%;
  height: 740px;
  margin: 110px 0 0;
  object-fit: contain;
  background-image: ${({ background }) =>
    background ? `url(${background})` : "none"};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  * {
    color: ${({ theme }) => theme.white};
    font-family: Montserrat;
  }
  h2 {
    margin: 0 0 23px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.36px;
    line-height: 1.67;
    letter-spacing: -0.27px;
  }
  p:nth-of-type(1) {
    margin-top: 23px;
    font-weight: normal;
    font-size: 18px;
    color: ${({ theme }) => theme.white_80};
  }
  p:nth-of-type(2) {
    width: 100%;
    height: 43px;
    margin-bottom: 97px;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.21px;
    color: ${({ theme }) => theme.white_60};
  }
`;

const ContentOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.black_50};
  padding: 152px 80px;
  hr {
    height: 1px;
    margin: 32px 0;
    border: 0;
    background-color: ${({ theme }) => theme.white_50};
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    font-family: "Exo2";
  }
`;

const InputWrap = styled.div<{ $isValid: boolean; $isEmail: string }>`
  width: 500px;
  label {
    display: block;
    width: 100%;
    position: relative;
    img {
      position: absolute;
      top: 25px;
      right: 10px;
      z-index: 1;
      ${({ $isValid, $isEmail }) =>
        $isEmail !== ""
          ? $isValid
            ? css`
                opacity: 100%;
              `
            : css`
                opacity: 50%;
              `
          : css`
              opacity: 50%;
            `};
    }
  }
  input {
    font-weight: normal;
    width: 100%;
    height: 50px;
    flex-grow: 0;
    margin: 16px 0 0;
    padding: 4px 10px;
    border-radius: 7px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid ${({ theme }) => theme.white};
    background-color: rgba(255, 255, 255, 0.1);
    &::placeholder {
      color: ${({ theme }) => theme.white};
    }
    ${({ $isValid, $isEmail }) =>
      $isEmail !== ""
        ? $isValid
          ? css`
              border-color: ${({ theme }) => theme.green};
            `
          : css`
              border-color: ${({ theme }) => theme.orange};
            `
        : css`
            border-color: ${({ theme }) => theme.white};
          `};
  }
`;

const InvalidMessage = styled.p`
  width: 100%;
  height: 19px;
  margin: 9px 302px 0 16px;
  font-family: Exo2;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-align: left;
  color: ${({ theme }) => theme.orange} !important;
`;
