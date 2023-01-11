import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkSide } from "../hooks/useDarkSide";

export const Switcher: React.FC<any> = () => {
    const { colorTheme, setTheme } = useDarkSide();

    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                className="absolute right-5"
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
}
