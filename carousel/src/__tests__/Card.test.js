import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Card from "../Card";
import TEST_IMAGES from "../_testCommon.js";
import React from "react";

it("smoke test for card", function () {
  let currCard = TEST_IMAGES[0];
  const { container } = render(
    <Card
      caption={currCard.caption}
      src={currCard.src}
      currNum={1}
      totalNum={1}
    />
  );
  expect(screen.getByText(currCard.caption)).toBeInTheDocument();
});

it("snapshot test for card", function () {
  let currCard = TEST_IMAGES[0];
  const card = renderer
    .create(
      <Card
        caption={currCard.caption}
        src={currCard.src}
        currNum={1}
        totalNum={1}
      />
    )
    .toJSON();
  console.log(card);
  expect(card).toMatchSnapshot();
});
