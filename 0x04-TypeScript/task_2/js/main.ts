// DirectorInterface with methods for working from home, taking coffee breaks, and handling director tasks.
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface with methods for working from home, taking coffee breaks, and handling teacher tasks.
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class that implements the DirectorInterface.
// Implements the methods with specific return strings.
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class that implements the TeacherInterface.
// Implements the methods with specific return strings.
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create either a Director or a Teacher based on the salary.
// If salary is a number and less than 500, it returns a new Teacher. Otherwise, it returns a Director.
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Testing the createEmployee function with various inputs.
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
