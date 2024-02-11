import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ChosenProduct } from "./chosenProduct";
import { OneShop } from "./oneShop";
import { AllShops } from "./allShops";
import "../../../css/shops.css";

export function ShopsPage() {
    let shops = useRouteMatch();
    console.log(shops)
    return (
        <div className="shops_page">
            <Switch>
                <Route path={`${shops.path}/product/:product_id`}>
                    <ChosenProduct/>
                </Route>
                <Route path={`${shops.path}/:shop_id`}>
                    <OneShop/>
                </Route>
                <Route path={`${shops.path}`}>
                    <AllShops/>
                </Route>
            </Switch>
        </div>
    );
}