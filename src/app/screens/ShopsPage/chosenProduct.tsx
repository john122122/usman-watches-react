import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Stack } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Marginer from '../../components/marginer';
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

const chosen_list = Array.from(Array(3).keys());

export function ChosenProduct() {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    return (
        <div className="chosen_product_page">
            <Container className="product_container">
                <Stack className="chosen_product_slider">
                    <Swiper
                        className="product_swiper"
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        // thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                    >
                        {chosen_list.map((ele) => {
                          const image_path = `/suits/E6-Clissold J H & Son - Medium Gray - High Twist - Neo Cut-16221132-NEOST-01-SS23 (3)t.jpg`;
                        return (
                            <SwiperSlide>
                                <img
                                  style={{ width: "90%", height: "700px"}}
                                  src={image_path}
                                />
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                    
                    {/* 1.2 div: small pictures */}
                    <div className={"one_product_pics"}>
                        <img className="one_product_pic" src="/suits/E6-Clissold J H & Son - Medium Gray - High Twist - Neo Cut-16221132-NEOST-01-SS23 (3)t.jpg" />
                        <img className="one_product_pic" src="/suits/E6-Clissold J H & Son - Medium Gray - High Twist - Neo Cut-16221132-NEOST-01-SS23 (3)t.jpg" />
                        <img className="one_product_pic" src="/suits/E6-Clissold J H & Son - Medium Gray - High Twist - Neo Cut-16221132-NEOST-01-SS23 (3)t.jpg" />
                    </div>
                </Stack>

                <Stack className={"chosen_product_info_container"}>
                  <Box className={"chosen_product_info_box"}>
                        <strong className={"product_txt"}>Masaldor Rich Men`s suit</strong>
                        <span className={"shop_name"}>Salamon</span>
                        <Box className={"rating_box"}>
                            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                            <div className={"evalution_box"} style={{ flexDirection: "row"}}>
                                <div
                                    style={{
                                        display: "flex",
                                        width: "300px",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginRight: "20px"
                                    }}
                                >
                                    <Checkbox
                                        style={{ marginLeft: "136px" }}
                                        {...label}
                                        icon={<FavoriteBorder />}
                                        checkedIcon={<Favorite style={{ color: "red" }} />}
                                        /* @ts-ignore*/
                                        checked={true}
                                    />
                                    <span>
                                        15ta
                                    </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginLeft: "240px", marginTop: "-33px"}}>
                                    <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                                    <span>100ta</span>
                                </div>
                            </div>
                        </Box>
                        <p className={"product_desc_info"}>
                          Our core suits boast half-canvas
                          construction and 100% Australian merino wool,
                          ensuring top-notch quality and value for any man's wardrobe.
                          The style includes a 2-button jacket with notch lapels,
                          flat-front trousers for a timeless look.
                          Sartorial-inspired features include a curved
                          Italian-style barchetta breast pocket, sous bras underarm shields,
                          and a Japanese Bemberg cupro lining.    
                        </p>
                        <Marginer
                          //direction="horizantal"
                          height="1"
                          width="100%"
                          bg="#000000"
                        />
                        <div className={"product_price_box"}>
                          <span>Price</span>
                          <span>$270</span>
                        </div>
                        <div className={"button_box"}>
                          <Button variant="contained">Add to Cart</Button>
                        </div>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}