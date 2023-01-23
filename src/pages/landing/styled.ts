import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  min-height: 0px;
  min-width: 0px;
  margin-top: 50px;
`;

export const IphoneMock = styled.img`
  height: 100%;
  max-width: auto;

  @media (max-width: 1200px) {
    height: 60%;
    width: auto;
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
    padding: 0 50px 0 150px;

    @media (max-width: 1200px) {
      padding: 0 50px;
    }

    @media (max-width: 1000px) {
      width: 100%;
      padding: 0 50px;
    }
  }

  .rightSection {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0px;
    overflow: hidden;
    @media (max-width: 1000px) {
      display: none;
    }

    // background-color: red;
    // background-image: url("/assets/iphone_mockup.jpg");
    // background-size: cover;
    // background-position: center;
  }

  .header {
    font-size: 80px;
    font-weight: 700;
    color: #f5f5f7;

    @media (max-width: 1200px) {
      font-size: 60px;
    }

    @media (max-width: 1000px) {
      display: flex;
      width: 100%;
      align-items: center;
      text-align: center;
      justify-content: center;
      font-size: 60px;
    }
  }

  .description {
    margin-top: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #f5f5f7;

    @media (max-width: 1200px) {
      font-size: 16px;
    }

    @media (max-width: 1000px) {
      display: flex;
      text-align: center;
      font-size: 16px;
      width: 70%;
    }
  }

  .getStartedSection {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 25px;
    width: 100%;

    @media (max-width: 1000px) {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }

  .contactUs {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #2797fe;

    :hover {
      cursor: pointer;
    }

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 0px;
      width: 100%;
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

    @media (max-width: 1200px) {
      margin-top: 20px;
      font-size: 40px;
    }
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
    // @media (max-width: 1200px) {
    //   display: flex;
    //   flex-wrap: wrap;
    //   margin: 50px 0px;
    // }

    @media (max-width: 1200px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: 50px 0px;
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
    height: 150px;
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

    @media (max-width: 1200px) {
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .description {
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #475569;
    opacity: 0.8;

    @media (max-width: 1200px) {
      font-size: 16px;
    }
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

export const Library = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 100%;
  padding: 50px 0px;

  min-height: 600px;
  background-color: #000000;
  // margin: 50px 100px;

  .subHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 61px;
    text-align: center;
    letter-spacing: -1px;
    color: #fff;
    margin: 200px 10px 20px 10px;

    @media (max-width: 1200px) {
      font-size: 32px;
      margin: 100px 10px 20px 10px;
    }
  }

  .titleHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    letter-spacing: -1px;
    color: #2d3766;
    margin-bottom: 30px;

    background: -webkit-linear-gradient(45deg, #6fbbc9, #b1a0f5, #ed434c);
    background-color: red;
    // background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1200px) {
      font-size: 40px;
    }
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
