'use strict';

var _chai = require('chai');

var _smokeTest = require('../src/smokeTest.js');

describe('Smoke Test', function () {

    it('should be an array ', function () {
        (0, _chai.expect)([]).to.be.an('array');
    });

    it("should not be a number", function () {
        (0, _chai.expect)([]).to.not.be.an('number');
    });
});

describe("File Smoke Test", function () {

    it("should get a value from the file", function () {
        var result = (0, _smokeTest.smokeSum)(2, 3);

        (0, _chai.expect)(result).to.equal(5);
    });
});