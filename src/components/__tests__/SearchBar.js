import React from "react";
import { shallow } from "enzyme";
import Searchbar from "../SearchBar";

describe("Searchbar", () => {
  let searchbar;

  beforeEach(() => {
    searchbar = shallow(<Searchbar searchWord="" />);
  });

  it("should call handleUserInput onChange", () => {
    let handleUserInput = jest.fn();
    searchbar.setProps({ handleUserInput });

    searchbar.find("input").simulate("change");

    expect(handleUserInput.mock.calls.length).toBe(1);
  });

  it("should call display the current searchWord", () => {
    let searchWord = "test";

    searchbar.setProps({ searchWord });

    expect(searchbar.find("input").getElement().props.defaultValue).toBe(
      "test"
    );
  });
});
