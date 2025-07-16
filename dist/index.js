"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = __importDefault(require("./stack"));
// linear_search([2, 3, 4, 5, 6, 7, 8], 12)
// binary_search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20], 31);
// two_crystal_balls([false,false,false,false,false,false,false,false,false,true,true])
// bubble_sort([9,8,7,4,5,6,2,3,1]);
// **** Queue implementation **** //
// const t = new Queue<number>();
// t.enqueue(10);
// t.enqueue(20);
// t.enqueue(30);
// t.enqueue(40);
// t.enqueue(50);
// t.enqueue(60);
// t.enqueue(70);
// console.log('peek', t.peek());
// console.log('deque', t.deque());
// console.log('deque', t.deque());
// console.log(t);
//
// **** Stack implementationn ****//
const s = new stack_1.default();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
console.log('pop', s.pop());
console.log("pop 2", s.pop());
console.log('peek', s.peek());
console.log(s);
//
