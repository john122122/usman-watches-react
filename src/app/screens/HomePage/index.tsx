import React from "react";
import { Container } from "@mui/material";
import { Service } from "./service";
import { OurTrendProducts } from "./ourtrendProducts";
import { TopShops } from "./topShops";
import { NewArrivals } from "./newArrivals";
import { Advertisements } from "./advertisements";
import { Ourconsumers } from "./ourconsumers";
import { Events } from "./events";
import '../../../css/home.css'

export function HomePage() {
    return (
        <div className="homepage">
            <Service />
            <TopShops />
            <NewArrivals />
            <OurTrendProducts />
            <Advertisements />
            <Events />
            <Ourconsumers />
        </div>
    );
}