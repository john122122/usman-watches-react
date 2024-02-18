import React, { useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export function CommunityChats() {
   /** INITIALIZATION **/
   const [ messagesList, setMessagesList] = useState([]);

    return (
        <Stack className={"chat_frame"}>
         <Box className={"chat_top"}>Live Talk</Box>
          <Box className={"chat_content"}>
           <Stack className={"chat_main"}>
            <Box 
              flexDirection={"row"}
              style={{ display: "flex" }}
              sx={{ m: "10px 0px" }}
            >
              <div className={"msg_left"}>Bu yer jonli muloqot</div>
            </Box>
            <Box 
              flexDirection={"row"}
              style={{ display: "flex" }}
              alignItems={ "flex-end"}
              justifyContent={"flex-end"}
              sx={{ m: "10px 0px" }}
            >
             <div className={"msg_right"}>Salom!!!</div>
            </Box>
            <Box
              flexDirection={"row"}
              style={{ display: "flex" }}
              sx={{ m: "10px 0px" }}
            >
             <Avatar alt={"mdsfsv"} src={"/community/usman.jpg"} />
             <div className={"msg_left"}>Xayrli kech</div>
            </Box>
            <Box 
              flexDirection={"row"}
              style={{ display: "flex" }}
              alignItems={ "flex-end"}
              justifyContent={"flex-end"}
              sx={{ m: "10px 0px" }}
            >
             <div className={"msg_right"}>Sizgaham.</div>
            </Box>
           </Stack>
          </Box>
          <Box className={"chat_bott"}>
            <input 
              type={"text"} 
              name={"message"}
              className={"msg_input"}
              placeholder={"Xabar jo'natish"}
            />
            <button className={"send_msg_btn"}>
             <SendIcon style={{ color: "#fff" }} />
            </button>
          </Box>
        </Stack>
    );
}