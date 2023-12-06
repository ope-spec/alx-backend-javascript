interface StudentConstructor {
	firstName: string;
	lastName: string;
}

interface StudentClass {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClass {
	firstName: string;
	lastName: string;

	constructor({ firstName, lastName }: StudentConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}

const student1 = new StudentClass({
	firstName: "John",
	lastName: "Doe",
});

console.log(student1.workOnHomework());
console.log(student1.displayName());
