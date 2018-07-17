(function() {

    "use strict";

    var assert = require("./assert");

    describe("Reverse Integer", function() {

        it("reverses an integer", function() {
            assert.equal(reverseInteger(123), 321);
        });

        it("reverses an integer with a negative sign", function() {
            assert.equal(reverseInteger(-123), -321);
        });
        
        it("handles zeros", function() {
            assert.equal(reverseInteger(120), 21);
        });

        function reverseInteger(int) {
            var pop;
            var reverse = "";
            var isNegative = false;
            if (int < 0) {
                isNegative = true;
                int = int * -1;
            }
            while (int > 0) {
                pop = int % 10;
                int = Math.floor(int / 10);
                reverse = reverse + pop;
            }
            if (isNegative) reverse = "-" + reverse;
            return reverse;
        }
    });
}());