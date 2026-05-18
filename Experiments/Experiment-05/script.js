let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let salary = parseFloat(document.getElementById("salary").value);

    let emp = {
        name: name,
        salary: salary
    };

    employees.push(emp);
    alert("Employee Added");
}

function displayEmployees() {
    let result = "";

    employees.forEach(function(emp) {
        result += emp.name + " - ₹" + emp.salary + "<br>";
    });

    document.getElementById("output").innerHTML = result;
}

function filterEmployees() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let result = "";
    filtered.forEach(emp => {
        result += emp.name + " - ₹" + emp.salary + "<br>";
    });

    document.getElementById("output").innerHTML = result;
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}

function averageSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML = "Average Salary: ₹" + avg;
}