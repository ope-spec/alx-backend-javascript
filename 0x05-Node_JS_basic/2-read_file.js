const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const stdcounts = {};
  let length = 0;

  try {
    const fileData = fs.readFileSync(fileName, 'utf-8');

    const lines = fileData.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(stdcounts, field[3])) {
          stdcounts[field[3]] += 1;
        } else {
          stdcounts[field[3]] = 1;
        }
      }
    }

    const l = length - 1;
    console.log(`Number of students: ${l}`);

    for (const [key, value] of Object.entries(stdcounts)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
