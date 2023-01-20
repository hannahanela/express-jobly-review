"use strict";

const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {
  it("works for 1 item", function () {
    const result = sqlForPartialUpdate(
      { testData: "Test" },
      { testData: "test_data" }
    );

    expect(result).toEqual({
      setCols: `"test_data"=$1`,
      values: ["Test"],
    });
  });

  it("works for more than 1 item", function () {
    const result = sqlForPartialUpdate(
      { testName: "Test", testNum: 1 },
      { testName: "test_name", testNum: "test_num" }
    );

    expect(result).toEqual({
      setCols: `"test_name"=$1, "test_num"=$2`,
      values: ["Test", 1],
    });
  });
});
