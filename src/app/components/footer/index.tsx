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
                    <Stack flexDirection={"row"} style={{ height: "250px" }}>
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
                            <Box className={"card_types"}>
                                <img className={"card"} src="/cards/western_union.svg" />
                                <img className={"card"} src="/cards/master_card.svg" />
                                <img className={"card"} src="/cards/paypal.svg" />
                                <img className={"card"} src="/cards/visa.svg" />
                            </Box>
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
                              <Stack className="detailes" sx={{ mt: "29px"}}>
                                <Box className="detail_first">
                                 <img src={"/footer/map.png"} style={{ width: "50px", height: "50px" }} alt="" />
                                  </Box>
                                   <Box className="detail_second">Pepublic of Korea. Deagu Nam-gu</Box>
                                    <Stack className="detailes" sx={{ mt: "29px"}}>
                                     <Box className="detail_first">
                                      <img src={"/footer/phone-call-call-svgrepo-com.svg"} style={{ width: "50px", height: "50px" }} alt="" />
                                       </Box>
                                    <Box className="detail_three">
                                        010-7504-1424
                                    </Box>
                                         <Stack className="detailes" sx={{ mt: "29px"}}>
                                          <Box className="detail_first">
                                           <img src={"/footer/email-part-2-svgrepo-com.svg"} style={{ marginTop: "10px"}} alt="" /></Box>
                                           <Box className="detail_four">
                                            abbas_usman2020@gmail.com
                                            dark_fashion1991@gmail.com
                                          </Box>
                                        </Stack>  
                                      </Stack>
                                    </Stack>
                                  </Stack>
                                </Stack>
                             <Box className="liner"></Box>
                          <Box className="copyrights">
                       © 2023 Dark Fashion, All Rights Reserved
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}