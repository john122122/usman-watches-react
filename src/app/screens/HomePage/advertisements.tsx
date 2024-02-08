import React from "react";
import { Container } from "@mui/material";

export function Advertisements() {
    return (
        <div className="ads_shops_frame">
            <video
                className={"ads_video"}
                autoPlay={true}
                loop
                muted
                playsInline
                data-video-media=""
            >
                <source
                    data-src=""
                    type="video/mp4"
                    src="/videos/pexels-pavel-danilyuk-7426425 (1440p).mp4"
                />
            </video>
       </div>
    )
}