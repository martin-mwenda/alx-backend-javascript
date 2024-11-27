import fs from 'fs';

/**
 * This function reads a CSV database and groups students by their field of study.
 * It returns a promise that resolves to an object with fields as keys and arrays of student objects as values.
 * Each student object contains the student's first name, last name, and age.
 *
 * @param {string} dbPath - The file path to the CSV database.
 * @returns {Promise<Object>} - A promise that resolves to an object where each key is a field (e.g., 'Math', 'Science') 
 *                               and the value is an array of student objects with their respective details.
 */
const readDatabase = (dbPath) => new Promise((resolve, reject) => {
  if (!dbPath) {
    reject(new Error('Cannot load the database: No file path provided.'));
    return;
  }

  fs.readFile(dbPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database: ' + err.message));
      return;
    }

    const lines = data.toString('utf-8').trim().split('\n');

    if (lines.length < 2) {
      reject(new Error('Cannot load the database: No data found.'));
      return;
    }

    const studDepts = {};  // An object to hold students grouped by their field
    const dbFieldNames = lines[0].split(',');  // First row should be the header with field names

    // Assuming the first columns represent student details, excluding the last column (field)
    const studPName = dbFieldNames.slice(0, dbFieldNames.length - 1);  

    // Process each student record
    for (const line of lines.slice(1)) {
      const studRec = line.split(',');
      const studPVal = studRec.slice(0, studRec.length - 1);  // Student details
      const field = studRec[studRec.length - 1];  // Field of study is the last element

      if (!studDepts[field]) {
        studDepts[field] = [];
      }

      // Combine the student details into an object with field names as keys
      const studResults = studPName.map((pName, idx) => [pName, studPVal[idx]]);
      studDepts[field].push(Object.fromEntries(studResults));
    }

    resolve(studDepts);  // Return the final grouped data
  });
});

export default readDatabase;  // ES6 export syntax for module
module.exports = readDatabase;  // CommonJS export for compatibility
