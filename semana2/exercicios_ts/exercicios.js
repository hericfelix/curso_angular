"use strict";
//exercício 1
//exercício 2
const heric = {
    name: 'Heric Felix Martins',
    profession: 'Front End Web Developer',
    age: 27,
    interests: ['Videogames', 'Books', 'Music'],
};
//exercício 3 e 4
const getInterests = (student) => {
    return student.interests;
};
//exercício 5
var Subjects;
(function (Subjects) {
    Subjects["Angular"] = "Angular";
    Subjects["Typescript"] = "Typescript";
    Subjects["Git"] = "Git";
})(Subjects || (Subjects = {}));
//exercício 7
const nathan = {
    name: 'Nathan',
    subjects: [Subjects.Angular, Subjects.Git],
};
const alan = {
    name: 'Alan',
    subjects: [Subjects.Angular, Subjects.Git, Subjects.Typescript],
};
//exercício 8
const professors = [nathan, alan];
//exercício 9
const getProfessorsNames = (professors) => {
    return professors.map((el) => el.name);
};
//exercício 10
const getProfessorsSubjects = (professors) => {
    return professors.map((el) => el.subjects);
};
//exercício 11
const getTypescriptProfessor = (professors) => {
    return professors.find((el) => el.subjects.includes('Typescript'));
};
