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
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    ...CarouselDots({
      zIndex: 1,
    }),
  };
  console.log(media, "media");
  return (
    <Library>
      {/* <div className="titleHeader">Explore Our Library</div> */}

      {media ? (
        <div style={{ maxWidth: "80%",margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center"}}>
          {showcase.map((item) => {
            const { image, title, description } = item;
            return (
              <div style={{marginTop: 50, width: "100%", }}>
                <ImageV2 alt={title} src={image} style={{ width: "100%", objectFit: "contain",borderRadius: 10, overflow: "hidden",  }} />
              </div>
            );
          })}
        </div>
      ) : (
        
          <Slider ref={carouselRef} {...settings}>
            {showcase.map((app, index) => (
              <CarouselItem key={app.id} item={app} isActive={index === currentIndex} />
            ))}
          </Slider>
        
      )}
    </Library>
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
