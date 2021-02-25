import React from "react";
import { shallow } from "enzyme";
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
});
