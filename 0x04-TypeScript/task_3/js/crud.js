/**
 * Inserts a row into the database.
 * @param {RowElement} row - The row to be inserted.
 * @returns {number} - The ID of the inserted row.
 */
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000)); // Mock ID
}

/**
 * Deletes a row from the database.
 * @param {RowID} rowId - The ID of the row to be deleted.
 */
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
}

/**
 * Updates a row in the database.
 * @param {RowID} rowId - The ID of the row to be updated.
 * @param {RowElement} row - The updated row data.
 * @returns {RowID} - The ID of the updated row.
 */
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId; // Return the same ID to indicate success
}
