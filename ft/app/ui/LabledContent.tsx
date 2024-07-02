import React from "react";


interface BorderedContentProps {
    label: React.ReactNode
    children: React.ReactNode
    grow?: boolean
}

const BorderedContent: React.FC<BorderedContentProps> = (probs) => (
    <div
        className={"flex flex-col space-y-4 p-3 flex-initial border-solid border-2 border-sky-900 pace-x-4 flex-grow"}>

        <text
            className="flex flex-row text-nowrap flex-nowrap border-amber-600 mb-1 text-sm font-medium text-gray-900 dark:text-white">
            {probs.label}
        </text>

        <div className={"flex content-center justify-center " + grow(probs.grow)}>
            {/**/}
            {probs.children}
        </div>
    </div>
)

const grow = (flex: boolean | undefined) => {
    return flex || flex == undefined ?  "flex-col" : "";
}


export default BorderedContent;