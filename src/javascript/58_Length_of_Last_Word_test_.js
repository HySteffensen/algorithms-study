(function() {
    "use strict";

    var assert = require("./assert");

    describe("58 Length of Last Word", function() {
        
        it("finds the length of the last word", function() {
            assert.equal(lengthOfLastWord("Hello World"), 5);
        });

        it("returns 0 if there are no words", function() {
            assert.equal(lengthOfLastWord(""), 0);
        });

        it("thows an error message if there is no input", function() {
            assert.throws(function() {
                lengthOfLastWord();
            }, "Error: No input provided.");
        });
        
        function lengthOfLastWord(str) {
            if (str === undefined) throw new Error("Error: No input provided.");
            return str.split(" ").pop().length;
        }

    });

}());