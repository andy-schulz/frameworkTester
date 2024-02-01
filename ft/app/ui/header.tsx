import React from 'react';

const Header: React.FC = () => {
    return <header>
        <div className="flex flex-row">
            <div className={"px-2"} >
                performed Action:
            </div>
            <div id={"performed action"}
                 className="headerElement lg:text-2xl md:text-base sm:text-xs font-semibold text-center grow">
                This is the header.
            </div>
        </div>
    </header>;
};

export default Header;