import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

export function TargetArticles(props: any) {
    return (
        <Stack>
          {props.targetBoArticles?.map((articles: any, index: string) => {
            const art_image_url = "/community/GettyImages-998449832.jpg";
            return (
              <Link
                className="all_article_box"
                sx={{ textDecoration: "none" }}
                href={``}
              >
                <Box
                  className="all_article_img"
                  sx={{ backgroundImage: `url(${art_image_url})` }}
                >
                </Box>
                    <Box className="all_article_container">
                        <img src="auth/romka.png" alt="" />
                  <Box
                    alignItems={"center"}
                    display={"flex"}
                    margin-top={"-125px"}
                  >
                    <img
                      src="/icons/icons8-person-100.png"
                      alt=""
                      width={"35px"}
                      style={{ borderRadius: "50%", backgroundSize: "cover" }}
                    />
                    <span
                      className="all_article_author_user"
                      style={{ marginLeft: "10px" }}
                    >
                      Usman
                    </span>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    sx={{ mt: "15px" }}
                  >
                    <span className="all_article_title">evaluation</span>
                    <p className="all_article_desc">
                      Usman Fabric has a wonderfull products
                    </p>
                  </Box>
                  <Box>
                  <Box 
                      className={"article_share_main"}
                      style={{
                        color: "#fff",
                        marginLeft: "284px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span>{moment().format("YY-MM-DD HH:mm")}</span>
                        <Checkbox
                          sx={{ ml: "40px" }}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite style={{ color: "red" }}/>}
                          checked={false}
                        />
                          <span style={{ marginRight: "18px" }}>100</span>
                       <RemoveRedEye />
                     <span style={{ marginLeft: "18px" }}>1000</span>
                    </Box>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Stack>
      );
}