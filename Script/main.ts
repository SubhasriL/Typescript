let AutoIncrementUserId=1000;
let AutoIncrementCourseId=100;
let count=0;
let currentid;
class user{

UserName:String;
UserAge:Number;
UserMobileNo:Number;
UserId:String;



constructor(userName:string,userAge:Number,userMobileNo:Number){
    AutoIncrementCourseId++;
    count++;
    this.UserName=userName;
    this.UserId= "PC" +AutoIncrementCourseId.toString();
    
    this.UserMobileNo=userMobileNo;
    this.UserAge=userAge;

}
}

class course{
    CourseId:string;
    CourseName:string;
    RequriedDays:number;
    UserId:string;

    constructor(courseName:string,userid:string,requrieddays:number)
    {
    AutoIncrementCourseId++;
    this.CourseId="C" +AutoIncrementCourseId.toString();
    this.UserId=userid;
    this.CourseName=courseName;
    this.RequriedDays=requrieddays;
    }

}
let UserArrayList: Array<user> = new Array<user>();

UserArrayList.push(new user("subhasri", 23, 9500984108));
UserArrayList.push(new user("loganathan", 45, 8925091515));

let CourseArrayList: Array<course> = new Array<course>();


function Registration(){
    var reg=document.getElementById("RegistrationDiv") as HTMLDivElement;
    reg.style.display="block";
    var main=document.getElementById("MainDiv") as HTMLDivElement;
    main.style.display="none";
}
function Login(){
    var login=document.getElementById("LoginDiv") as HTMLDivElement;
    login.style.display="block";
    var reg=document.getElementById("RegistrationDiv") as HTMLDivElement;
    reg.style.display="none";
    var detail =document.getElementById("details") as HTMLInputElement;
    var main=document.getElementById("MainDiv") as HTMLDivElement;
    main.style.display="none";
    var id=document.getElementById("UserId") as HTMLInputElement;
    currentid=id.value;
    
    for(var i=0;i<UserArrayList.length;i++){
        detail.innerHTML +=`UserId:${UserArrayList[i].UserId} ||UserName: ${UserArrayList[i].UserName} || UserAge : ${UserArrayList[i].UserAge} || UserMobileNo  :${UserArrayList[i].UserMobileNo}<br>`
    }
    for(var j=0;j<UserArrayList.length;j++){
       if(UserArrayList[j].UserId==currentid){
           Course();
       }
       else{
           alert("please enter a valid userid")
       }

    }
   
    
}
function Course(){
    var course=document.getElementById("CourseDiv") as HTMLDivElement;
    course.style.display="block";
    var login=document.getElementById("LoginDiv") as HTMLDivElement;
    login.style.display="none";
    var main=document.getElementById("MainDiv") as HTMLDivElement;
    main.style.display="none";

}
function AvailCourse(){

    var availcourse=document.getElementById("AvailCoursesDiv") as HTMLDivElement;
    availcourse.style.display="block";
    var course=document.getElementById("CourseDiv") as HTMLDivElement;
    course.style.display="none";
    var select=document.getElementById("selcourse") as HTMLLabelElement;
   
    var days=document.getElementById("required") as  HTMLInputElement;
    var currentid=document.getElementById("UserId") as HTMLInputElement;
    var id=parseInt(currentid.value)
    CourseArrayList.push(new course())

   // CourseArrayList.push(new course(coursename,id,days));



}
function Entrolled(){
    var entroll=document.getElementById("EntrolledCourse") as HTMLDivElement;
    entroll.style.display="block";


    var availcourse=document.getElementById("AvailCoursesDiv") as HTMLDivElement;
    availcourse.style.display="none";
}
function userDetails(){
    var name=document.getElementById("uname") as HTMLInputElement;
    var age=document.getElementById("age") as HTMLInputElement;
    var mobileno=document.getElementById("mobileno") as HTMLInputElement;
    UserArrayList.push(new user(name.value, +age.value, +mobileno.value));
 
    var id=document.getElementById("userid") as HTMLInputElement;
   id.innerHTML= ` ${UserArrayList[count-1].UserId}`;
   Login();
 
}
function entrolling(){
    alert("your are sucessfully entrolled the course");

}
