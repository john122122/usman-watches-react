import React from "react";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const followers = [
    { mb_nick: "pulat", following: true },
    { mb_nick: "abdulxay", following: false },
    { mb_nick: "qilich", following: true },
];

export function MemberFollowers(props: any) {
    return (
        <Stack>
            {followers.map((follower) => {
                const image_url = "/community/561d6042e7cd7fc4c21904086d6b8bda.jpg";
                return (
                    <Box className={"follow_box"}>
                        <Avatar 
                            alt={""} 
                            src={image_url}
                            sx={{ width: 89, height: 89 }}
                        />
                           <div
                              style={{
                                width: "400px",
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "25px",
                                height: "85",
                              }}
                           >
                            <span className={"username_text"}>@jon_polat</span>
                            <span className={"name_text"}>{follower.mb_nick}</span>
                           </div>
                           {props.actions_enabled &&
                             (follower?.following ? (
                                <Button
                                   variant={"contained"}
                                   className={"following_already"}
                                   disabled
                                >
                                    <span>FOLLOWING</span>
                                </Button>
                             ) : (
                                <Button 
                                   variant={"contained"}
                                   startIcon={
                                    <img 
                                       src={" /icons/follow_back.svg"}
                                       style={{ width: "40px" }}
                                    />
                                   }
                                   className={"follow_btn"}
                                >
                                    <span>Follow Back</span>
                                </Button>  
                            ))
                        }
                    </Box>
                );
            })}
        </Stack>
    );
}