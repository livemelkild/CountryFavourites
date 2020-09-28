import React, {useState, createContext} from 'react';

interface ThemeContextProps {
    theme: 'light' | 'dark' | 'colorful' | 'white';
    setTheme: (val: ('light' | 'dark' | 'colorful' | 'white')) => void;
}

interface ThemeProps{}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider: React.FC<ThemeProps> = ({children}) => {
    const [theme, setTheme] = useState<'light' | 'dark' | 'colorful' | 'white'>('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
