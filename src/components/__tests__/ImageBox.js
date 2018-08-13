import React from "react";
import { shallow } from "enzyme";
import ImageBox from "./ImageBox";

describe("ImageBox", () => {
  let imageBox;

  beforeEach(() => {
    imageBox = shallow(<ImageBox />);
  });

  it("should render images", () => {});
});
