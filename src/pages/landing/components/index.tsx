import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { m } from "framer-motion";
import _mock from "_mock";
import { Components } from "../styled";
import { MotionContainer, varFade } from "animate";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import ImageV2 from "components/ImageV2";
import Card from "@mui/material/Card";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { CarouselArrows, CarouselDots } from "components/carousel";

const OverlayStyle = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: "absolute",
  // backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

const ComponentsSection = ({ ...other }) => {
  const theme = useTheme();
  const list = [...Array(4)].map((_, index) => ({
    id: _mock.id(index),
    title: ["Charts", "Credits Cards", "NFT Cards"][index],
    description: _mock.text.title(index),
    image: "/assets/nft5.webp",
  }));

  const carouselRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState(list.length - 1);

  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    ...CarouselDots({
      zIndex: 9,
      top: 24,
      left: 24,
      position: "absolute",
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  console.log(list);
  return (
    <Components>
      <div className="titleHeader">Explore Our Library</div>

      <Card {...other} style={{ backgroundColor: "black" }}>
        <Slider ref={carouselRef} {...settings}>
          {list.map((app, index) => (
            <CarouselItem key={app.id} item={app} isActive={index === currentIndex} />
          ))}
        </Slider>

        <CarouselArrows
          onNext={handleNext}
          onPrevious={handlePrevious}
          spacing={0}
          sx={{
            top: 1,
            right: 0,
            position: "absolute",
            "& .arrow": {
              p: 0,
              width: 32,
              height: 32,
              opacity: 0.48,
              color: "common.white",
              "&:hover": { color: "common.white", opacity: 1 },
            },
          }}
        />
      </Card>

      {/* <div className="subHeader">Charts</div>
      <div className="carousel">
        <img src="/assets/components/areaChart3.png" alt="area_chart" />
        <img src="/assets/components/pieChart2.png" alt="nft_card" />
      </div>

      <div className="subHeader">NFT Cards</div>
      <div className="carousel">
        <img src="/assets/nft5.webp" alt="nft_card" />
        <img src="/assets/nft9.jpeg" alt="nft_card" />
        <img src="/assets/nft1.jpeg" alt="nft_card" />
      </div>

      <div className="subHeader">Credit Debit Cards</div>
      <div className="carousel">
        <img src="/assets/components/creditCard.png" alt="creditCard" />
        <img src="/assets/components/creditCard2.png" alt="creditCard" />
      </div> */}
      {/* <div className="subHeader">More</div> */}
    </Components>
  );
};

export default ComponentsSection;

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
    <Box sx={{ position: "relative" }}>
      <CardContent
        component={MotionContainer}
        animate={isActive}
        action
        sx={{
          bottom: 0,
          width: 1,
          zIndex: 9,
          textAlign: "left",
          position: "absolute",
          color: "common.white",
        }}
      >
        <m.div variants={varFade().inRight}>
          <Typography variant="overline" component="div" sx={{ mb: 1, opacity: 0.48 }}>
            Component
          </Typography>
        </m.div>

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

      <OverlayStyle />
      {/* <div style={{ backgroundColor: "red", height: "600px", width: "500px" }}></div> */}
      <ImageV2 alt={title} src={image} style={{ width: "auto", height: "500px" }} />
    </Box>
  );
}
