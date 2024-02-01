"use client";
import React from 'react';
import Button from '@mui/material/Button';
import {setHeaderText} from '@/lib/setTextToElement';

interface ClientButtonProps {
    headerText?: string
    className?: string
    id?: string
    label?: string
}

const ClientButton: React.FC<ClientButtonProps> = props =>

    (
        <Button
            id={props.id}
            className={props.className + " normal-case bg-green-500 "}
            onClick={() => {setHeaderText("Clicked on: " + props.label || "Client Button");}}
            variant="contained"
        >
            {props.label || `Client Button` }
        </Button>

    );

export default ClientButton;