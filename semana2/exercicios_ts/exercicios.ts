//exercício 1

interface IStudent {
  name: string;
  profession: string;
  age: number;
  interests: string[];
}

//exercício 2

const heric: IStudent = {
  name: 'Heric Felix Martins',
  profession: 'Front End Web Developer',
  age: 27,
  interests: ['Videogames', 'Books', 'Music'],
};

//exercício 3 e 4

const getInterests = (student: IStudent): string[] => {
  return student.interests;
};

//exercício 5

enum Subjects {
  Angular = 'Angular',
  Typescript = 'Typescript',
  Git = 'Git',
}

//exercício 6

interface IProfessor {
  name: string;
  subjects: string[];
}

//exercício 7

const nathan: IProfessor = {
  name: 'Nathan',
  subjects: [Subjects.Angular, Subjects.Git],
};

const alan: IProfessor = {
  name: 'Alan',
  subjects: [Subjects.Angular, Subjects.Git, Subjects.Typescript],
};

//exercício 8

const professors: IProfessor[] = [nathan, alan];

//exercício 9

const getProfessorsNames = (professors: IProfessor[]): string[] => {
  return professors.map((el) => el.name);
};

//exercício 10

const getProfessorsSubjects = (professors: IProfessor[]): string[][] => {
  return professors.map((el) => el.subjects);
};

//exercício 11

const getTypescriptProfessor = (
  professors: IProfessor[]
): IProfessor | undefined => {
  return professors.find((el) => el.subjects.includes('Typescript'));
};
