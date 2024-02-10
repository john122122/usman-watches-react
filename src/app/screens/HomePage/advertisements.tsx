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
                    src="/videos/Untitled design (1).mp4"
                />
            </video>
       </div>
    )
}