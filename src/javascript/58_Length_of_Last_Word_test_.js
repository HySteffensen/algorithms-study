(function() {
    "use strict";

    var assert = require("./assert");

    describe("58 Length of Last Word", function() {
        
        it("finds the length of the last word", function() {
            assert.equal(lengthOfLastWord("Hello World"), 5);
        });
        
        function lengthOfLastWord(str) {
            return str.split(" ").pop().length;
        }

    });

}());