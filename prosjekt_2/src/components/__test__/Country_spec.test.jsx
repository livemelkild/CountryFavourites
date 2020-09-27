import React from "react";
import renderer from "react-test-renderer";
import Country_spec from "../Country_spec";
import themeContext, { ThemeContext } from "../ThemeContext";


it("renders without crashing", () => {
    const tree = renderer.create(
    <Country_spec 
    theme = {<ThemeContext theme={theme}/>}
    name = "name"
    sound = "sound"
    description = "poem"
    img = "img"
    onClick = "hmm"
    />).toJSON();
    expect(tree).toMatchSnapshot();
});