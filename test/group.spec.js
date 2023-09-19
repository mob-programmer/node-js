const expect = require("chai").expect;
const group = require("../app/group");

describe("The group", () => {
  it("can make a test pass", () => {
    expect(group.canMakeTestPass()).to.be.true;
  });
});
