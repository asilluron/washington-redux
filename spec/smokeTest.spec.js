import { expect, assert } from 'chai';
import { smokeSum } from '../src/smokeTest.js';

describe('Smoke Test', () => {
    
    it('should be an array ', () => {
        expect([]).to.be.an('array');
    });

    it("should not be a number", () => {
        expect([]).to.not.be.an('number');    
    });

});

describe("File Smoke Test", () => {
    
    it("should get a value from the file", () => {
        let result = smokeSum(2,3);
        
        expect(result).to.equal(5);
    });

});