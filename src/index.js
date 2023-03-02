"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
class Test {
    constructor(name) {
        this.name = name;
    }
    action() {
        return `Hello ${this.name}`;
    }
}
exports.Test = Test;
