import { Box, Container, Stack } from '@mui/material';
import React, { useState } from 'react';

export function Footer() {
    return (
        <div className="footer_config">
            <Container>
                <Stack
                    flexDirection={"column"}
                    className="main_footer_container"
                    style={{ width: "1280px", height: "377px" }}
                >
                    <Stack flexDirection={"row"} style={{ height: "242px" }}>
                        <Stack className="info" flexDirection={"column"}>
                            <Box>
                                <img src={"/icons/Vector01.svg"} alt="" />
                                <img src={"/icons/logo.svg"} alt="" />
                            </Box>
                            <Box className="main_text">
                            Be the first to hear about new product drops, insider news, exclusive offers, and more.
                            </Box>
                            <Stack className="contact_links">
                                <Box>
                                    <img src={"/icons/_Ã‘Ã«Ã®Ã©_1.svg"} alt="" />
                                </Box>
                                <Box>
                                    <img src={"/icons/insta.svg"} alt="" />
                                </Box>
                                <Box>
                                    <img src={"/icons/ppp.svg"} alt="" />
                                </Box>
                                <Box>
                                    <img src={"/icons/twit.svg"} alt="" />
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack className="parts">
                          <Box className="part_subject">Sections</Box>
                            <Box className="divider"></Box>
                              <Box className="target">
                                  Home
                                  Shop
                                  Community
                                  Orders
                                  Help
                            </Box>
                        </Stack>
                        <Stack className="find_us">
                          <Box className="find">Contacts</Box>
                            <Box className="divider"></Box>
                              <Stack className="detailes" sx={{ mt: "20px"}}>
                                <Box className="detail_first">Location:.</Box>
                                  <Box className="detail_second">Pepublic of Korea. Deagu Nam-gu</Box>
                                    <Stack className="detailes" sx={{ mt: "20px"}}>
                                      <Box className="detail_first">Telephone:.</Box>
                                       <Box className="detail_second">010-7772-6227</Box>
                                        <Stack className="detailes" sx={{ mt: "20px"}}>
                                       <Box className="detail_first">Email:.</Box>
                                     <Box className="detail_second">abbosusman2020@gmail.com</Box>
                                 </Stack>  
                              </Stack>
                           </Stack>
                        </Stack>
                    </Stack>
                    <Box className="liner"></Box>
                      <Box className="copyrights">
                       © 2023 dark fashion, All Rights Reserved
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}