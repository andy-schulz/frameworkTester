"use client";
import React from 'react';
import {setHeaderText} from '@/lib/setTextToElement';

interface ClientButtonProps {
    children?: React.ReactNode
    headerText?: string
    className?: string
    id?: string
    disabled?: boolean
    visible?: boolean
    display?: string
    tooltip?: string
}


const ClientButton: React.FC<ClientButtonProps> = props => {

    return (
            <button
                data-tooltip-target={"test"}
                type={"button"}
                id={props.id}
                className={props.className + " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"}
                disabled={props.disabled}
                style={{
                    visibility: props.visible == undefined || props.visible ? "visible" : "hidden",
                    display: props.display == undefined ? "block" : props.display
                }}
                onClick={() => {
                    setHeaderText("Clicked on Button: " + props.children || "Client Button");
                }}>
                {props.children}
            </button>

    );
}


export default ClientButton;