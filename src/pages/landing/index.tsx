import React from "react";
import styled from "styled-components";
import Menu from "./menu";

const Landing = () => {
  return (
    <Container>
      <Menu></Menu>
      <Section1>
        <GetStarted>
          <div className="leftSection">
            <div className="header">Create beautiful apps quickly.</div>
            <div className="description">
              Blockchain UI is a simple, modular and accessible component
              library that gives you the building blocks you need to build your
              own apps.
            </div>
            <div className="getStartedButton">
              <GetStartedButton>Get Started</GetStartedButton>{" "}
              <div className="contactUs">Or contact Us</div>
            </div>
          </div>
          <div className="rightSection"></div>
        </GetStarted>
        <OurPartners>
          <div className="header">Our Partners</div>
          <div className="partners">
            <Partner src="/assets/coinbase.svg" />
            <Partner src="/assets/circle.svg" />
            <Partner src="/assets/binance.svg" />
            <Partner src="/assets/stripe.svg" />
          </div>
        </OurPartners>

        <Features>
          <div className="header">Amazing Features</div>
          <div className="description">
            Less code and more time building a great experience for your
            customers.
          </div>
          <div className="features">
            <FeatureCard>
              {" "}
              <div className="featureIcon">
                <img src="/assets/feature1.svg" alt="simple_feature_icon" />
              </div>
              <div className="header">Beautiful</div>
              <div className="description">
                Customize any part of our components to match your project and
                create incredible designs.
              </div>
            </FeatureCard>
            <FeatureCard>
              <div className="featureIcon">
                <img src="/assets/feature1.svg" alt="simple_feature_icon" />
              </div>
              <div className="header">Responsive</div>
              <div className="description">
                Designed with responsiveness in mind. Modify components size and
                format with ease..
              </div>
            </FeatureCard>
            <FeatureCard>
              <div className="featureIcon">
                <img src="/assets/feature1.svg" alt="simple_feature_icon" />
              </div>
              <div className="header">Simple</div>
              <div className="description">
                Spend less time writing UI code and more time building a great
                experience for your customers.
              </div>
            </FeatureCard>
          </div>
        </Features>
      </Section1>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  height: 100%;
`;

const Section1 = styled.div`
  width: 100%;
  height: 100%;

  //   background: linear-gradient(
  //     335.93deg,
  //     #ffffff 30.99%,
  //     rgba(255, 255, 255, 0) 100%
  //   );
`;

const GetStarted = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
  background-color: lightgrey;

  .leftSection {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 150px;
    background-color: lightgrey;
  }

  .rightSection {
    width: 50%;
    height: 100%;
    padding: 0 150px;

    background-image: url("/assets/n.jpeg");
    background-size: cover;
    background-position: center;
  }

  .header {
    font-size: 80px;
    font-weight: 700;
  }

  .description {
    margin-top: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #475569;
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
    font-size: 16px;
    line-height: 28px;
    color: #475569;
  }
`;

const GetStartedButton = styled.div`
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
`;

const OurPartners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  padding: 0 150px;
  margin-top: 100px;

  .header {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 1.66667px;
    text-transform: uppercase;
    color: #8283d3;
  }

  .partners {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 62px 150px 0px 150px;
  }
`;

const Partner = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 150px;
  margin-top: 180px;

  .header {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    letter-spacing: -1px;
    color: #2d3766;
  }

  .description {
    margin-top: 20px;
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
    margin: 100px 0px;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 390px;
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
