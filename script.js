function validateForm() {
    let empID = document.getElementById("empID").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department");
    let joiningDate = document.getElementById("joiningDate");
    let gender = document.querySelector('input[name="gender"]:checked');

    let idError = document.getElementById("idError");
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let departmentError = document.getElementById("departmentError");
    let joiningDateError = document.getElementById("joiningDateError");
    let genderError = document.getElementById("genderError");

    
    idError.innerText = "";
    nameError.innerText = "";
    emailError.innerText = "";
    departmentError.innerText = "";
    joiningDateError.innerText = "";
    genderError.innerText = "";

    let isValid = true;

    let empIDPattern = /^EMP\d{3}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!empIDPattern.test(empID)) {
        idError.innerText = "* Employee ID must start with 'EMP' and followed by 3 digits (e.g., EMP123)";
        isValid = false;
    }

    if (name ==="") {
        nameError.innerText = "* Please Enter Name";
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        emailError.innerText = "* Please enter a valid email address.";
        isValid = false;
    }

    if (department === "") {
        departmentError.innerText = "* Please select a department.";
        isValid = false;
    }

    if (joiningDate === "") {
        joiningDateError.innerText = "* Joining date is required.";
        isValid = false;
    }

    if (!gender) {
        genderError.innerText = "* Please select a gender.";
        isValid = false;
    }

    return isValid;
}
