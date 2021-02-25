import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import ImageLinkForm from "./ImageLinkForm";

describe("ImageLink Form Component", () => {
  // check  onchange the onInputChange function (prop) is called
  it("Input calls the onInputChange prop", () => {
    const mockOnInputChange = jest.fn();
    const event = {
      preventDefault() {},
      target: {
        value: "image.jpg",
      },
    };
    const wrapper = shallow(
      <ImageLinkForm onInputChange={mockOnInputChange} />
    );

    wrapper.find("input").simulate("change", event.target.value);
    expect(mockOnInputChange).toBeCalledWith("image.jpg");
  });

  //   Snapshot Testing of Image Link Component
  it("expect Image Link component is rendered", () => {
    const mockOnInputChange = jest.fn();
    const mockButtonSubmit = jest.fn();
    const wrapper = create(
      <ImageLinkForm
        onInputChange={mockOnInputChange}
        onButtonSubmit={mockButtonSubmit}
      />
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
