import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(req.filePath);
      const fields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      
      res.status(200).send('This is the list of our students\n' +
        fields.map(field => `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`).join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const studentsByField = await readDatabase(req.filePath);
      const major = req.params.major.toUpperCase();
      
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }
      
      if (!(major in studentsByField)) {
        res.status(200).send(`List: `);
      } else {
        res.status(200).send(`List: ${studentsByField[major].join(', ')}\n`);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
