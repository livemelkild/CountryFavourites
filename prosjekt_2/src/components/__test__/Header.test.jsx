import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";
import themeContext, { ThemeContext } from "../ThemeContext";


it("renders without crashing", ()=>{
    const tree = renderer.create(<Header 
        theme = {<ThemeContext theme={theme}> </ThemeContext>}
    />).toJSON();
    expect(tree).toMatchSnapshot();
})