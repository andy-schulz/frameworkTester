"use client";
import Canvas from "@/app/ui/Canvas";
import React from "react";
import Explanation from "@/app/ui/Explanation";
import BorderedContent from "@/app/ui/LabledContent";
import Text from "@/app/ui/RowText";
import CopyCode from "@/app/ui/CopyCode";

export default function drawingCanvas() {
    return (
        <div>
            <div className="flex flex-row text-sm content-center">

                <div className={"basis-1/3 space-y-4 p-1 justify-stretch"}>
                    <Explanation>Draw on Canvas by Mouse</Explanation>

                </div>

                <div className={"basis-2/3"}>
                    <BorderedContent
                        label={<Text>Canvas to draw with mouse. <CopyCode>#canvas</CopyCode></Text>}
                        grow={false}>
                        <Canvas></Canvas>
                    </BorderedContent>
                </div>

            </div>

        </div>);

}