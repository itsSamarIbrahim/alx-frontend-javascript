// Interface representing a Teacher with required properties: firstName, lastName, 
// fullTimeEmployee, location, and an optional yearsOfExperience property. 
// The interface also allows adding any additional properties using an index signature.
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Interface extending Teacher to include a new property: numberOfReports.
// Directors have all properties of a Teacher plus the numberOfReports property.
interface Directors extends Teacher {
    numberOfReports: number;
}

// Interface representing the signature of a function that prints a teacher's name.
// It accepts two string arguments (firstName and lastName) and returns a formatted string.
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Interface describing the constructor of the StudentClass.
// The constructor should accept two string arguments: firstName and lastName.
interface StudentClassConstructor {
    new (firstName: string, lastName:string): StudentClassInterface;
}

// Interface describing the methods that a StudentClass should have.
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implementation of the StudentClass which adheres to the StudentClassInterface.
// The class has a constructor accepting firstName and lastName, and two methods.
class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage of the Teacher interface.
// An object of type Teacher with various properties, including an additional 'contract' property.
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
console.log(teacher3);

// Example usage of the Directors interface.
// An object of type Directors with required properties, including the numberOfReports.
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Example usage of the printTeacher function
// Implementation of the printTeacher function based on the printTeacherFunction interface.
// The function returns the first letter of the first name and the full last name.
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("Sarah", "Ahmed"));

// Example usage of the StudentClass.
// Creating an instance of StudentClass and calling its methods.
const student = new StudentClass("Niro", "Chan");

console.log(student.workOnHomework());
console.log(student.displayName());
