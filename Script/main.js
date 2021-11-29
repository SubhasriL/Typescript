var AutoIncrementUserId = 1000;
var AutoIncrementCourseId = 100;
var count = 0;
var user = /** @class */ (function () {
    function user(userName, userAge, userMobileNo) {
        AutoIncrementCourseId++;
        count++;
        this.UserName = userName;
        this.UserId = "PC" + AutoIncrementCourseId.toString();
        this.UserMobileNo = userMobileNo;
        this.UserAge = userAge;
    }
    return user;
}());
var course = /** @class */ (function () {
    function course(courseName, userid, requrieddays) {
        AutoIncrementCourseId++;
        this.CourseId = "C" + AutoIncrementCourseId.toString();
        this.UserId = userid;
        this.CourseName = courseName;
        this.RequriedDays = requrieddays;
    }
    return course;
}());
var UserArrayList = new Array();
UserArrayList.push(new user("subhasri", 23, 9500984108));
UserArrayList.push(new user("loganathan", 45, 8925091515));
var CourseArrayList = new Array();
function Registration() {
    var reg = document.getElementById("RegistrationDiv");
    reg.style.display = "block";
    var main = document.getElementById("MainDiv");
    main.style.display = "none";
}
function Login() {
    var login = document.getElementById("LoginDiv");
    login.style.display = "block";
    var reg = document.getElementById("RegistrationDiv");
    reg.style.display = "none";
    var detail = document.getElementById("details");
    var main = document.getElementById("MainDiv");
    main.style.display = "none";
    var currentid = document.getElementById("UserId");
    for (var i = 0; i < UserArrayList.length; i++) {
        detail.innerHTML += "UserId:".concat(UserArrayList[i].UserId, " ||UserName: ").concat(UserArrayList[i].UserName, " || UserAge : ").concat(UserArrayList[i].UserAge, " || UserMobileNo  :").concat(UserArrayList[i].UserMobileNo, "<br>");
    }
    for (var j = 0; j < UserArrayList.length; j++) {
        if (UserArrayList[j].UserId == currentid.value) {
            Course();
        }
        else {
            alert("please enter a valid userid");
        }
    }
}
function Course() {
    var course = document.getElementById("CourseDiv");
    course.style.display = "block";
    var login = document.getElementById("LoginDiv");
    login.style.display = "none";
    var main = document.getElementById("MainDiv");
    main.style.display = "none";
}
function AvailCourse() {
    var availcourse = document.getElementById("AvailCoursesDiv");
    availcourse.style.display = "block";
    var course = document.getElementById("CourseDiv");
    course.style.display = "none";
    var select = document.getElementById("selcourse");
    var days = document.getElementById("required");
    var coursename = select.ariaValueText;
    var currentid = document.getElementById("UserId");
    var id = parseInt(currentid.value);
    // CourseArrayList.push(new course(coursename,id,days));
}
function Entrolled() {
    var entroll = document.getElementById("EntrolledCourse");
    entroll.style.display = "block";
    var availcourse = document.getElementById("AvailCoursesDiv");
    availcourse.style.display = "none";
}
function userDetails() {
    var name = document.getElementById("uname");
    var age = document.getElementById("age");
    var mobileno = document.getElementById("mobileno");
    UserArrayList.push(new user(name.value, +age.value, +mobileno.value));
    var id = document.getElementById("userid");
    id.value = " ".concat(UserArrayList[count - 1].UserId);
    Login();
}
function entrolling() {
    alert("your are sucessfully entrolled the course");
}
