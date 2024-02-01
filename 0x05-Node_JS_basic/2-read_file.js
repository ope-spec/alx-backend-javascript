const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n');

    for (const line of lines) {
      const fieldsArray = line.split(',');

      if (fieldsArray.length >= 4) {
        const fieldName = fieldsArray[3];
        const studentName = fieldsArray[0];

        if (!students[fieldName]) {
          students[fieldName] = [];
          fields[fieldName] = 0;
        }

        students[fieldName].push(studentName);
        fields[fieldName] += 1;
        totalStudents += 1;
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(fields)) {
      if (field !== 'field') {
        console.log(`Number of students in ${field}: ${count}.`);
        console.log(`List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
