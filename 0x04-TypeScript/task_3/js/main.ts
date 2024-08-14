/// <reference path="./crud.d.ts" />

// Import the types and the CRUD functions
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert the row and store the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updateRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
CRUD.updateRow(newRowID, updateRow);

// Delete the row
CRUD.deleteRow(newRowID);
