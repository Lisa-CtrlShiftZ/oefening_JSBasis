const courses = [
    { 
        id: "CS101", 
        title: "Intro to Programming", 
        category: "Computer Science", 
        difficulty: "Beginner", 
        price: 49.99, 
        students: 1500,
        ratings: [4.5, 4.7, 4.2, 4.8, 4.6]
    },
    { 
        id: "MATH202", 
        title: "Advanced Calculus", 
        category: "Mathematics", 
        difficulty: "Advanced", 
        price: 79.99, 
        students: 750,
        ratings: [4.3, 4.1, 4.6, 4.4, 4.5]
    },
    {
        id: "PSYCHOLOGY", 
        title: "Intro to Psychology", 
        category: "psychology", 
        difficulty: "Beginner", 
        price: 200.99, 
        students: 15,
        ratings: [4.5, 4.7, 4.2, 4.8, 4.6]
    }
    // ... more courses
];

// Tasks:
// 1. Calculate the average rating for each course
// 2. Find all beginner-level courses
// 3. Sort courses by number of students (descending)
// 4. Group courses by category
// 5. Calculate total revenue from all courses
// 6. Find the highest-rated course


//1
function getAverageCourseRating(courses, courseId){ 
  
    const specificCourse = courses.filter((course) => course.id == courseId)[0];

    const courseRatingTotal = specificCourse.ratings.reduce((ratingSum, rating) => ratingSum + rating, 0);
  return courseRatingTotal / specificCourse.ratings.length;
}

console.log(getAverageCourseRating(courses,'MATH202'))

//2
function getBeginnerCourses(courses, courseDifficulty){
    const beginnerCourses = courses.filter((course) => course.difficulty == courseDifficulty);
    return beginnerCourses;
}

console.log(getBeginnerCourses(courses,'Beginner'));

//3
function getStudentAmount(courses){
    const studentArray = courses.map(course => course.students);
    const sortedStudentArray = studentArray.toSorted((a, b) => b - a);
    return sortedStudentArray;
}

console.log(getStudentAmount(courses)); 

//4
function sortByCategory(courses, courseCategory){
    const courseCategoryArray = courses.filter((course) => course.category == courseCategory);
    return courseCategoryArray;
}

console.log(sortByCategory(courses,'Computer Science'));

//5
function totalRevenue(courses){
    const revenue = courses.reduce((total, course) => total + (course.price * course.students), 0);
    return revenue;
}

console.log(totalRevenue(courses));

//6 