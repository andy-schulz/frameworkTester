"use client";
import React from 'react';
import {setHeaderText} from '@/lib/setTextToElement';

interface DownloadButtonProps {
    children?: React.ReactNode
    headerText?: string
    className?: string
    id?: string
    tooltip?: string
    filePathToDownload?: string
    fileNameToDownload?: string
}


const DownloadButton: React.FC<DownloadButtonProps> = props => {

    return (
            <a
                data-tooltip-target={props.tooltip || "tooltip download link"}
                type={"link"}
                id={props.id}
                className={props.className + " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"}
                href={`./${props.filePathToDownload}`}
                download={props.fileNameToDownload}>
                {props.children}
            </a>

    );
}


export default DownloadButton;