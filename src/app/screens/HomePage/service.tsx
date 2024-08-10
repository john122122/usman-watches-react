import React from "react";
import { Container, Stack } from "@mui/material";
import Marginer from "../../components/marginer";

export function Service() {
    return (
      <div className="service_frame" data-aos="zoom-out-up">
        <Container>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={"-30px"}
            style={{ width: "1220px", height: "175px" }}
          >
            
            <div className="service_box" data-aos="zoom-out-up">
             <img src="icons/fast-delivery 1.svg" alt=""/>
              <div className="service_content">
               <span>Free Shipping</span>
              <p>Free Shipping for orders over $450</p>
             </div>
            </div>
            <Marginer direction="vertical" height="64" width="2" bg="#e3c08d"/>
            <div className="service_box" data-aos="zoom-out-up">
             <img src="icons/shield 1.svg" alt=""/>
              <div className="service_content">
               <span>Money Guarantee</span>
              <p>Within 30 days for an exchange</p>
             </div>
            </div>
            <Marginer direction="vertical" height="64" width="2" bg="#e3c08d"/>
            <div className="service_box" data-aos="zoom-out-up">
              <img src="icons/headphones 1.svg" alt=""/>
              <div className="service_content">
               <span>Online Support</span>
              <p>24 hours a day, 7 days a week</p>
             </div>
            </div>
            <Marginer direction="vertical" height="64" width="2" bg="#e3c08d"/>
            <div className="service_box" data-aos="zoom-out-up">
             <img src="icons/credit-card 1.svg" alt=""/>
              <div className="service_content">
               <span>Flexible Payment</span>
              <p>Pay with Multiple Credit Cards</p>
             </div>
              </div>
              
           </Stack>
         </Container>
       </div>
    )
}