function getMarks(){
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var language = Number(document.getElementById("language").value);

    var totalMarks = 400;
    var obtainedMarks = maths + physics + chemistry + language;

    var percentage = (obtainedMarks / totalMarks) * 100;

    document.getElementById("percentage").innerHTML = percentage + "%";

    grade = "";

    if(percentage >= 90){
      grade = "A+";
    }
    else if(percentage <90 && percentage >= 80){
      grade = "A";
    }
    else if(percentage <80 && percentage >= 60){
      grade = "B";
    }
    else if(percentage <60 && percentage >= 50){
      grade = "C";
    }
    else if(percentage < 50 && percentage >=40){
      grade = "D";
    }
    else if(percentage < 40){
      grade = "F";
    }

    document.getElementById("grade").innerHTML = grade;

    if(percentage < 40){
      document.getElementById("status").innerHTML = "Sorry! You didn't pass the exam this time. Don't get heart-broken, we are sure you can do this!"
    }
    else if(percentage >= 40){
      document.getElementById("status").innerHTML = "Congratulations! You have passed the Exam. Keep working hard and you'll be where you want to be very soon!"
    }
}