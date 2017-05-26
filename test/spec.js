import {expect} from "chai";

// const chai = require('chai');
// const expect = chai.expect;

const double = (num) => num * 2

const add = (num1, num2) => num1 + num2

describe('calculate:', () => {
  it('double', () => {
    expect(double(5)).to.be.equal(10);
  })
  it('add', () => {
    expect(add(2, 4)).to.be.equal(6);
  })
})
