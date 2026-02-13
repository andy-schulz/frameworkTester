import React from 'react';

interface RowTextProps {
    children?: React.ReactNode
}

const RowText: React.FC<RowTextProps> = (props) => {
  return (
    <span className="flex flex-row">
        {props.children}
    </span>
  );
};

export default RowText;