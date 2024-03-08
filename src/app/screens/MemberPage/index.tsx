import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { VisitOtherPage } from "./VisitOtherPage";
import { VisitMyPage } from "./VisitMyPage";
import "../../../css/my_page.css";

export function MemberPage() {
    let my = useRouteMatch();
    console.log(my)
    return (
        <div className="my_page">
            <Switch>
                <Route path={`${my.path}/other`}>
                    <VisitOtherPage/>
                </Route>
                <Route path={`${my.path}`}>
                    <VisitMyPage/>
                </Route>
            </Switch>
        </div>
    );
}