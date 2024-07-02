"use client";
import React from 'react';
import {copyToClipboard} from "@/lib/copyToClipboard";

interface CodeProps {
    children?: React.ReactNode
}

const CopyCode: React.FC<CodeProps> = props => {

    return (
        <span className={"flex flex-row text-nowrap px-6"}>
            <span className={"font-mono font-normal text-amber-800"}>   {props.children} </span>

            <button
                title={"Copy to Clipboard"}
                className="w-6 h-6 transform active:scale-150 transition-transform "
                type={"button"}
                onClick={() => {copyToClipboard(props.children as string)}}
            >

                <svg className="w-6 h-6 text-gray-800 hover:text-sky-700 dark:text-white cursor-copy"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        d="M9 8v3c0 .6-.4 1-1 1H5m11 4h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-7a1 1 0 0 0-1 1v1m4 3v10c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-7.1c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H13c.6 0 1 .4 1 1Z"/>
                </svg>
            </button>
        </span>
    );
}
export default CopyCode;