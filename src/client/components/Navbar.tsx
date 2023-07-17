import * as React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    return (
        <div className="p-3 bg-blue-600 dark:bg-blue-900 text-blue-200 dark:text-blue-400 text-3xl">
            <div className="flex justify-between">
                <span>Navbar!</span>
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
