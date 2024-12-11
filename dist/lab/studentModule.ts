export class Student {
    id : number;
    name: string;
    age: number;
    major : string;
    constructor(id: number, name: string, age: number, major : string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.major = major
    }
    getDetail() {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`
    }
}
export class StudentManager {
    private students: Student[] = [];
    constructor(students: Student[]) {
        this.students = students
    }
    addStudent(student: Student) {
        this.students.push(student)
    }
    removeStudent(id: number): boolean {
        const index = this.students.findIndex((student) => student.id === id)
        if (index !== -1) {
            this.students.splice(index, 1)
            return true
        }
        return false

    }
    getStudent(id: number) {
        return this.students.find((student) => student.id === id)
    }
}
