import React from 'react';

interface RowTextProps {
    children?: React.ReactNode
}

const RowText: React.FC<RowTextProps> = (props) => {
  return (
    <text className="flex flex-row">
        {props.children}
    </text>
  );
};

export default RowText;