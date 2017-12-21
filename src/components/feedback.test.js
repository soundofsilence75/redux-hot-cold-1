import React from "react";
import { shallow, mount } from "enzyme";

import { Feedback } from "./feedback"; 

describe("<Feedback />", () => {
  it("Renders without crashing", () => {
    shallow(<Feedback />);
  });

  it("Renders the feedback", () => {
    const text = " Guess again!";
    const wrapper = shallow(<Feedback text={text} />);
    expect(wrapper.text()).toEqual(text);
  });
});