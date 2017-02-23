import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import About from "../pages/about";
import { getKittens } from "../api/kittens";

describe("With Snapshot Testing", () => {
  it("About shows a loading", () => {
    const component = renderer.create(<About />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Kittens", () => {
  it("Should fetch an array of kittens", async () => {
    const kittens = await getKittens();
    expect(kittens.data).toBeInstanceOf(Array);
  });
});
