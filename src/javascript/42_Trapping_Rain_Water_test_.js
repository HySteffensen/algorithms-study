(function() {
    "use strict";

    var assert = require("./assert");
 
    describe("42. Trapping Rain Water", function() {
        it("calculates how many squares have trapped rainwater", function() {
            assert.equal(countWaterInTrap([0,1,0,2,1,0,1,3,2,1,2,1]), 6);
        });

        function countWaterInTrap(nums) {
            var leftPointer = 0;
            var rightPointer = nums.length - 1;
            var leftMax = 0;
            var rightMax = 0;
            var totalRain = 0;

            while (leftPointer < rightPointer) {
                
                if (nums[leftPointer] > leftMax) { 
                    leftMax = nums[leftPointer];
                } else {
                    totalRain += (leftMax - nums[leftPointer]);
                }

                if (nums[rightPointer] > rightMax) {
                    rightMax = nums[rightPointer];
                } else {
                    totalRain += (rightMax - nums[rightPointer]);
                }
                
                if (nums[leftPointer] < nums[rightPointer]) {
                    leftPointer++;
                } else {
                    rightPointer--;
                }
            }
            return totalRain;
        }
    });

}());