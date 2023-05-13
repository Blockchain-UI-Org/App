import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { m } from "framer-motion";
import { Library } from "../styled";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { showcase } from "./showcase";
import { CarouselDots } from "../../carousel";
import { MotionContainer, varFade } from "../../animate";
import ImageV2 from "../../ImageV2";
import { Heading } from "../../Heading/Heading";
import "./ComponentSection.scss";
import { GradientButton } from "../../Button/GradientButton";
import { library_url } from "@site/src/config";

export default function ComponentsSection({ ...other }) {
  const theme = useTheme();

  const carouselRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState(showcase.length - 1);
  const media = useMediaQuery("(max-width: 600px)");
  const settings = {
    adaptiveHeight: true,
    centerMode: true,
    speed: 800,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    className: "slider variable-width",
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          dots: false,
        },
      },
    ],
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  return (
    <section className="componentSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="gradient-hr">
              <Heading>EXPLORE OUR LIBRARY</Heading>
            </div>
          </div>
        </div>
      </div>
      <Library className="sliderWrapper">
        <div style={{ marginTop: "50px", boxShadow: "initial" }}>
          <Slider ref={carouselRef} {...settings}>
            {showcase.map((app, index) => (
              <CarouselItem key={app.id} item={app} isActive={index === currentIndex} />
            ))}
          </Slider>
        </div>
      </Library>
      <div className="container libraySection">
        <div className="row justify-content-center">
          <div className="col-sm-6 d-flex flex-column align-items-center text-center">
            <h3>It’s time to bridge the digital and physical.</h3>
            <GradientButton
              onClick={() => {
                window.open(library_url, "_blank");
              }}
            >
              BROWSE LIBRARY
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

type ItemProps = {
  id: string;
  image: string;
  title: string;
  description: string;
};

type CarouselItemProps = {
  item: ItemProps;
  isActive?: boolean;
};

function CarouselItem({ item, isActive }: CarouselItemProps) {
  const { image, title, description } = item;

  return (
    <Box sx={{ position: "relative", margin: "0 20px" }}>
      <CardContent
        component={MotionContainer}
        animate={isActive}
        action
        sx={{
          bottom: 0,
          width: 1,
          zIndex: 2,
          textAlign: "left",
          position: "absolute",
          color: "common.white",
        }}
      >
        <m.div variants={varFade().inRight}>
          <Link underline="none">
            <Typography variant="h5" gutterBottom noWrap>
              {title}
            </Typography>
          </Link>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Typography variant="body2" noWrap>
            {description}
          </Typography>
        </m.div>
      </CardContent>

      <ImageV2 alt={title} src={image} style={{ width: "auto", height: "350px", borderRadius: "20px" }} />
    </Box>
  );
}
