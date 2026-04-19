function calculateResult() {
    let num = document.getElementById("subjects").value;
    let i;
    let total = 0;
    for(i = 0; i<num; i++) {
        let x = parseFloat(prompt("Enter the subject no. " + (i + 1)));
        total += x;
    }
    let average = total/num;
    let grade;
    if (average >= 95) {
        grade = "A+";
    } else if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 75) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else if (average >= 33) {
        grade = "E";
    } else {
        grade = "F";
    }
    let pf;
    if (average >= 33) {
        pf = "PASS";
    } else {
        pf = "FAIL";
    }
    let res = document.getElementById("result").innerHTML = "Total Marks: " + total + "<br/>" + "Average Marks: " + average + "<br/>" + "Grade: " + grade + "<br/>" + "Result: " + pf + "<br/>";
}