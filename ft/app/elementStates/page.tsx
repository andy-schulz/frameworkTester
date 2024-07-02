"use client";
import CountdownTimer from "@/app/ui/CountDown";
import ClientButton from "@/app/ui/clientButton";
import React from "react";
import {setDisabledStateTo, setDisplayStateTo, setVisibilityStateTo} from "@/lib/setStateToElement";
import {setHeaderText} from "@/lib/setTextToElement";
import SpanHighlight from "@/app/ui/SpanHighlight";
import CopyCode from "@/app/ui/CopyCode";
import Text from "@/app/ui/RowText";
import BorderedContent from "@/app/ui/LabledContent";
import { useSearchParams } from 'next/navigation'

export default function ElementStates() {

    // const searchParams = useSearchParams()
    //
    // const durationString = searchParams.get('duration')
    // const duration = parseInt(durationString ? durationString : "5")
    const duration = 5

    return (
        <div className={"lg:flex md:flex"}>
            <div className={"flex flex-col items-center"}>
                <CountdownTimer
                    duration={duration}
                    onComplete={() => {
                        setDisabledStateTo(
                            "stateSwitchingButton",
                            false,
                            "Enabled Button",
                            () => setHeaderText("Clicked on Button: Enabled Button"))

                        setVisibilityStateTo(
                            "visibilitySwitchingButton",
                            true)

                        setDisplayStateTo("displaySwitchingButton", "block")

                    }}
                >
                </CountdownTimer>
            </div>

            <div className={"flex flex-col space-y-4 p-6 flex-initial flex-grow"}>

                <BorderedContent
                    label={<Text>Button with <SpanHighlight>disabled</SpanHighlight> state.<CopyCode>#stateSwitchingButton</CopyCode></Text>}>
                    <ClientButton
                        id="stateSwitchingButton"
                        disabled={true}

                    >{"disabled Button"}</ClientButton>
                </BorderedContent>

                <BorderedContent
                    label={<Text>Button with <SpanHighlight>visibility</SpanHighlight> state. <CopyCode>#visibilitySwitchingButton</CopyCode></Text>}>

                    <ClientButton
                        id="visibilitySwitchingButton"
                        visible={false}
                    >{"Visible Button"}</ClientButton>
                </BorderedContent>

                <BorderedContent
                    label={<Text>Button with <SpanHighlight>display</SpanHighlight> state. <CopyCode>#displaySwitchingButton</CopyCode></Text>}>
                    <ClientButton
                        id="displaySwitchingButton"
                        display={"none"}
                    >{"Displayed Button"}</ClientButton>
                </BorderedContent>

            </div>

            <div className={"flex flex-col items-center"}>
                <CountdownTimer
                    duration={duration}
                    initialRemainingTime={0.00001}
                    rotation={"counterclockwise"}
                    onComplete={() => {
                        setDisabledStateTo("stateSwitchingButton", true, "Disabled Button")

                        setVisibilityStateTo("visibilitySwitchingButton", false)

                        setDisplayStateTo("displaySwitchingButton", "none")
                    }}
                >
                </CountdownTimer>
            </div>

        </div>

    );


}