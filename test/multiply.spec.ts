import 'mocha';
import { expect } from 'chai';
import { productTable } from '../src/multiply';

describe('Test', () => {
  it ('Test2', () =>{
    expect(productTable(2)).to.be.eq(4);
  });
});