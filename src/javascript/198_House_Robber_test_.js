/* jshint esversion: 6*/

(function() {
    "use strict";

    var assert = require("./assert");

    describe("198. House Robber", function() {
        it("finds maximum money to be made from robbing non-consecutive houses", 
            function() {
            assert.equal(calculateMaximumRobberyMoney([1,2,3,1]), 4);
            assert.equal(calculateMaximumRobberyMoney([2,7,9,3,1]), 12);
        });

        function calculateMaximumRobberyMoney(nums) {
            var total = 0;

            for (var i = 0; i < nums.length; i += 2) {
                total += nums[i];
            }

            return total;
        }
    });

}());