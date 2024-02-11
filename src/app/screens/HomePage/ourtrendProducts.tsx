import React from "react";
import { Box, Container, Stack } from "@mui/material";

export function OurTrendProducts() {
    return (
         <div className="top_shops_frame">
          <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
              <Box className="category_title" sx={{ mt: "28px"}}>Our Trend Products</Box>
                <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
                  <Box className="suit_box">
                    <Stack className="suit_img" sx={{ backgroundImage: `url('/suits/-5017792296-NENT02E5-SS23-Sondrio---Cream-Cotton--Linen---Neo-Cut-Suit.jpg')`}}>
                      <div className={"sale_suits"}>-25% SALE</div>
                        <div className={"view_btn"}>
                          <div>Quick Shop</div>
                          </div>
                        </Stack>
                      <Stack className={"suit_desc"}>
                    <span className={"suit_title_text"}>Cream Cotton/Linen - Neo Cut</span>
                  <span className={"suit_title_text_2"}>Tessuti di Sondrio Suit</span>
                <span className={"suit_desc_text"}>$498.00 USD</span>
              </Stack>
              </Box>
              <Box className="suit_box">
                    <Stack className="suit_img" sx={{ backgroundImage: `url('/suits/10005-995-2--tt.jpg')`}}>
                      <div className={"sale_suits"}>-25% SALE</div>
                        <div className={"view_btn"} >
                          <div>Quick Shop</div>
                          </div>
                        </Stack>
                      <Stack className={"suit_desc"}>
                    <span className={"suit_title_text"}>Cream Cotton/Linen - Neo Cut</span>
                  <span className={"suit_title_text_2"}>Tessuti di Sondrio Suit</span>
                <span className={"suit_desc_text"}>$498.00 USD</span>
              </Stack>
              </Box>
              <Box className="suit_box">
                    <Stack className="suit_img" sx={{ backgroundImage: `url('/suits/SpierAndMackaySS22_Tobacco-Seersucker---Suit-HL-J064-1-1080-t.jpg')`}}>
                      <div className={"sale_suits"}>-25% SALE</div>
                        <div className={"view_btn"}>
                          <div>Quick Shop</div>
                          </div>
                        </Stack>
                      <Stack className={"suit_desc"}>
                    <span className={"suit_title_text"}>Cream Cotton/Linen - Neo Cut</span>
                  <span className={"suit_title_text_2"}>Tessuti di Sondrio Suit</span>
                <span className={"suit_desc_text"}>$498.00 USD</span>
              </Stack>
              </Box>
              <Box className="suit_box">
                    <Stack className="suit_img" sx={{ backgroundImage: `url('/suits/-5017792296-NENT02E5-SS23-Sondrio---Cream-Cotton--Linen---Neo-Cut-Suit.jpg')`}}>
                      <div className={"sale_suits"}>-25% SALE</div>
                        <div className={"view_btn"}>
                          <div>Quick Shop</div>
                          </div>
                        </Stack>
                      <Stack className={"suit_desc"}>
                    <span className={"suit_title_text"}>Cream Cotton/Linen - Neo Cut</span>
                  <span className={"suit_title_text_2"}>Tessuti di Sondrio Suit</span>
                <span className={"suit_desc_text"}>$498.00 USD</span>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}