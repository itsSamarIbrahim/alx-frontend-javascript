interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Sarah",
    lastName: "Ahmed",
    age: 20,
    location: "Cairo"
};

const student2: Student = {
    firstName: "Mohammed",
    lastName: "Ali",
    age: 22,
    location: "Giza"
};

const studentsList: Student[] = [student1, student2];


// table element
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// create and append the table headers
const headerRow = document.createElement('tr');

const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(locationHeader);

thead.appendChild(headerRow);
table.appendChild(thead);

// loop through the student list and create table rows
studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

// append the table body to the table
table.appendChild(tbody);

// append the table to the document body (or to a specific element in the html file)
document.body.appendChild(table);
