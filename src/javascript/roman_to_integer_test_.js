(function() {
    "use strict";

    var assert = require("./assert");

    describe("Roman to Integer", function() {
        it("converts 'I' to 1", function() {
            assert.equal(convertRomanToInteger("I"), 1);
        });

        it("converts 'III' to 3", function() {
            assert.equal(convertRomanToInteger("III"), 3);
        });

        it("converts 'IV' to 4", function() {
            assert.equal(convertRomanToInteger("IV"), 4);
        });

        it("converts 'IX' to 9", function() {
            assert.equal(convertRomanToInteger("IX"), 9);
        });

        it("converts 'LVIII' to 58", function() {
            assert.equal(convertRomanToInteger("LVIII"), 58);
        });

        it("converts 'MCMXCIV' to 1994", function() {
            assert.equal(convertRomanToInteger("MCMXCIV"), 1994);
        });

        function convertRomanToInteger(romanNumeralsString) {
            var numeralsArray = romanNumeralsString.split("");
            var total = 0;
            var previousValue = 0;

            while (numeralsArray.length > 0) {
                var currentRomanNumeral = numeralsArray.pop();
                var currentValue = getDecimalValueFromRomanNumeral(currentRomanNumeral);
                if (previousValue > currentValue) {
                    currentValue = currentValue * -1;
                }
                previousValue = currentValue;
                total += currentValue;
            }

            return total;

            function getDecimalValueFromRomanNumeral(romanNumeral) {
                var map = {
                    I: 1,
                    V: 5,
                    X: 10,
                    L: 50,
                    C: 100,
                    D: 500,
                    M: 1000
                };

                return map[romanNumeral];
            }
        }

    });





}());