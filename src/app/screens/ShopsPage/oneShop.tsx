import React from 'react';
import { Box ,Button, Checkbox} from "@mui/material";
import { Container, Stack } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "@mui/material/Badge";
import { Favorite, FavoriteBorder, WidthFull } from "@mui/icons-material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";

const shop_list = Array.from(Array(10).keys());
const product_list = Array.from(Array(12).keys());

export function OneShop () {
    return(
      <div className="single_shop">
        <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
                <Stack className={"avatar_big_box"}>
                    <Box className={"top_text"}>
                            <p>Prada</p>
                        <Box className={"Single_search_big_box"}>
                            <form className={"Single_search_form"} action={""} method={""}>
                                <input 
                                    type={"search"}
                                    className={"Single_searchInput"}
                                    name={"Single_resSearch"}
                                    placeholder={"Search"}
                                />
                                <Button
                                    className={"Single_button_search"}
                                    variant="contained"
                                    endIcon={<SearchIcon />}
                                >
                                    Search
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Stack>

                <Stack
                   style={{ width: "100%", display: "flex" }}
                   flexDirection={"row"}
                   sx={{ mt: "35px" }}
                >
                   <Box className={"prev_btn shop-prev"}>
                     <ArrowBackIosNewIcon
                        sx={{ fontSize: 40, mt: "41px" }}
                        style={{ color:  "black"}} 
                    />
                    </Box> 
                      <Swiper
                        className={"shop_avatars_wrapper"}
                        slidesPerView={7}
                        centeredSlides={false}
                        spaceBetween={30}
                        navigation={{
                          nextEl: ".shop-next",
                          prevEl: ".shop-prev",
                        }}
                      >
                       {shop_list.map((ele, index) => {
                           return (
                               <SwiperSlide
                                   style={{ cursor: "pointer" }}
                                   key={index}
                                   className={"shop_avatars"}
                               >
                                   <img src={"/shops/zara-logo-svgrepo-com.svg"} />
                                   <span>Zara</span>
                               </SwiperSlide>
                           );
                       })}
                      </Swiper>
                      <Box
                      className={"next_btn shop-next"}
                            style={{ color: "black" }}
                            sx={{ fontSize: 40, mt: "-24px" }}
                      >
                          <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                      </Box>
                </Stack>

                <Stack 
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"flex-end"}
                width={"90%"}
                sx={{ mt: "65px"}}
                >
                    <Box className={"product_filter_box"}>
                        <Button variant={"contained"} color="secondary">
                            new
                        </Button> 
                        <Button variant={"contained"} color="secondary">
                            price
                        </Button>
                        <Button variant={"contained"} color="secondary">
                            likes
                        </Button>
                        <Button variant={"contained"} color="secondary">
                            views
                        </Button>
                    </Box>
                </Stack>

                <Stack
                   style={{ display: "flex", minHeight: "600px"}}
                   flexDirection={"row"}
                >
                        <Stack
                            className={"product_category_box"}
                            style={{ width: "25%"}}
                        >
                        <div className={"product_category_main"}>
                            <Button variant={"contained"} color="secondary">
                                Others
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shirts
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shoes
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Accessories
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Trousers
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Outerwear
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Others
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shirts
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shoes
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Accessories
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Trousers
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Outerwear
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Others
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shirts
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shoes
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Accessories
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Trousers
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Outerwear
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Others
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shirts
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shoes
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Accessories
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Trousers
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Outerwear
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Others
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shirts
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Shoes
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Accessories
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Trousers
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                Outerwear
                            </Button>
                        </div>
                    </Stack>

                    <Stack className={"product_wrapper"} style={{ width: "75%"}} >
                        {product_list.map((ele, index) => {
                          const sale_volume = "15%";


                        return (
                             <Box className={"product_box"} key={`${index}`}>
                               <Box className={"product_img"}
                               sx={{
                                   backgroundImage: `url("/suits/8741--TT.jpg")`,
                               }}
                               >
                                   <div className={"product_sale"}>{sale_volume}</div>
                                   <Button
                                   className={"like_view_btn"}
                                   style={{ left: "36px" }}
                                   >
                                       <Badge badgeContent={8} color="primary">
                                           <Checkbox
                                             icon={<FavoriteBorder style={{ color: "white" }} />}
                                             id={`${index}`}
                                            checkedIcon={<Favorite style={{ color: "red" }} />} 
                                             /*@ts-ignore*/
                                            checked={true}
                                            />
                                       </Badge>
                                   </Button>
                                   <Button className={"view_btn"}>
                                       <img 
                                       src={"/icons/cart-shop-ecommerce-svgrepo-com.svg"}
                                       style={{ display: "flex", width: "30px", height: "30px"}}
                                       />
                                   </Button>
                                   <Button
                                   className={"like_view_btn"}
                                   style={{ right: "36px"}}
                                   >
                                       <Badge badgeContent={1000} color="primary">
                                           <Checkbox
                                           icon={
                                               <RemoveRedEyeIcon style={{ color: "white" }} />
                                           }
                                           />
                                       </Badge>
                                   </Button>
                             </Box>  
                             <Box className={"product_desc"}>
                                 <span className={"product_title_text"}>Deodatus Sunglasses</span>
                                 <div className={"product_desc_text"}>
                                     $480
                                 </div>
                                 </Box>
                             </Box>
                          );
                        })}
                    </Stack>
                </Stack>
            </Stack>
        </Container>

        <div className={"review_for_shop"}>
            <Container
            sx={{ mt: "100px"}}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            >
                <Box className={"category_title"}>Our Happy Friends</Box>
                <Stack
                flexDirection={"row"}
                display={"flex"}
                justifyContent={"space-between"}
                width={"100"}
                >
                    {Array.from(Array(4).keys()).map((ele, index) => {
                        return (
                            <Box className={"review_box"} key={index}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <img
                                    src={"/community/GettyImages-998449832.jpg"}
                                    className={"review_img"}  
                                    />
                                </Box>


                                <span className={"review_name"}>Tom Cruz</span>
                                <span className={"review_name_user"}>customer</span>
                                <p className={"review_desc"}>
                                    Our suit jackets feature multiple interior
                                    suits the best value in menswear.
                                </p>
                                <div className={"review_stars"}>
                                    <StarIcon style={{ color: "#F2BD57" }} />
                                    <StarIcon style={{ color: "#F2BD57" }} />
                                    <StarIcon style={{ color: "#F2BD57" }} />
                                    <StarIcon style={{ color: "#F2BD57" }} />
                                    <StarIcon style={{ color: "whitesmoke" }} />
                                </div>
                            </Box>
                        );
                    })}
                </Stack>

            </Container>
        </div>

        <Container className="member_reviews">
            <Box className={"category_title"}>About Shops</Box>
            <Stack 
               display={"flex"}
               flexDirection={"row"}
               width={"90%"}
               sx={{ mt: "70px" }}
            >
                <Box
                   className={"about_left"}
                    sx={{
                    width: "50px", height: "50px",  
                    backgroundImage: `url('/community/Brioni_new_logo.png')`
                }}
                >
                    <div className={"about_left_desc"}>
                        <span>Brioni</span>
                        <p>We are very happy to serve you.
                        About us: We started our business in 1991</p>
                    </div>
                </Box>
                <Box className={"about_right"}>
                    {Array.from(Array(3).keys()).map((ele, index) => {
                       return (
                  <Box display={'flex'} flexDirection={"row"} key={index}>
                    <div className={"about_right_img"}></div>
                      <div className={"about_right_desc"}>
                        <span>Our best sellers</span>
                          <p>
                              Our sellers is making happy our customurs        
                          </p>
                      </div>
                    </Box>
                    );
                  })}
               </Box>
            </Stack>
            <Stack 
            sx={{ mt: "60px" }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            >
                <Box className={"category_title"}>We are Located</Box>
                <iframe
                    style={{ marginTop: "60px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25874.570379693923!2d128.57928115!3d35.8411244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e374e3a42dd1%3A0x9e079c3e7491b074!2sYeungnam%20Univ.%20Hosp.!5e0!3m2!1sru!2skr!4v1700558985209!5m2!1sru!2skr" 
                    width="1320"
                    height="500"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </Stack>
        </Container>
    </div>
  );
}