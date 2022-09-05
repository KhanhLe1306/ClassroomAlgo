"use strict";
exports.__esModule = true;
var lectures_1 = require("./lectures");
// Sort lectures by start time
for (var i = 0; i < lectures_1.lectures.length; i++) {
    for (var j = 0; j < lectures_1.lectures.length - 1 - i; j++) {
        if (lectures_1.lectures[j].start > lectures_1.lectures[j + 1].start) {
            var temp = lectures_1.lectures[j + 1];
            lectures_1.lectures[j + 1] = lectures_1.lectures[j];
            lectures_1.lectures[j] = temp;
        }
    }
}
console.log(lectures_1.lectures);
var rooms = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
for (var i = 0; i < lectures_1.lectures.length; i++) {
    var s = lectures_1.lectures[i].start;
    for (var j = 0; j < i; j++) {
        if (!lectures_1.lectures[j].isDone && s > lectures_1.lectures[j].end) {
            lectures_1.lectures[j].isDone = true;
            lectures_1.lectures[i].room = lectures_1.lectures[j].room;
            break;
        }
    }
    if (lectures_1.lectures[i].room == '') {
        lectures_1.lectures[i].room = rooms.pop();
    }
}
console.log(lectures_1.lectures);
