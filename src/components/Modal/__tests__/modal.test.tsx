import React from "react";
import { NiceModal } from "../..";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

describe("modal test", () => {
  it("should render a modal", function () {
    const onCancelClick = jest.fn();
    const modal = render(
      <NiceModal title="test" visible={true} onCancel={onCancelClick}>
        111
      </NiceModal>
    );
    // console.log("modal:",modal)
    const title = modal.getByText("test");
    const content = modal.getByText("111");
    // console.log(title, content)
    expect(title.tagName).toEqual("P");
    expect(title).toHaveClass("nice-modal-title");
  });
});

// describe("test snap", () => {
//   it("hah", function () {
//     const tree = renderer.create(<p>Hello world!</p>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
