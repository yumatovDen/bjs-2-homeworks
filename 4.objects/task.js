function Student(name, gender, age) {
    this.marks = [];
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.hasOwnProperty("marks") === false) {
    return "Пользователь отчислен";
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(this.hasOwnProperty("marks") === false || this.marks.length === 0) {
    return 0;
  } else {
    return this.marks.reduce((acc, mark) => acc + mark/this.marks.length, 0)
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject && delete this.marks;
  this.excluded = reason;
}
