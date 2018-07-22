(function() {
    "use strict";

    var assert = require("./assert");

    describe("Palindrome Number", function() {
        it("reads the same forward and backward", function() {
            // assert.equal(isItAPalindrome(121), true);
            assert.equal(isItAPalindrome([123]), false);
        });

        function isItAPalindrome(x) {
            return x === x.toString().split("").reverse();
        }

    });





}());