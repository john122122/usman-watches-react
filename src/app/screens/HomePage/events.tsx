import React from "react";
import {Box, Container, Stack} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);


export function Events() {
    const events_list = [
        {
            title: "Galaxy",
            desc: "Hello everybody! In winter we have a nice discounts for the a new producs, Please anjoy :) ",
            author: "Usman",
            date: "2023.12.28",
            location: "South Korea, Busan 109-90",
            img:"/events/galaxy.jpeg",
        },
        {
            title: "Maestro",
            desc: "Hello everybody! In winter we have a nice discounts for the a new producs, Please anjoy :) ",
            author: "Merlin",
            date: "2023.12.16",
            location: "South Korea, Seoul 117-90",
            img:"/events/maestro.jpeg",
        },
        {
            title: "Lotte Department Store",
            desc: "Hello everybody! In winter we have a nice discounts for the a new producs, Please anjoy :) ",
            author: "Abrahm",
            date: "2023.12.24",
            location: "South Korea, Daegu 122-00",
            img:"/events/lotte_store.jpeg",
        },
        {
            title: "Hundai Department Store",
            desc: "Hello everybody! In winter we have a nice discounts for the a new producs, Please anjoy :) ",
            author: "Alen",
            date: "2023.12.19",
            location: "South Korea, Inchon 115-110",
            img:"/events/hundai_store.jpeg",
        },
    ];
  
  return (
    <div className={"events_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className={"category_title"}>Events</span>
          </Box>
          <Box className={"prev_next_frame_1"} justifyContent={"column"}>
                    <img
                      src={"/icons/next 1 copy.svg"}
                      className={"swiper-button-prev"}
                    />
                      <div className={"dot_frame_pagination swiper-pagination"}></div> 
                    <img
                      src={"/icons/next 4 copy.svg"}
                      className={"swiper-button-next"}
                      style={{ marginLeft: "20px", marginTop: "-22px"}}
                    />
            </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
            pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
            autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          >
          {events_list.map((value, number) => {
            return (
              <SwiperSlide className={"events_info_frame"}>
                <div className={"events_img"}>
                  <img src={value.img} className={"events_img"} />
                    </div>
                      <Box className={"events_desc"}>
                        <Box className={"events_bott"}>
                          <Box className={"bott_left"}>
                            <div className={"event_title_speaker"}>
                              <strong>{value.title}</strong>
                                <div className={"event_organizator"}>
                                  <img
                                    src={"/icons/men.svg"}
                                    style={{ width: "20px", marginRight: "10px" }}
                                  />
                                  <p className={"spec_text_author"}>{value["author"]}</p>
                                </div>
                              </div>
                              <p className={"text_desc"}
                                style={{ marginTop: "10px" }}
                              >
                                {" "}
                                {value.desc}{" "}
                              </p>
                              <div className={"bott_info"}
                              style={{ marginTop: "10px" }}
                            >
                            <div className={"bott_info_main"}>
                              <img
                                src={"/icons/Calendar.svg"}
                                style={{ marginRight: "10px" }}
                            />
                                {value.date}
                                  </div>
                                    <div className={"bott_info_main"}>
                                      <img
                                        src={"/icons/location.svg"}
                                        style={{ marginRight: "10px"}}
                                      />
                                        {value.location}
                                        </div>
                                      </div>
                                    </Box>
                                  </Box>
                              </Box>
                          </SwiperSlide>
                       );
                    })} 
                  </Swiper>
                </Stack>
        </Container>
    </div>
  );
}