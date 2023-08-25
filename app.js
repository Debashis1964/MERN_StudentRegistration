// Dummy Exam Centres
let examCenters =['Delhi', 'Mumbai', 'Pune', 'Bangalore', 'Kolkata', 'Chennai'];

// Variables for Name and MailId and Action Message
let studentName = document.getElementById('studentName');
let studentMailId = document.getElementById('studentMailId');
let action_message = document.getElementById('action_message');

// Empty array of objects for the Registered Students
let registeredStudents=[]

//Function for picking a random Exam Centre
function pickExamCentre(){
    let randomIndex = Math.floor(Math.random()*6);
    return examCenters[randomIndex];
}

//Function for display of registered students
function displayRegisteredStudents(){
let studentContainer = document.getElementById("studentContainer");
studentContainer.innerHTML = "";

registeredStudents.map((student) => {
        let studentCard = document.createElement('div');
        studentCard.classList.add("studentCard");

        let nameElement = document.createElement("p");
        nameElement.classList.add("name");
        nameElement.innerText = student.name;

        let mailElement = document.createElement("p");
        mailElement.classList.add("mailid");
        mailElement.innerText = student.mailId;

        let examCentreElement = document.createElement("p");
        examCentreElement.classList.add("examCentre");
        examCentreElement.innerText = student.examCenter;


        studentContainer.appendChild(studentCard);
        studentCard.appendChild(nameElement);
        studentCard.appendChild(mailElement);
        studentCard.appendChild(examCentreElement);
        }
    )

}

// Function for resetting color of Action Message
function resetActionMessageColors(){
    setTimeout(() => {
        action_message.style.backgroundColor = 'rgb(184, 219, 240)';
        studentName.style.borderColor='gray';
        studentMailId.style.borderColor='gray';
        action_message.innerText = "";
     }, 3000)
}

// Function for validation of Name and MailId inputs
function validateInputs(){

    let validationFlag=true;

    if (studentName.value ==''){
        action_message.innerText = "Name is mandatory";
        studentName.style.borderColor='red';
        action_message.style.backgroundColor = 'rgb(255, 99, 71)';
        validationFlag = false;

        resetActionMessageColors();
        return validationFlag;

    } else if (studentMailId.value==''){
        action_message.innerText = "Mail Id is mandatory";
        studentMailId.style.borderColor='red';
        action_message.style.backgroundColor = 'rgb(255, 99, 71)';
        validationFlag = false;

        resetActionMessageColors();
        return validationFlag;
    }
    else{
        return validationFlag;
    }
}

// Function for checking whether a mailid exists or not
function mailIDExists(){
    filteredArray = registeredStudents.filter(student => student.mailId === studentMailId.value);

    console.log(filteredArray);
    if (filteredArray.length > 0)
    {
        action_message.innerText = "Mail Id already exists";
        studentMailId.style.borderColor='red';
        action_message.style.backgroundColor = 'rgb(255, 99, 71)';

        resetActionMessageColors();
        return true;
    }
    else{
        return false;
    }
}

// Function for aading validated student 
function addValidatedStudent(){
    tempStudent = {
        "name": studentName.value,
        "mailId" : studentMailId.value,
        "examCenter": pickExamCentre()
    }

    registeredStudents.push(tempStudent);

    action_message.innerText = "Welcome to the BootCamp";
    action_message.style.backgroundColor = 'rgb(132, 243, 132)';

    setTimeout(() => {
    action_message.style.backgroundColor = 'rgb(184, 219, 240)';
    studentMailId.style.borderColor='gray';
    studentMailId.value="";
    studentName.value="";
    action_message.innerText = "";
    }, 3000)
}


// Function for adding student on Add button click
function addStudent(){
    let tempStudent = {};

    if (validateInputs() && !mailIDExists()){

        addValidatedStudent();
        displayRegisteredStudents();

        resetActionMessageColors();
    }
}
