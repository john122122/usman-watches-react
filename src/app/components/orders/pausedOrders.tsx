import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

const pauseOrders = [
  [1, 2, 3],
  
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pauseOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/suits/E2-Minnis---Green---Quest-Cotton---Neo-Cut-SUIT-406094-NEOST-01-SS23-(2F).jpg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <p className={"titleDish"}>Humor Tiador</p>
                      <Box className={"priceBox"}>
                        <p>$7</p>
                        <img
                          style={{ margin: "0 10px" }}
                          src={"/icons/close.svg"}
                        />
                        <p> 3 </p>
                        <img
                          style={{ margin: "0 10px" }}
                          src={"/icons/pause.svg"}
                        />
                        <p style={{ marginLeft: "15px" }}> $ 21</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box paused"}>
              <div>
                  <span>Product price = </span>
                  <span>$ 21</span>
                </div>
                <div>
                  <span>Delivery service = </span>
                  <span>$ 2</span>
                </div>
                <div>
                  <span>Total price = </span>
                  <span>$ 23</span>
                </div>
                <div>
                  <Button className="order_cancel">Cancel the Order</Button>
                  <Button className="order_pay">Pay</Button>
                </div>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}