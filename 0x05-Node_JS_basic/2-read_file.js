const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter(Boolean);

    const fieldCounts = {};

    lines.forEach((line) => {
      const [, , , field] = line.split(',');
      if (field in fieldCounts) {
        fieldCounts[field]++;
      } else {
        fieldCounts[field] = 1;
      }
    });

    console.log(`Number of students: ${lines.length}`);

    Object.entries(fieldCounts).forEach(([field, count]) => {
      const students = lines.filter(line => line.endsWith(`,${field}`)).map(line => line.split(',')[0]);
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
