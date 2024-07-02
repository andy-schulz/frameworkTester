import React from 'react';

interface SpanHighlightProps {
    children?: React.ReactNode
}
const SpanHighlight: React.FC<SpanHighlightProps> = props => {


    return (
        <span className={"font-bold text-sky-500 px-2"}>{props.children}</span>

    );
}


export default SpanHighlight;