import React, {useState, createContext} from 'react';

interface ThemeContextProps {
    theme: 'light' | 'dark' | 'colorful';
    setTheme: (val: ('light' | 'dark' | 'colorful')) => void;
}

interface ThemeProps{}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider: React.FC<ThemeProps> = ({children}) => {
    const [theme, setTheme] = useState<'light' | 'dark' | 'colorful'>('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
