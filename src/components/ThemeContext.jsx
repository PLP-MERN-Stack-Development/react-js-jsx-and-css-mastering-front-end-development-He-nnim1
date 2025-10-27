import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [darkmode, setDarkmode] = useState(false);

    useEffect(()=> {
        if(darkmode){
            return document.documentElement.classList.add("dark");
            } else{
                return document.documentElement.classList.remove("dark");
            }
    }, [darkmode]);

    return (
        <ThemeContext.Provider value={{darkmode, setDarkmode}}>
            {children}
        </ThemeContext.Provider>
    );
}

//custom hook
export function useTheme(){
    return useContext(ThemeContext);
}
























