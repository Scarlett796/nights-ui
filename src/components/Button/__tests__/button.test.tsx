import React from "react";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import NiceButton from "..";

afterEach(() => {
  cleanup();
});

describe("button test", () => {
  it("should render a primary button and the button is disabled", function () {
    const onClick=()=>alert("click me");
    const button = render(
      <NiceButton type="primary" disabled={true}>
        click
      </NiceButton>
    );
    const children = button.getByText('click')
    expect(children.tagName).toEqual("BUTTON")
    expect(children).toHaveClass("nice-btn-primary");
    expect(children).toHaveClass("nice-btn-disabled");
    expect(children).toHaveClass("nice-btn-default");
  });

  it("should render a success button and the button size is large", function () {
    const onClick=()=>alert("click me");
    const button = render(
      <NiceButton type="success" size='large' onClick={onClick}>
        success
      </NiceButton>
    );
    const children = button.getByText('success')
    console.log('*************************',children)
    expect(children.tagName).toEqual("BUTTON")
    expect(children).toHaveClass("nice-btn-success");
    expect(children).toHaveClass("nice-btn-large");
    expect(children).toHaveClass("nice-btn");
    // expect(children).toH("nice-btn");
    // expect(children).toHaveClass("nice-btn-default");
  });
});

