const db = require('../database');

const opintorekisteri = {
    //Opiskelija
  getAllStudents: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getStudentsById: function(id, callback) {
    return db.query('select * from opiskelija where idOpiskelija=?', [id], callback);
  },
  addStudent: function(student, callback) {
    return db.query(
      'insert into opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) values(?,?,?,?)',
      [student.Etunimi, student.Sukunimi, student.Osoite, student.Luokkatunnus],
      callback
    );
  },
  deleteStudent: function(id, callback) {
    return db.query('delete from opiskelija where idOpiskelija=?', [id], callback);
  },
  updateStudent: function(id, student, callback) {
    return db.query(
      'update opiskelija set Etunimi=?, Sukunimi=?, Osoite=?, Luokkatunnus=? where idOpiskelija=?',
      [student.Etunimi, student.Sukunimi, student.Osoite, student.Luokkatunnus, id],
      callback
    );
  },

  //Opintojakso
  getAllCourses: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getCoursesById: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  addCourse: function(course, callback) {
    return db.query(
      'insert into opintojakso (Nimi, Laajuus, Koodi) values(?,?,?)',
      [course.Nimi, course.Laajuus, course.Koodi],
      callback
    );
  },
  deleteCourse: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  updateCourse: function(id, course, callback) {
    return db.query(
      'update opintojakso set Nimi=?, Laajuus=?, Koodi=? where idOpintojakso=?',
      [course.Nimi, course.Laajuus, course.Koodi, id],
      callback
    );
  },

  //Arviointi
    getAllGrades: function(callback) {
        return db.query('select * from arviointi', callback);
    },
    getGradesById: function(id, callback) {
        return db.query('select * from arviointi where idOpiskelija=?', [id], callback);
    },
    addGrade: function(grade, callback) {
        return db.query(
            'insert into arviointi (idOpintojakso, idOpiskelija, Arvosana, Päivämäärä) values(?,?,?,?)',
            [grade.idOpintojakso, grade.idOpiskelija, grade.Arvosana, grade.Päivämäärä],
            callback
        );
    },
    deleteGrade: function(courseId, studentId, callback) {
        return db.query('delete from arviointi where idOpintojakso=? AND idOpiskelija=?',[courseId, studentId], callback);
    },
    updateGrade: function(courseId, studentId, grade, callback) {
        return db.query(
            'update arviointi set Arvosana=?, Päivämäärä=? where idOpintojakso=? and idOpiskelija=?',
            [grade.Arvosana, grade.Päivämäärä, courseId, studentId],
            callback
        );
    }
};
module.exports = opintorekisteri;
 