import { lectures, assignedLectures } from "./lectures";

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

// Sort assignedLectures by start time

for (let i = 0; i < assignedLectures.length; i++) {
	for (let j = 0; j < assignedLectures.length - 1 - i; j++) {
		if (assignedLectures[j].start > assignedLectures[j + 1].start) {
			let temp = assignedLectures[j + 1];
			assignedLectures[j + 1] = assignedLectures[j];
			assignedLectures[j] = temp;
		}
	}
}

console.log(lectures);

let rooms = ["a", "b", "c", "d", "e", "f", "g", "h"];

for (let i = 0; i < lectures.length; i++) {
	let s = lectures[i].start;
	for (let j = 0; j < i; j++) {
		if (!lectures[j].isDone && s > lectures[j].end) {
			lectures[j].isDone = true;
			// Before using this room, double check if this wont overlap with predefined room
			// If not overlap
			lectures[i].room = lectures[j].room;
			break;

			// If overlaps => continue
		}
	}
	if (lectures[i].room == "") {
		let e = lectures[i].end;
		// check the room's end time overlaps with that preassigned room

		lectures[i].room = rooms.pop();
	}
}

function conflictWithPreassignedRoom(i) {
	// i : index of working lecture
	let e = lectures[i].end;
	rooms.forEach((r) => {
		let l = assignedLectures.filter(
			(lecture) => lecture.room == r && lecture.start > e
		);
		if (l.length > 0) {
		} 
	});
	return true;
}

console.log(lectures);
