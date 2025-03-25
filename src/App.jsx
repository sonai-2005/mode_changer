import './App.css'
import Card from './components/card'
import ThemeBtn from './components/themeBtn'
import { ThemeProvider } from './context/theme'
import { useEffect, useState } from 'react'
function App() {

    const [theme, settheme] = useState("light")
    const lightMode = () => {
        settheme("light");
    }
    const darkMode = () => {
        settheme("dark");
    }

    //change in theme have to do using classic js

    useEffect(() => {
        document.querySelector('html').classList.remove("dark", "light");
        document.querySelector('html').classList.add(theme);

    }, [theme])

    return (
        <>
        <ThemeProvider value={{theme, lightMode, darkMode }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <Card/>
                    <div className="w-full max-w-sm mx-auto">

                    </div>
                </div>
            </div>
        </ThemeProvider>
        
        </>
    )
}

export default App
