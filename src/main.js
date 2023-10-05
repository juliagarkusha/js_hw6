const Student = function (firstName, lastName, birthYear) {
    this.id = `st_${Date.now()}`;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.courses = [];
    this.addCourse = (courseId, lessonsCount) => {
        const id = courseId;
        this.courses.push({
            id,
            marks: (new Array(lessonsCount)).fill(''),
            visited: (new Array(lessonsCount)).fill(''),
            currentLessonNumber: 0,
        });
        return id;
    };
    this.replaceCourse = (prevCourseId, newCourseId, newLessonsCount) => {
        const id = newCourseId;
        this.courses = this.courses.map((course) => {
            if (course.id === prevCourseId) {
                return {
                    id,
                    marks: (new Array(newLessonsCount)).fill(''),
                    visited: (new Array(newLessonsCount)).fill(''),
                    currentLessonNumber: 0,
                }
            }

            return course;
        });
        return id;
    };
    this.removeCourse = (courseId) => {
        this.courses = this.courses.filter((course) => course.id !== courseId);
    };
    this.addMarkForCourse = (courseId, lessonNumber, mark) => {
        const courseIndex = this.courses.findIndex((course) => course.id === courseId);

        if (courseIndex === -1) {
            return;
        }

        this.courses[courseIndex].currentLessonNumber = this.courses[courseIndex].currentLessonNumber >= lessonNumber
            ? this.courses[courseIndex].currentLessonNumber
            : lessonNumber;
        this.courses.forEach((course, index) => {
            if (course.id === courseId && typeof course.marks[lessonNumber - 1] !== 'undefined') {
                this.courses[index].marks[lessonNumber - 1] = mark;
            }
        });
    };
    this.addVisitedForCourse = (courseId, lessonNumber, visited) => {
        const courseIndex = this.courses.findIndex((course) => course.id === courseId);

        if (courseIndex === -1) {
            return;
        }

        this.courses[courseIndex].currentLessonNumber = this.courses[courseIndex].currentLessonNumber >= lessonNumber
            ? this.courses[courseIndex].currentLessonNumber
            : lessonNumber;
        this.courses.forEach((course, index) => {
            if (course.id === courseId && typeof course.visited[lessonNumber - 1] !== 'undefined') {
                this.courses[index].visited[lessonNumber - 1] = visited;
            }
        });
    };
    this.getAverageCourseMark = (courseId) => {
        const course = this.courses.find((course) => course.id === courseId);
        if (!course) {
            return;
        }
        const finishedLessonMarks = course.marks.slice(0, course.currentLessonNumber);
        return finishedLessonMarks.reduce((acc, mark) => acc + mark, 0) / finishedLessonMarks.length;
    }
    this.getAverageCourseVisited = (courseId) => {
        const course = this.courses.find((course) => course.id === courseId);
        if (!course) {
            return;
        }
        const finishedLessons = course.visited.slice(0, course.currentLessonNumber);
        const visitedLessons = finishedLessons.filter((visited) => visited);
        return (visitedLessons.length / finishedLessons.length) * 100;
    }

    return this.id;
}

const Group = function () {
    this.students = [];
    this.addStudent = (student) => {
        this.students.push(student);
        return this.students;
    }
    this.removeStudent = (studentId) => {
        return this.students.filter(student => student.id !== studentId);
    }
    this.ratingByMarks = (courseId) => {
        const list = this.students.map((student) => student);
        list.sort((studentA, studentB) => studentA.getAverageCourseMark(courseId) - studentB.getAverageCourseMark(courseId))
        return list;
    }
    this.ratingByVisited = (courseId) => {
        const list = this.students.map((student) => student);
        list.sort((studentA, studentB) => studentB.getAverageCourseVisited(courseId) - studentA.getAverageCourseVisited(courseId));
        return list;
    }
}


const student1 = new Student('Rick', 'Sanchez', 1976);
const student2 = new Student('Morty', 'Smith', 2004);
const student3 = new Student('Summer', 'Smith', 2001);
const student4 = new Student('Tammy', 'Guetermann', 1999);
const groupA = new Group();
const groupB = new Group();
student1.addCourse('course1', 5);
student2.addCourse('course1', 5);

student1.addMarkForCourse('course1', 1, 5);
student1.addMarkForCourse('course1', 2, 2);
student1.addMarkForCourse('course1', 3, 4);
student1.addMarkForCourse('course1', 4, 4);

student2.addMarkForCourse('course1', 1, 5);
student2.addMarkForCourse('course1', 2, 5);
student2.addMarkForCourse('course1', 3, 5);
student2.addMarkForCourse('course1', 4, 5);

student1.addVisitedForCourse('course1', 1, true);
student1.addVisitedForCourse('course1', 2, true);
student1.addVisitedForCourse('course1', 3, false);
student1.addVisitedForCourse('course1', 4, true);

student2.addMarkForCourse('course1', 1, false);
student2.addMarkForCourse('course1', 2, true);
student2.addMarkForCourse('course1', 3, false);
student2.addMarkForCourse('course1', 4, false);


student3.addMarkForCourse('course1', 1, 1);
student3.addMarkForCourse('course1', 2, 2);
student3.addMarkForCourse('course1', 3, 2);
student3.addMarkForCourse('course1', 4, 5);

student4.addMarkForCourse('course1', 1, 1);
student4.addMarkForCourse('course1', 2, 3);
student4.addMarkForCourse('course1', 3, 3);
student4.addMarkForCourse('course1', 4, 4);

student3.addVisitedForCourse('course1', 1, true);
student3.addVisitedForCourse('course1', 2, true);
student3.addVisitedForCourse('course1', 3, false);
student3.addVisitedForCourse('course1', 4, false);

student4.addMarkForCourse('course1', 1, false);
student4.addMarkForCourse('course1', 2, false);
student4.addMarkForCourse('course1', 3, false);
student4.addMarkForCourse('course1', 4, false);


groupA.addStudent(student1);
groupA.addStudent(student2);
groupB.addStudent(student3);
groupB.addStudent(student4);

console.log('debug \'groupA.ratingByMarks(\'course1\'):\' ', groupA.ratingByMarks('course1'));
console.log('debug \'groupA.ratingByMarks(\'course1\'):\' ', groupA.ratingByMarks('course1'));
console.log('debug \'groupB.ratingByMarks(\'course1\'):\' ', groupB.ratingByMarks('course1'));
console.log('debug \'groupB.ratingByMarks(\'course1\'):\' ', groupB.ratingByMarks('course1'));
