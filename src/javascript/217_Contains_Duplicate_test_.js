(function() {
    "use strict";

    var assert = require("./assert");

    describe("217. Contains Duplicate", function() {
        it("finds duplicates in an array", function() {
            assert.equal(findDuplicateBruteForce([1,2,3,1]), true);
            assert.equal(findDuplicateBruteForce([1,1,1,3,3,4,3,2,4,2]), true);
        });

        it("returns false if no duplicate found", function() {
            assert.equal(findDuplicateBruteForce([1,2,3,4]), false);
        });

        function findDuplicateBruteForce(nums) {
            for (var i = 0; i < nums.length; i++) {
                for (var j = 0; j < nums.length; j++) {
                    if ((nums[i] === nums[j]) && (i !== j)) {
                        return true;
                    }
                }
            }
            return false;
        }
    });

}());