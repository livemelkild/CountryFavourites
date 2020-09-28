import React from "react";
import renderer from "react-test-renderer";
import Start_page from "../Start_page";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


it("renders without crashing", () => {
    const tree = renderer.create(<Router><Start_page /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});