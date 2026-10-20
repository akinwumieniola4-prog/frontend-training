let studentNames = [
    "Amara",
    "Kofi",
    "Fatima",
    "Chidi",
    "Abena",
    "Yaw",
    "Kojo",
    "Zainab"
];

let studentScores = [78, 45, 92, 60, 55, 83, 70, 88];

let passCount = 0;
let failCount = 0;
let totalScore = 0;

let topStudent = studentNames[0];
let topScore = studentScores[0];

console.log("========================================");
console.log("📋 TERM 1 REPORT CARD");
console.log("========================================");

for (let i = 0; i < studentNames.length; i++) {

    let name = studentNames[i];
    let score = studentScores[i];
    let grade;
    let status;

    
    if (score >= 90) {
        grade = "A";
    } else if (score >= 75) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else {
        grade = "F";
    }

    
    if (score >= 60) {
        status = "PASS ✅";
        passCount = passCount + 1;
    } else {
        status = "FAIL ❌";
        failCount = failCount + 1;
    }

    
    totalScore = totalScore + score;

    
    if (score > topScore) {
        topScore = score;
        topStudent = name;
    }

    
    console.log(`${name} → ${score}/100 | Grade: ${grade} | ${status}`);
}


let average = totalScore / studentNames.length;

// Summary
console.log("========================================");
console.log(`Total students : ${studentNames.length}`);
console.log(`Passed : ${passCount}`);
console.log(`Failed : ${failCount}`);
console.log(`Class average : ${average}/100`);
console.log(`Top Student : ${topStudent} - ${topScore}/100`);

// Class performance
if (average > 70) {
    console.log("Great class performance! 🎉");
} else {
    console.log("The class needs more practice. 📚");
}

console.log("========================================");