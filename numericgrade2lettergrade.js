// numericgrade2lettergrade.js
// This program converts a numeric grade to a letter grade.

let numericGrade = 100; 
let letterGrade;

if (numericGrade === 100) { // Use '===' for comparison
    letterGrade = 'A+';
} else if (numericGrade >= 90) {
    letterGrade = 'A';
} else if (numericGrade >= 80) {
    letterGrade = 'B';
} else if (numericGrade >= 70) {
    letterGrade = 'C';
} else if (numericGrade >= 60) {
    letterGrade = 'D';
} else {
    letterGrade = 'F';
}

console.log(`A numeric grade of ${numericGrade} corresponds to a letter grade of ${letterGrade}.`);
