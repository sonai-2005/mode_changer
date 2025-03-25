import React from "react";
import { useContext, createContext } from "react";

export const Themecontext = createContext({
    theme:"light",
    darkMode:()=>{console.log("dark")},
    lightMode:()=>{},
})
export const ThemeProvider = Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext);
}