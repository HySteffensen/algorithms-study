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
            throw new Error("Target Not Found");
        }
        
        it("find two sums in an array that equal the target", function() {
            assert.deepEqual(twoSumsBruteForce(9, [2, 7, 11, 15]), [0, 1]);
        });
        
        // it("returns an error if no combination is found that equals the target", function() {
        //     assert.throws(function() {
        //         twoSumsBruteForce(9, [3, 7, 11, 15]);
        //     });
        // });
    });
}());