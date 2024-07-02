import React from 'react';

const Header: React.FC = () => {
    return <header>
        <div className="flex flex-row">
            <div id={"performed action"}
                 className="lg:text-2xl md:text-base sm:text-xs font-semibold text-center grow ">

                    <div
                        className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                        role="alert">
                        <span
                            className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">ACTION</span>
                        <span className="headerElement font-semibold mr-2 flex-auto text-center">none</span>
                        <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                            <path
                                d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                        </svg>
                    </div>

            </div>
        </div>
    </header>;
};

export default Header;