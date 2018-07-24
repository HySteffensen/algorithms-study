(function() {
    "use strict";

    var assert = require("./assert");

    describe("35 Search Insert Position", function() {
        it("finds a number in an array", function() {
            assert.equal(searchInsertPosition(5, [1,3,5,6]), 2);
        });

        it("returns index where number would have been had it been found in the array", function() {
            assert.equal(searchInsertPosition(2, [1,3,5,6]), 1);
            assert.equal(searchInsertPosition(7, [1,3,5,6]), 4);
            assert.equal(searchInsertPosition(0, [1,3,5,6]), 0);
        });

        function searchInsertPosition(target, sortedArray) {
            for (var i = 0; i < sortedArray.length; i++) {
                if (target === sortedArray[i] || (target < sortedArray[i])) {
                    return i;
                }
            }
            return i;
        }
    });




}());