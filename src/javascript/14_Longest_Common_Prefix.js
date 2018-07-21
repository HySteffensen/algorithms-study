/* jshint esversion: 6 */

(function() {
    "use strict";

    var assert = require("./assert");

    describe("Longest Common Prefix", function() {
        it("Finds the longest common prefix between words", function() {
            assert.equal(longestCommonPrefix(["flower","flow","flight"]), "fl");
            assert.equal(longestCommonPrefix([]), "");
            assert.throws(function() {
                longestCommonPrefix();
            }, "Error: No input was passed.");
        });

        function longestCommonPrefix(wordList) {
            if (wordList === undefined) throw "Error: No input was passed.";
            if (!wordList.length) return '';

            for (var i = 0; i < wordList[0].length; i++) {
                for (var word of wordList) {
                    if (word[i] !== wordList[0][i]) {
                        return word.slice(0, i);
                    }
                }
            }
            return wordList[0];
        }
    });

}());