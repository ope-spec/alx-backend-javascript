const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(Boolean);

      const fieldCounts = {};

      lines.forEach((line) => {
        const [, , , field] = line.split(',');
        fieldCounts[field] = (fieldCounts[field] || 0) + 1; // Increment the count for the field
      });

      console.log(`Number of students: ${lines.length}`);

      Object.entries(fieldCounts).forEach(([field, count]) => {
        const students = lines.filter((line) => line.endsWith(`,${field}`)).map((line) => line.split(',')[0]);
        console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
