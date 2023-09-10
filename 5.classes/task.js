class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null; 
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if(number < 0) {
            this._state = 0;
        } else if(number >= 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}

class Library {
    constructor(name) { 
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value) {
                 return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
                return this.books.splice([i], 1)[0];
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
            if(mark >= 2 && mark <= 5) {
                if(this.marks[subject] === undefined) {
                    this.marks[subject] = [];
                }
            return this.marks[subject].push(mark);
        } else {
            return console.log("Оценка несоответствует значениям");
        }
    }

    getAverageBySubject(subject) {
        if(this.marks[subject] === undefined) {
            return 0;
        } else {
            let sumMarks = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
            let avgMark = sumMarks / this.marks[subject].length;
            return avgMark;
        }
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        let sumAverageMarks = 0;
        let totalSubjects = 0;
        for(let subject of subjects) {
            let averageMark = this.getAverageBySubject(subject);
            sumAverageMarks += averageMark;
            totalSubjects++;
        }

        if(totalSubjects === 0) {
            return 0
        } else {
            return sumAverageMarks / totalSubjects;
        }
    }
}
