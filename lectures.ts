interface Lecture {
    start: number,
    end: number,
    room?: string,
    isDone: boolean 
}

export const lectures: Lecture[] = [
	{
		start: 830,
		end: 945,
		room: "",
		isDone: false,
	},
	{
		start: 845,
		end: 1000,
		room: "",
		isDone: false,
	},
	{
		start: 930,
		end: 1015,
		room: "",
		isDone: false,
	},
	{
		start: 945,
		end: 1100,
		room: "",
		isDone: false,
	},
	{
		start: 1030,
		end: 1145,
		room: "",
		isDone: false,
	},
	{
		start: 1045,
		end: 1200,
		room: "",
		isDone: false,
	},
	{
		start: 830,
		end: 945,
		room: "",
		isDone: false,
	},
	{
		start: 900,
		end: 1015,
		room: "",
		isDone: false,
	},
	{
		start: 915,
		end: 1030,
		room: "",
		isDone: false,
	},
];

export const assignedLectures: Lecture[] = [
	{
		start: 945,
		end: 1100,
		room: "c",
		isDone: false,
	},
	{
		start: 1000,
		end: 1115,
		room: "d",
		isDone: false,
	},
	{
		start: 930,
		end: 1015,
		room: "f",
		isDone: false,
	},
];