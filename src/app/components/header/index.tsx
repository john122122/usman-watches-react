import { Badge, Box, Button, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function NavbarHome(props: any) {
 return (
   <div
     className="format home_navbar"
     data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
   >
    <Container>
      <Stack
        flexDirection={"row"}
        className="navbar_config"
        justifyContent={"space-between"}
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
      <Box>
        <img src="/icons/Group.png" />
        <img src="/icons/Layer_2.png" />
      </Box>
        <Stack
          flexDirection={"row"}
          justifyContent="space-evenly"
          alignItems={"center"}
          className="navbar_links_1"
        >
           <Box
             className="hover_line"
             onClick={props.setPath}
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"
           >
          <NavLink to="/" activeClassName="underline">
              Home
          </NavLink>
        </Box>
        <Box className="hover_line"
             onClick={props.setPath}
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"
            >
          <NavLink to="/shops" activeClassName="underline">
              Shop
          </NavLink>
        </Box>
           <Box 
             className="hover_line"
             onClick={props.setPath}
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"
        >
          <NavLink to="/community" activeClassName="underline">
              Community
          </NavLink>
        </Box>
        <Box className="hover_line"
             onClick={props.setPath}
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"
           >
          <NavLink to="/member-page" activeClassName="underline">
              My Page
          </NavLink>
        </Box>
        <Box className="hover_line"
             onClick={props.setPath}
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"
           >
          <NavLink to="/orders" activeClassName="underline">
              Orders
          </NavLink>
        </Box>
        <Box className="hover_line"
             onClick={props.setPath}
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"
          >
          <NavLink to="/help" activeClassName="underline">
            Help
          </NavLink>
        </Box>              
      </Stack>
      <Stack
          flexDirection={"row"}
          justifyContent="space-evenly"
          alignItems={"center"}
          className="navbar_links_2"
      >
        <Box className="hover_line">
          <IconButton
              aria-label="search"
              id="basic-button"
              aria-controls={undefined}
              aria-haspopup="true"
              aria-expanded={undefined}
              //onClick={handleClick}
            >                
            <div className="search_icon_box" data-aos="zoom-out-up">
              <img
                  className="img_search"
                  src="/icons/Layer_1.svg"
                />
            </div>
          </IconButton>
        </Box>
          <Box className="hover_line" data-aos="zoom-out-up">
            <IconButton
              aria-label="cart"
              id="basic-button"
              aria-controls={undefined}
              aria-haspopup="true"
              aria-expanded={undefined}
              //onClick={handleClick}
            >
              <Badge badgeContent={15}>
                <img src="/icons/savat.svg" alt="" />
              </Badge>
            </IconButton>
          </Box>
            <Box className="hover_line" onClick={props.setPath} data-aos="zoom-out-up">
              <NavLink to="/signup" activeClassName="underline">
                  Sign up
              </NavLink>
            </Box> 
              <Box className="hover_line" onClick={props.setPath} data-aos="zoom-out-up">
                <NavLink to="/login" activeClassName="underline">
                  Log in
                </NavLink>
              </Box>
        </Stack>
      </Stack>
       <Stack
         className="head_information"
         data-aos="fade-up"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000"
       >
          <Stack justifyContent={"column"} style={{ marginTop: "-162px"}}>
            <Box>
              <text className="usman_text">Welcome to Usman Fabric</text>
            </Box>
            <Box>
              <img className="men_fabric" src="/icons/Men’s Fabric Blazers.png" alt="" />
            </Box>
            <Box className="date_of_establishment">
              Since 1991
            </Box>
            <Box sx={{ mt: "90px" }}>
              <Button
                  variant="contained"
                  style={{
                  width: "210px",
                  height: "58px",
                  marginLeft: "800px",
                  marginTop: "310px",
                  background: "rgb(40 89 55)",
                  color: "rgb(242 228 228)",}}
                >
                  Shop Now
              </Button>
            </Box>
          </Stack>
        </Stack>
    </Container>
  </div>
  );
}