import React, {useContext} from "react";
import renderer from "react-test-renderer";
import Header from "../Header";
import ThemeContext from "../ThemeContext";


it("renders without crashing", ()=>{
    const tree = renderer.create(<ThemeContext><Header /></ThemeContext>).toJSON();
    expect(tree).toMatchSnapshot();
})