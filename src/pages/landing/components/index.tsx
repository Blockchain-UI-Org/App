import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { m } from "framer-motion";
import { Components } from "../styled";
import { MotionContainer, varFade } from "animate";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import ImageV2 from "components/ImageV2";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import { CarouselArrows, CarouselDots } from "components/carousel";
import { showcase } from "./showcase";

export default function ComponentsSection({ ...other }) {
  const theme = useTheme();

  const carouselRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState(showcase.length - 1);

  const settings = {
    adaptiveHeight: true,
    centerMode: true,
    speed: 800,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      // {
      //   breakpoint: 1000,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     initialSlide: 1,
      //     infinite: true,
      //     dots: true,
      //     centerPadding: "20px",
      //   },
      // },
    ],
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    ...CarouselDots({
      zIndex: 1,
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Components>
      <div className="titleHeader">Explore Our Library</div>

      <Card {...other} style={{ backgroundColor: "black" }}>
        <Slider ref={carouselRef} {...settings}>
          {showcase.map((app, index) => (
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
          zIndex: 9,
          textAlign: "left",
          position: "absolute",
          color: "common.white",
        }}
      >
        {/* <Typography variant="overline" component="div" sx={{ mb: 1, opacity: 0.48 }}>
          Component
        </Typography> */}

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

      {/* <div style={{ backgroundColor: "red", height: "600px", width: "500px" }}></div> */}
      <ImageV2 alt={title} src={image} style={{ width: "auto", height: "350px", borderRadius: "20px" }} />
    </Box>
  );
}
