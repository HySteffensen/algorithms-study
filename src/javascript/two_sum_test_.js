/* global Map */
(function() {

    "use strict";
    
    var assert = require("./assert");

    describe("Two Sums", function() {
        function twoSumsBruteForce(target, nums) {
            for (var i=0; i < nums.length; i++) {
                for (var j=0; j < nums.length; j++) {
                    if (nums[i] + nums[j] === target) {
                        return [i, j];
                    }
                }
            }
            throw new Error("Error: Target Not Found");
        }

        function twoSumsHashTwoPass(target, nums) {
            var map = new Map();
            var i;
            for (i = 0; i < nums.length; i++) {
                map.set(nums[i], i);
            }
            for (i = 0; i < nums.length; i++) {
                if (map.get(target - nums[i]) !== undefined) {
                    return [i, map.get(target - nums[i])];
                }
            }
        }
        
        it("find the sum of two numbers in an array that equal the target", function() {
            assert.deepEqual(twoSumsBruteForce(9, [2, 7, 11, 15]), [0, 1]);
            assert.deepEqual(twoSumsHashTwoPass(9, [2, 7, 11, 15]), [0, 1]);
        });
        
        it("returns an error if no combination is found that equals the target", function() {
            assert.throws(function() {
                twoSumsBruteForce(9, [3, 7, 11, 15]);
            });
        });
    });
}());