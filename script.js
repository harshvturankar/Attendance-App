// Dummy Student List (50 Students)

function showLogin(type) {
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tabs button[onclick="showLogin('${type}')"]`).classList.add('active');

    if (type === 'student') {
        document.getElementById("studentLogin").classList.remove("hidden");
        document.getElementById("teacherLogin").classList.add("hidden");
    } else {
        document.getElementById("teacherLogin").classList.remove("hidden");
        document.getElementById("studentLogin").classList.add("hidden");
    }
}

function login(type) {
    if (type === 'student') {
        let username = document.getElementById("studentUsername").value;
        let phone = document.getElementById("studentPhone").value;
        let password = document.getElementById("studentPassword").value;
        
        if (username && phone && password) {
            document.getElementById("loginPage").classList.add("hidden");
        } else {
            alert("Please enter all details.");
        }
    } else {
        let username = document.getElementById("teacherUsername").value;
        let password = document.getElementById("teacherPassword").value;

        if (username && password) {
            document.getElementById("loginPage").classList.add("hidden");
            document.getElementById("teacherAttendance").classList.remove("hidden");
            loadAttendanceSheet();
        } else {
            alert("Please enter all details.");
        }
    }
}

function addStudent() {
    const studentName = document.getElementById('newStudentName').value;
    if (studentName.trim() === '') {
        alert('Please enter a valid student name.');
        return;
    }

    const attendanceTable = document.getElementById('attendanceTable');
    
    // Create a new row
    const newRow = attendanceTable.insertRow();
    
    // Create cells for student name and present checkbox
    const nameCell = newRow.insertCell(0);
    const presentCell = newRow.insertCell(1);
    
    // Populate the cells
    nameCell.textContent = studentName;
    presentCell.innerHTML = `<input type="checkbox">`;
    
    // Clear the input field
    document.getElementById('newStudentName').value = '';
}

// Load Attendance Sheet for Teacher
function loadAttendanceSheet() {
    let table = document.getElementById("attendanceTable");
    students.forEach((student, index) => {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.textContent = student;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `student-${index}`;
        checkbox.addEventListener("change", () => updateAttendance(row, checkbox.checked));
        cell2.appendChild(checkbox);
    });
}

// Update Row Color Based on Attendance
function updateAttendance(row, present) {
    row.classList.toggle("present", present);
    row.classList.toggle("absent", !present);
}

// Save Attendance
function saveAttendance() {
    alert("Attendance saved successfully!");
}

// Logout
function logout() {
    document.getElementById("teacherAttendance").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}
