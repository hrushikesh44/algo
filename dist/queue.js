"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    enqueue(item) {
        const node = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque() {
        if (!this.head) {
            return;
        }
        const head = this.head;
        this.head = this.head.next;
        this.length--;
        if (!this.head) {
            this.tail = undefined;
        }
        return head.value;
    }
    peek() {
        var _a;
        if (this.head) {
            return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
        }
    }
}
exports.default = Queue;
