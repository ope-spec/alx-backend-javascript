const { readFile } = require('fs');

function countstudentFields(fileName) {
  const studentFields = {};
  const fieldCounts = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      }
	  else {
        const lines = data.toString().split('\n');

        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studentFields, field[3])) {
              studentFields[field[3]].push(field[0]);
            } else {
              studentFields[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fieldCounts, field[3])) {
              fieldCounts[field[3]] += 1;
            }
			else {
              fieldCounts[field[3]] = 1;
            }
          }
        }

        const l = length - 1;
        console.log(`Number of studentFields: ${l}`);
        for (const [key, value] of Object.entries(fieldCounts)) {
          if (key !== 'field') {
            console.log(`Number of studentFields in ${key}: ${value}. List: ${studentFields[key].join(', ')}`);
          }
        }

        resolve(data);

      }
    });
  });
}

module.exports = countstudentFields;
