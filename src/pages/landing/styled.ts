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
  max-width: auto;

  @media (max-width: 1200px) {
    height: 80%;
  }

  @media (max-width: 1000px) {
    height: 70%;
  }

  @media (max-width: 700px) {
    display: none;
  }
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
    width: 50%;
    height: 100%;
    display: none;
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

    @media (max-width: 1200px) {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const Partner = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;

  @media (max-width: 1200px) {
    width: 100px;
    margin: 20px 0px;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 650px;
  width: 100%;
  background-color: #f5f5f7;

  .titleHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    letter-spacing: -1px;
    color: #00000;
  }

  .description {
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #2d3766;

    @media (max-width: 1200px) {
      display: flex;

      color: grey;
    }
  }

  .features {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 50px 0px;

    @media (max-width: 1200px) {
      display: flex;
      flex-wrap: wrap;

      margin: 20px 20px;
    }

    @media (max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 20px;
    }
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  height: 264px;
  padding: 20px 40px;
  margin: 0 10px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: #fff;
  border-radius: 20px;

  @media (max-width: 1200px) {
    background: #ffff;
    min-height: 100px;
    margin: 10px 10px;
  }

  .header {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: left;
    background: -webkit-linear-gradient(45deg, #6fbbc9, #b1a0f5, #ed434c);

    // background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    width: 100%;

    color: #2d3766;
  }

  .description {
    display: flex;
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

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

export const Components = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  min-height: 900px;
  background-color: #000000;
  margin: 50px 10px;
  overflow: hidden;

  .subHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 61px;
    text-align: center;
    letter-spacing: -1px;
    color: #fff;
    margin: 200px 10px 20px 10px;
  }

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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    overflow: hidden;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
    }

    img {
      width: auto;
      height: 450px;
      border-radius: 15px;
      margin: 0 20px;

      @media (max-width: 1200px) {
        margin: 30px;
        width: 100%;
        height: auto;
      }

      :hover {
        cursor: pointer;
      }
    }
  }
`;
