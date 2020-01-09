import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

describe("<Test />", () => {
  test("x to be 4", async () => {
      let x = 4;
      expect(x).toBe(4);
  });
});