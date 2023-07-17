import * as React from "react";
import { useState } from "react";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    const handleToggle = (e: React.MouseEvent<HTMLSpanElement>) => {
        setIsDark(!isDark);
        document.body.className = isDark ? "bg-slate-300" : "bg-slate-800 dark";
    };

    return (
        <span className="mx-5" onClick={handleToggle}>
            {isDark ? "☀️" : "🌑"}
        </span>
    );
};

export default DarkModeToggle;
