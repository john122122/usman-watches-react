import React from "react";
import { Container } from "@mui/material";
import { Service } from "./service";
import { TrendProducts } from "./trendProducts";
import { TopShops } from "./topShops";
import { BestSellers } from "./bestSellers";
import { Advertisements } from "./advertisements";
import { Recommendations } from "./recommendations";
import { Events } from "./events";
import '../../../css/home.css'

export function HomePage() {
    return (
        <div className="homepage">
            <Service />
            <TopShops />
            <BestSellers />
            <TrendProducts />
            <Advertisements />
            <Events />
            <Recommendations />
        </div>
    );
}