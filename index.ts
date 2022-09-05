import { lectures } from "./lectures";

// Sort lectures by start time

for (let i = 0; i < lectures.length; i++) {
	for (let j = 0; j < lectures.length - 1 - i; j++) {
		if (lectures[j].start > lectures[j + 1].start) {
			let temp = lectures[j + 1];
			lectures[j + 1] = lectures[j];
			lectures[j] = temp;
		}
	}
}
console.log(lectures)

let rooms = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let i = 0; i < lectures.length; i++){
    let s = lectures[i].start;
    for (let j = 0; j < i; j++){
        if (!lectures[j].isDone && s > lectures[j].end) {
            lectures[j].isDone = true;
            lectures[i].room = lectures[j].room;
            break;
        } 
    }
    if (lectures[i].room == '') {
        lectures[i].room = rooms.pop();
    }
}

console.log(lectures)