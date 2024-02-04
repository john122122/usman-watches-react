import { Badge, Box, Button, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function NavbarShops(props: any) {
    return (
    <div className="format_shop home_navbar">
        <Container>
                <Stack
                    flexDirection={"row"}
                    className="navbar_config"
                    justifyContent={"space-between"}
                >
                    <Box>
                        <img
                            className="sizer_style"
                            src="/icons/Vector01.svg" />
                        <img src="/icons/Layer_3.svg" />
                    </Box>
                    <Stack
                        flexDirection={"row"}
                        justifyContent="space-evenly"
                        alignItems={"center"}
                        className="navbar_links_1"
                    >

                        <Box className="hover_line" onClick={props.setPath}>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </Box>
                        <Box className="hover_line" onClick={props.setPath}>
                            <NavLink to="/shop" activeClassName="underline">
                                Shop
                            </NavLink>
                        </Box>
                        <Box className="hover_line" onClick={props.setPath}>
                            <NavLink to="/community" activeClassName="underline">
                                Community
                            </NavLink>
                        </Box>
                        <Box className="hover_line" onClick={props.setPath}>
                            <NavLink to="/my-page" activeClassName="underline">
                                My Page
                            </NavLink>
                        </Box>
                        <Box className="hover_line" onClick={props.setPath}>
                            <NavLink to="/orders" activeClassName="underline">
                                Orders
                            </NavLink>
                        </Box>
                        <Box className="hover_line" onClick={props.setPath}>
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
                                
                            <div className="search_icon_box">
                                <img
                                  className="img_search"
                                  src="/icons/Layer_1.svg" />
                            </div>
                            </IconButton>
                        </Box>
                        <Box className="hover_line">
                            <IconButton
                                aria-label="cart"
                                id="basic-button"
                                aria-controls={undefined}
                                aria-haspopup="true"
                                aria-expanded={undefined}
                                //onClick={handleClick}
                            >
                                <Badge badgeContent={3} >
                                    <img src="/icons/savat.svg" alt="" />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Box className="hover_line" onClick={props.setPath}>
                            <NavLink to="/sign-up" activeClassName="underline">
                                Sign up
                            </NavLink>
                        </Box> 
                        <Box className="hover_line" onClick={props.setPath}>
                            <NavLink to="/login" activeClassName="underline">
                                Log in
                            </NavLink>
                        </Box>

                    </Stack>
                </Stack>

            </Container>
        </div>
    );
}