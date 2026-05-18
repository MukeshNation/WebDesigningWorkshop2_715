function calculate() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        total += marks;
    }

    let average = total / n;
    let grade = "";
    let result = "";

    if (average >= 75) {
        grade = "A";
        result = "Pass";
    } else if (average >= 50) {
        grade = "B";
        result = "Pass";
    } else {
        grade = "C";
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}