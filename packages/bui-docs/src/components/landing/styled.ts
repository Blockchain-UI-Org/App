import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 992px) {
    max-width: 920px;
  }

  @media (min-width: 1400px) {
    max-width: 1150px;
  }

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* height: 100%;
  overflow: hidden;
  min-height: 0px;
  min-width: 0px;  */
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

    @media (max-width: 1000px) {
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
  margin: 20px 20px;

  @media (max-width: 1200px) {
    width: 100px;
    margin: 20px 10px;
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
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1200px) {
      font-size: 32px;
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
