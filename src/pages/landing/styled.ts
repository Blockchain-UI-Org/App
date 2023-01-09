import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const IphoneMock = styled.img`
  height: 100%;
  width: auto;
`;

export const GetStarted = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
  background-color: #2c2c2c;
  width: 100%;

  .leftSection {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 150px;
  }

  .rightSection {
    display: flex;
    justify-content: center;
    align-items: center;

    // background-color: red;
    // background-image: url("/assets/iphone_mockup.jpg");
    // background-size: cover;
    // background-position: center;
  }

  .header {
    font-size: 80px;
    font-weight: 700;
    color: #f5f5f7;
  }

  .description {
    margin-top: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #f5f5f7;
  }

  .getStartedButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    width: 100%;
  }

  .contactUs {
    margin-left: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #2797fe;

    :hover {
      cursor: pointer;
    }
  }
`;

export const GetStartedButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2d3766;
  border-radius: 50px;
  width: 159px;
  height: 59px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;

  :hover {
    cursor: pointer;
  }
`;

export const Partners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  padding: 0 450px;
  width: 50%;

  .header {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 1.66667px;
    text-transform: uppercase;
    color: #8283d3;
    margin-bottom: 50px;
  }

  .partners {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Partner = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 650px;
  width: 60%;

  .titleHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    letter-spacing: -1px;
    color: #2d3766;

    background: -webkit-linear-gradient(45deg, #6fbbc9, #b1a0f5, #ed434c);

    // background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;

    color: #2d3766;
  }

  .features {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 50px 0px;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 264px;
  padding: 0 40px;

  background: linear-gradient(180deg, #e7e8fb 0%, rgba(242, 244, 249, 0) 100%);
  border-radius: 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: left;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    width: 100%;

    color: #2d3766;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #475569;
    opacity: 0.8;
  }

  .featureIcon {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
  }
`;

export const Components = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  width: 100%;
  min-height: 600px;
  background-color: #000000;
  margin: 50px 0 400px 0px;

  .titleHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    letter-spacing: -1px;
    color: #2d3766;

    background: -webkit-linear-gradient(45deg, #6fbbc9, #b1a0f5, #ed434c);

    // background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;

    color: #f5f5f7;
  }

  .carousel {
    margin: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      width: 31%;
      height: auto;
      border-radius: 50%;

      :hover {
        cursor: pointer;
      }
    }
  }
`;
