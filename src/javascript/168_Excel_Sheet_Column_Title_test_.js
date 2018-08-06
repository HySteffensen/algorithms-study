(function() {

    "use strict";

    var assert = require("./assert");

    describe("168. Excel Sheet Column Title", function() {
        it("returns letter of the alphabet from integer input 1 through 26", function() {
            assert.equal(retrieveLetter(1), 'A');
        });

        it("returns values of alphabet larger than 26", function() {
            assert.equal(retrieveLetter(28), 'AB');
            assert.equal(retrieveLetter(701), 'ZY');
        });

        function retrieveLetter(num) {
            var alphabetMap = getAlphabetMap();

            var firstLetter = alphabetMap[Math.floor(num / 26)];
            var secondLetter = alphabetMap[num % 26];

            if (!firstLetter) firstLetter = '';

            return firstLetter + secondLetter;
        }

        function getAlphabetMap() {
            return {
                1: 'A',
                2: 'B',
                3: 'C',
                4: 'D',
                5: 'E',
                6: 'F',
                7: 'G',
                8: 'H',
                9: 'I',
                10: 'J',
                11: 'K',
                12: 'L',
                13: 'M',
                14: 'N',
                15: 'O',
                16: 'P',
                17: 'Q',
                18: 'R',
                19: 'S',
                20: 'T',
                21: 'U',
                22: 'V',
                23: 'W',
                24: 'X',
                25: 'Y',
                26: 'Z'
            };
        }
    });

}());