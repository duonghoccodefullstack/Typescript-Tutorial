"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = exports.Student = void 0;
class Student {
    constructor(id, name, age, major) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.major = major;
    }
    getDetail() {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`;
    }
}
exports.Student = Student;
class StudentManager {
    constructor(students) {
        this.students = [];
        this.students = students;
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(id) {
        const index = this.students.findIndex((student) => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    }
    getStudent(id) {
        return this.students.find((student) => student.id === id);
    }
}
exports.StudentManager = StudentManager;
//# sourceMappingURL=studentModule.js.map