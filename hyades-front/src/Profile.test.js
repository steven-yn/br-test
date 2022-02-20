import React from "react";
import { shallow, mount, render } from "enzyme";
import Profile from "./Profile";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="velopert" name="김민준" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders username and name", () => {
    const wrapper = mount(<Profile username="velopert" name="김민준" />);
    expect(wrapper.props().username).toBe("velopert");
    expect(wrapper.props().name).toBe("김민준");
  });
});
