(function() {

    "use strict";

    var assert = require("./assert");

    describe("155. Min Stack", function() {
        var MinStack = function() {
            this.stack = {};
            this.stack.values = [];
        };

        MinStack.prototype.push = function(x) {
            if (x < this.stack.min || this.stack.min === undefined) this.stack.min = x;
            if (x > this.stack.top || this.stack.top === undefined) this.stack.top = x;

            this.stack.values.push(x);
        };

        MinStack.prototype.pop = function() {
            this.stack.values.pop();
            this.stack.min = this.stack.values[0];
            this.stack.top = this.stack.values[0];
            for (var i = 0; i < this.stack.values.length; i++) {
                if (this.stack.values[i] < this.stack.min) {
                    this.stack.min = this.stack.values[i];
                }
                if (this.stack.values[i] > this.stack.top) {
                    this.stack.top = this.stack.values[i];
                }
            }
        };

        MinStack.prototype.min = function() {
            return this.stack.min;
        };

        MinStack.prototype.top = function() {
            return this.stack.top;
        };

        it("adds to the stack", function() {
            var minStack = new MinStack();
            minStack.push(-3);
            minStack.push(-2);
            assert.equal(minStack.min(), -3);
        });

        it("pops the last value off the stack", function() {
            var minStack = new MinStack();
            minStack.push(-2);
            minStack.push(0);
            minStack.push(-3);
            minStack.pop();
            assert.equal(minStack.min(), -2);
        });

        it("finds the lowest value in the stack", function() {
            var minStack = new MinStack();
            minStack.push(0);
            minStack.push(-2);
            minStack.push(-3);
            minStack.pop();
            assert.equal(minStack.min(), -2);
        });

        it("finds the top value in the stack",function() {
            var minStack = new MinStack();
            minStack.push(-3);
            minStack.push(-2);
            minStack.push(0);
            minStack.pop();
            assert.equal(minStack.top(), -2);
        });
    });
    
}());