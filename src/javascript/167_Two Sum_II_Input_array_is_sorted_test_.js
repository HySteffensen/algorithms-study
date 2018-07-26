(function() {
    "use strict";

    var assert = require("./assert");

    describe("167. Two Sum II - Input array is sorted", function() {
        it("finds the sum of two numbers in an array that equals a target", function() {
            function twoSumII(numSet, target) {
                for (var i = 0; i < numSet.length; i++) {
                    for (var j = 0; j < numSet.length; j++) {
                        if ((numSet[i] + numSet[j]) === target) {
                            return [i + 1, j + 1];
                        }
                    }
                }
            }

            assert.deepEqual(twoSumII([2,7,11,15], 9), [1, 2]);
        });

    });












}());