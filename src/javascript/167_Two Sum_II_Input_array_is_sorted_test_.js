/* jshint esversion: 6 */
(function() {
    "use strict";

    var assert = require("./assert");

    describe("167. Two Sum II - Input array is sorted", function() {
        it("finds the sum of two numbers in an array that equals a target", function() {
            assert.deepEqual(twoSumII([2,7,11,15], 9), [1, 2]);
            assert.deepEqual(twoSumTwoPointers([2,7,11,15], 9), [1, 2]);
        });
        
        it("throws an error when no solution is found", function() {
            assert.throws(function() {
                twoSumII([2,8,11,15], 9);
            }, "No solution found.");
            assert.deepEqual(twoSumTwoPointers([2,8,11,15], 9), []);
        });

        function twoSumTwoPointers (numbers, target) {
            var lo = 0;
            var hi = numbers.length -1;

            while (lo < hi) {
                var sum = numbers[lo] + numbers[hi];

                if (sum === target) {
                    return [lo + 1, hi + 1];
                } else if (hi > lo) {
                    hi = hi - 1;
                } else {
                    lo = lo + 1;
                }
            }
            return [];
        }

        function twoSumII(numSet, target) {
            for (var i = 0; i < numSet.length; i++) {
                for (var j = 0; j < numSet.length; j++) {
                    if ((numSet[i] + numSet[j]) === target) {
                        return [i + 1, j + 1];
                    }
                }
            }
            throw new Error("No solution found.");
        }

    });

}());