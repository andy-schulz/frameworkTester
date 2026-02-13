import React from 'react';
import BorderedContent from "@/app/ui/LabledContent";
import Text from "@/app/ui/RowText";
import SpanHighlight from "@/app/ui/SpanHighlight";
import CopyCode from "@/app/ui/CopyCode";
import ClientButton from "@/app/ui/clientButton";
import DownloadButton from "@/app/ui/DownloadButton";

export default function DownloadPage() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'DownloadFile.txt';
        link.download = 'DownloadFile.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <BorderedContent
            label={<Text>Button <SpanHighlight>downloading a file</SpanHighlight>.<CopyCode>#downloadFile</CopyCode></Text>}>
            <DownloadButton
                id="downloadFile"
                filePathToDownload={"DownloadFile.txt"}
                fileNameToDownload={"DownloadFile.txt"}

            >{"Download  Button"}</DownloadButton>
        </BorderedContent>
    );
}