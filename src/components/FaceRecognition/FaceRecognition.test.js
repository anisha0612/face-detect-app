import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import FaceRecognition from "./FaceRecognition";

describe("Face Recognition Component ", () => {
  it("creating a snapshot of the face recognition component", () => {
    const mockImgUrl = "http://image.jpg";
    const mockBoxes = [
      { topRow: 23, bottomRow: 45, leftCol: 59, rightCol: 34 },
      { topRow: 40, bottomRow: 75, leftCol: 49, rightCol: 24 },
    ];
    expect(
      create(
        <FaceRecognition imageUrl={mockImgUrl} boxes={mockBoxes} />
      ).toJSON()
    ).toMatchSnapshot();
  });
});
