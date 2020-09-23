import React from "react";
import renderer from "react-test-renderer";
import Country from "./../Country";

it("renders without crashing", () => {
    const tree = renderer.create(<Country />).toJSON();
    expect(tree).toMatchSnapshot();
});