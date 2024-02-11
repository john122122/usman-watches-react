import React from "react";
import { Container } from "@mui/material";
import { Service } from "./service";
import { OurTrendProducts } from "./ourtrendProducts";
import { TopShops } from "./topShops";
import { NewArrivals } from "./newArrivals";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendation } from "./recommendations";


import '../../../css/home.css'

export function HomePage() {
    return (
        <div className="homepage">
            <TopShops />
            <Service />
            <NewArrivals />
            <OurTrendProducts />
            <Advertisements />
            <Events />
            <Recommendation />
        </div>
    );
}