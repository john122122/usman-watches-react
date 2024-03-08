import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, dividerClasses, Stack } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Telegram from "@mui/icons-material/Telegram";
import {YouTube} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SettingsIcon from "@mui/icons-material/Settings"
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import { MySettings } from "./mySettings";
// OTHERS
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TuiEditor } from "../../components/tuiEditor/TuiEditor";
import '../../../css/my_page.css';
export function VisitMyPage(props: any) {
    /** INITIALIZATIONS **/
  const [value, setValue] = React.useState("6");

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"my_page"}>
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className={"my_page_frame"}>
          <TabContext value={value}>
            <Stack className={"my_page_right"}>
                <Box display={"flex"} flexDirection={"column"}>
                    <TabPanel value={"1"}>
                        <Box className={"menu_name"} marginLeft={"27px"}>My Articles</Box>
                            <Box className={"menu_content"}>
                                <MemberPosts/>
                                    <Stack 
                                       sx={{ my:"40px" }}
                                       direction="row"
                                       alignItems="center"
                                       justifyContent="center"
                                    >
                                       <Box className={"bottom_box"}>
                                           <Pagination
                                                count={3}
                                                page={1}
                                                renderItem={(item) => (
                                                    <PaginationItem
                                                        components={{
                                                          previous: ArrowBackIcon,
                                                          next: ArrowForwardIcon,
                                                        }}
                                                        {...item}
                                                        color={"secondary"}
                                                    />
                                               )}
                                            />
                                       </Box>
                                    </Stack>
                                </Box>
                            </TabPanel>
                            <TabPanel value={"2"}>
                                <Box className={"menu_name"}>Followers</Box>
                                <Box className={"menu_content"}>
                                    <MemberFollowers action_enabled={true} />
                                </Box>
                            </TabPanel>

                            <TabPanel value={"3"}>
                                <Box className={"menu_name"}>Following</Box>
                                <Box className={"menu_content"}>
                                    <MemberFollowing action_enabled={true} />
                                </Box>
                            </TabPanel>

                            <TabPanel value={"4"}>
                                <Box className={"menu_name"}>Article Writing</Box>
                                <Box className={"write_content"}>
                                    <TuiEditor/>
                                </Box>
                            </TabPanel>

                            <TabPanel value={"5"}>
                                <Box className={"menu_name"}>Featured Article</Box>
                                <Box className={"menu_content"}></Box>
                            </TabPanel>

                            <TabPanel value={"6"}>
                                <Box className={"menu_name"}>Articles</Box>
                                <Box className={"menu_content"}>
                                    <MySettings />
                                </Box>
                            </TabPanel>
                        </Box>
                    </Stack>

                    <Stack className={"my_page_left"}>
                        <Box className={"order_info_box"}>
                            <a onClick={() => setValue("6")} className={"settings_btn"}>
                                <SettingsIcon/>
                            </a>
                            <Box 
                               display={"flex"}
                               flexDirection={"column"}
                               alignItems={"center"}
                            >
                                <div className={"order_user_img"}>
                                    <img
                                       src={"/community/nicest-celebrity-encounters-101-5b7bd05e94295__700.jpg"}
                                       className={"order_user_avatar"} 
                                    />
                                  </div>
                                  <div className={"user_corner_icon"}>
                                        <img src={"/icons/odamcha.svg"} />
                                  </div>
                                <span className={"user_name"}>Usman</span>
                                <span className={"user_type"}>USER</span>
                            </Box>
                            <Box className={"social_wrap"}>
                                <Facebook />
                                <Instagram />
                                <Telegram />
                                <YouTube  />
                            </Box>
                            <Box className={"user_media_box_follow"}
                                     sx={{ flexDirection: "row" }}
                                >
                                <p className={"follows"}>Followers: 3 Following: 2</p>
                            </Box>
                                <p className={"user_desc"}>"no additional information is included"</p>
                            <Box 
                               display={"flex"}
                               justifyContent={"flex-end"}
                               sx={{ mt: "10px"}}
                            >
                                <TabList 
                                   onChange={handleChange}
                                   aria-label="lab AIP tabs example"
                                >
                                    <Tab 
                                       style={{ flexDirection: "column" }}
                                       value={"4"}
                                       component={() => (
                                        <Button
                                            variant={"contained"}
                                            onClick={() => setValue("4")}
                                        >
                                        Writing Article
                                        </Button>
                                      )}
                                    />
                                </TabList>
                            </Box>
                        </Box>

                        <Box className={"my_page_menu"}>
                            <TabList
                              onChange={handleChange}
                              aria-label="lab AIP tabs example"
                            >
                                <Tab 
                                   style={{ flexDirection: "column" }}
                                   value={"1"}
                                   component={() => (
                                    <div
                                      className={`menu_box ${value} `}
                                      onClick={() => setValue("1")}
                                    >
                                       <img src={"/icons/icons8-article-64.png"} width={"40px"} height={"40px"}/>
                                        <span>My Articles</span>
                                    </div>
                                   )}
                                />
                                <Tab 
                                  style={{ flexDirection: "column"}}
                                  value={"2"}
                                  component={() => (
                                    <div
                                       className={`menu_box ${value} `}
                                       onClick={() =>setValue("2")}
                                    >
                                        <img src={"/icons/icons8-users-100.png"} width={"40px"} height={"40px"}/>
                                        <span>Followers</span>
                                    </div>
                                  )}
                                />
                                <Tab
                                   style={{ flexDirection: "column" }}
                                   value={"3"}
                                   component={() => (
                                    <div 
                                       className={`menu_box ${value} `}
                                       onClick={() => setValue("3")}
                                    >
                                        <img src={"/icons/icons8-add-user-male-100.png"} width={"40px"} height={"40px"} />
                                        <span>Following</span>
                                    </div>
                                   )}
                                />
                            </TabList>
                        </Box>
                    </Stack>
                </TabContext>
            </Stack>
        </Container>
    </div>
  )
}