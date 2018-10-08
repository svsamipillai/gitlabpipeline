const expect = require("chai").expect;

describe("app", () => { 
  it("a good test", () => {
   expect({a: 1}).to.not.have.property('b');
   expect([1, 2]).to.be.an('array').that.does.not.include(3);
  }) 
});