


// HELLO


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// TRAINER //////////////////////////////////////////////////////////////////////////////////////////////////////////////

function trainer_getInputValue(){
    var trainerFirstName = document.forms["trainer_form"]["trainer_firstname"].value;
    var trainerLastName = document.forms["trainer_form"]["trainer_lastname"].value;
    var subject = document.forms["trainer_form"]["subject"].value;
    //

    // 
    var Error_trainerFirstName = Error_trainerLastName = Error_subject = true;

        // Validate trainer First name
        if(trainerFirstName == "") {
            document.getElementById('trainer_firstname_error').innerHTML = " * First name is required "
            setTimeout(function(){
                document.getElementById('trainer_firstname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(trainerFirstName) === false) {
                document.getElementById('trainer_firstname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('trainer_firstname_error').innerHTML = "";
                }, 2000)
              } else {
                document.getElementById('trainer_firstname_error').innerHTML = ""
                Error_trainerFirstName = false;
                }
            }

        // Validate trainer Last name
        if(trainerLastName == "") {
            document.getElementById('trainer_lastname_error').innerHTML = " * Last name is required "
            setTimeout(function(){
                document.getElementById('trainer_lastname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(trainerLastName) === false) {
                document.getElementById('trainer_lastname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('trainer_lastname_error').innerHTML = "";
                }, 2000)
              } else {
                document.getElementById('trainer_lastname_error').innerHTML = ""
                Error_trainerLastName = false;
                }
            }

        // Validate trainer Subject
        if(subject == "") {
            document.getElementById('subject_error').innerHTML = " * Subject is required " ;
            setTimeout(function(){
                document.getElementById('subject_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('subject_error').innerHTML = ""
            Error_subject = false;
            }

// Prevent the form from being submitted if there are any errtexts

    if( (Error_trainerFirstName || Error_trainerLastName || Error_subject) == true ) {
        return false;
    } else {

        let trainer_map = new Map();
        trainer_map.set ('t_fname', trainerFirstName); 
        trainer_map.set ('t_lname', trainerLastName); 
        trainer_map.set ('t_subject', subject); 

        // // 
        // console.log(trainer_map.get ('t_fname') ); 
        // console.log(trainer_map.get ('t_lname') ); 
        // console.log(trainer_map.get ('t_subject') ); 
        // console.log(trainer_map.size); 

        //

        // 
        var trTable = document.getElementById("trainer-table");

        // 
        var row = trTable.insertRow(1);

            row.addEventListener("mouseover", mouseover) ;
            row.addEventListener("mouseout", mouseout) ;
        
            function mouseover(){
                row.style.backgroundColor = "rgb(246, 243, 241)" ;
            }
            
            function mouseout(){
                row.style.backgroundColor = "rgb(251, 249, 248)" ;
            }


        // 
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // 
        cell1.innerHTML = trainer_map.get ('t_fname') ;
        cell2.innerHTML = trainer_map.get ('t_lname');
        cell3.innerHTML = trainer_map.get ('t_subject');

        //

        //
        document.getElementById('trainer_formIsValidated').innerHTML = "Successfully submitted" ;
        setTimeout(function(){
            document.getElementById('trainer_formIsValidated').innerHTML = ""
        }, 2900)

        //

        trainerFirstName = document.forms["trainer_form"]["trainer_firstname"].value = "";
        trainerLastName = document.forms["trainer_form"]["trainer_lastname"].value = "";
        subject = document.forms["trainer_form"]["subject"].value = "";
        
        }
        event.preventDefault();
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
//////// COURSE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function course_getInputValue(){
    var courseTitle = document.forms["course_form"]["course_title"].value;     
    var courseStream = document.forms["course_form"]["course_stream"].value;
    var courseType = document.forms["course_form"]["course_type"].value;
    var courseStartDate = document.forms["course_form"]["course_startdate"].value;
    var courseEndDate = document.forms["course_form"]["course_enddate"].value;

            ///// Dates ////

            // Start Date
            var C_Syear = courseStartDate.slice(0, 4);
            var C_Smonth = courseStartDate.slice(5, 7);
            var C_Sday = courseStartDate.slice(8,10);

            var C_Sdate = C_Sday + "/" + C_Smonth + "/" + C_Syear

            var C_theDateS = C_Sday + C_Smonth + C_Syear;
            var C_theDateSNum = parseInt(C_theDateS);

            // End Date

            var C_Eyear = courseEndDate.slice(0, 4);
            var C_Emonth = courseEndDate.slice(5, 7);
            var C_Eday = courseEndDate.slice(8,10);
            
            var C_Edate = C_Eday + "/" + C_Emonth + "/" + C_Eyear

            var C_theDateE = C_Eday + C_Emonth + C_Eyear;
            var C_theDateENum = parseInt(C_theDateE);

    //
    // Defining errorText variables with a default value
    var Error_courseTitle = Error_courseStream = Error_courseType = Error_courseStartDate = Error_courseEndDate = true;

        // Validate Course Title
        if(courseTitle == "") {
            document.getElementById('course_title_error').innerHTML = " * Title is required " ;
            setTimeout(function(){
                document.getElementById('course_title_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('course_title_error').innerHTML = "" ;
            Error_courseTitle = false;
            }

        // Validate Course Stream
        if(courseStream == "") {
            document.getElementById('course_stream_error').innerHTML = " * Stream is required " ;
            setTimeout(function(){
                document.getElementById('course_stream_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('course_stream_error').innerHTML = "" ;
            Error_courseStream = false;
            }

        // Validate Course Type
        if(courseType == "") {
            document.getElementById('course_type_error').innerHTML = " * Type is required " ;
            setTimeout(function(){
                document.getElementById('course_type_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('course_type_error').innerHTML = "" ;
            Error_courseType = false;
            }

        // Validate Course Start-Date
        if(courseStartDate == "") {
            document.getElementById('course_startdate_error').innerHTML = " * Start date is required " ;
            setTimeout(function(){
                document.getElementById('course_startdate_error').innerHTML = "";
            }, 2000)
        } else{
            if(C_theDateSNum >= C_theDateENum){
                document.getElementById('course_startdate_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                    document.getElementById('course_startdate_error').innerHTML = "";
                }, 2000)
            }else {
            document.getElementById('course_startdate_error').innerHTML = "" ;
            Error_courseStartDate = false;
            }
        }

        // Validate Course End-Date
        if(courseEndDate == "") {
            document.getElementById('course_enddate_error').innerHTML = " * End date is required " ;
            setTimeout(function(){
                document.getElementById('course_enddate_error').innerHTML = "";
            }, 2000)
        } else{
            if(C_theDateSNum >= C_theDateENum){
                document.getElementById('course_enddate_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                    document.getElementById('course_enddate_error').innerHTML = "";
                }, 2000)
            }else {
            document.getElementById('course_enddate_error').innerHTML = "" ;
            Error_courseEndDate = false;
            }
        }

// Prevent the form from being submitted if there are any errtexts

    if( (Error_courseTitle || Error_courseStream || Error_courseType || Error_courseStartDate || Error_courseEndDate) == true ) {
        return false;
    } else {

    //  [""][""]
    var course_map = new Map();
    course_map.set ('c_title', courseTitle); 
    course_map.set ('c_stream', courseStream); 
    course_map.set ('c_type', courseType); 
    course_map.set ('c_startdate', C_Sdate); 
    course_map.set ('c_enddate', C_Edate); 

    // // 
    // console.log(course_map.get ('c_title') ); 
    // console.log(course_map.get ('c_stream') ); 
    // console.log(course_map.get ('c_type') ); 
    // console.log(course_map.get ('c_startdate') ); 
    // console.log(course_map.get ('c_enddate') );
    // console.log(course_map.size ); 

    // RESULTS IN THE TABLE

    // 
    var trTable = document.getElementById("course-table");

    // 
    var row = trTable.insertRow(1);

        row.addEventListener("mouseover", mouseover) ;
        row.addEventListener("mouseout", mouseout) ;

        function mouseover(){
            row.style.backgroundColor = "rgb(246, 243, 241)" ;
        }
        
        function mouseout(){
            row.style.backgroundColor = "rgb(251, 249, 248)" ;
        }

    // 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // 
    cell1.innerHTML = course_map.get ('c_title') ;
    cell2.innerHTML = course_map.get ('c_stream') ;
    cell3.innerHTML = course_map.get ('c_type') ;
    cell4.innerHTML = course_map.get ('c_startdate') ;
    cell5.innerHTML = course_map.get ('c_enddate') ;
    
    //

    document.getElementById('course_formIsValidated').innerHTML = "Successfully submitted" ;
    setTimeout(function(){
        document.getElementById('course_formIsValidated').innerHTML = ""
    }, 2900)

    //

    courseTitle = document.forms["course_form"]["course_title"].value = "";     
    courseStream = document.forms["course_form"]["course_stream"].value = "";
    courseType = document.forms["course_form"]["course_type"].value = "";
    courseStartDate = document.forms["course_form"]["course_startdate"].value = "";
    courseEndDate = document.forms["course_form"]["course_enddate"].value = "";

    }
    event.preventDefault();
 }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// ASIGNMENT ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function assignment_getInputValue(){
    var assignmentTitle  = document.forms["assignment_form"]["assignment_title"].value;
    var assignmentDescription = document.forms["assignment_form"]["assignment_description"].value;
    var assignSubjectDate = document.forms["assignment_form"]["assign_subject_date"].value;
    var assignOralMark = document.forms["assignment_form"]["assign_oralMark"].value;
    var assignTotalMark = document.forms["assignment_form"]["assign_totalMark"].value;

                ///// Dates ////

            // Subject Date
            var A_Syear = assignSubjectDate.slice(0, 4);
            var A_Smonth = assignSubjectDate.slice(5, 7);
            var A_Sday = assignSubjectDate.slice(8,10);

            var A_Sdate = A_Sday + "/" + A_Smonth + "/" + A_Syear

            var A_theDateS = A_Sday + A_Smonth + A_Syear;
            var A_theDateSNum = parseInt(A_theDateS);

            // Date Now

            var today = new Date();
            var A_today = today.toISOString();
            console.log(A_today);

            var A_todayYear = A_today.slice(0, 4);
            var A_todayMonth = A_today.slice(5, 7);
            var A_todayDay = A_today.slice(8,10);

            var A_todayDate = A_todayYear + A_todayMonth + A_todayDay;
            var A_todayDateNum = parseInt(A_todayDate);


    // Defining errorText variables with a default value
    var Error_assignmentTitle = Error_assignmentDescription = Error_assignSubjectDate = Error_assignOralMark = Error_assignTotalMark = true;

        // Validate Assignment Title
        if(assignmentTitle == "") {
            document.getElementById('assignment_title_error').innerHTML = " * Title is required "
            setTimeout(function(){
                document.getElementById('assignment_title_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('assignment_title_error').innerHTML = ""
            Error_assignmentTitle = false;
            }

        // Validate Assignment Descrition
        if(assignmentDescription == "") {
            document.getElementById('assignment_description_error').innerHTML = " * Description is required "
            setTimeout(function(){
                document.getElementById('assignment_description_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('assignment_description_error').innerHTML = ""
            Error_assignmentDescription = false;
            }

        // Validate Subject Date
        if(assignSubjectDate == "") {
            document.getElementById('assign_subject_date_error').innerHTML = " * Subject date is required " ; 
            setTimeout(function(){
                document.getElementById('assign_subject_date_error').innerHTML = "";
            }, 2000)
        } else{
            if(A_theDateSNum >=  A_todayDateNum){
                document.getElementById('assign_subject_date_error').innerHTML = " * Date is not proper " ; 
                setTimeout(function(){
                    document.getElementById('assign_subject_date_error').innerHTML = "";
                }, 2000)
            } else {
            document.getElementById('assign_subject_date_error').innerHTML = "" ;
            Error_assignSubjectDate = false;
            }
        }

        // Validate Oral Mark
        if(assignOralMark == "") {
            document.getElementById('assign_oralMark_error').innerHTML = " * Oral mark is required " ;
            setTimeout(function(){
                document.getElementById('assign_oralMark_error').innerHTML = "";
            }, 2000)
        } else {
            var assignOralMark = parseInt(assignOralMark);
            if (assignOralMark > 100 || assignTotalMark < 0){ 
            document.getElementById('assign_oralMark_error').innerHTML = " * Mark value is 0 to 100 " ;
            setTimeout(function(){
                document.getElementById('assign_oralMark_error').innerHTML = "";
            }, 2000)
            } else{
                document.getElementById('assign_oralMark_error').innerHTML = "";
                Error_assignOralMark = false;
            }
        }           

        // Validate Total Mark
        if(assignTotalMark == "") {
            document.getElementById('assign_totalMark_error').innerHTML = " * Total mark is required " ;
            setTimeout(function(){
                document.getElementById('assign_totalMark_error').innerHTML = "";
            }, 2000)
        } else {
            var assignTotalMark = parseInt(assignTotalMark);
            if (assignTotalMark > 100 || assignTotalMark < 0){ 
            document.getElementById('assign_totalMark_error').innerHTML = " * Mark value is 0 to 100 " ;
            setTimeout(function(){
                document.getElementById('assign_totalMark_error').innerHTML = "";
            }, 2000)
            } else{
                document.getElementById('assign_totalMark_error').innerHTML = "";
                Error_assignTotalMark = false;
            }
        }
      
// Prevent the form from being submitted if there are any errtexts

if( (Error_assignmentTitle || Error_assignmentDescription || Error_assignSubjectDate || Error_assignOralMark || Error_assignTotalMark) == true ) { 
    return false;
  } else {
    //
    let assignment_map = new Map();
    assignment_map.set ('a_title', assignmentTitle); 
    assignment_map.set ('a_description', assignmentDescription); 
    assignment_map.set ('a_subjectdate', A_Sdate); 
    assignment_map.set ('a_oralmark', assignOralMark); 
    assignment_map.set ('a_totalmark', assignTotalMark); 

    // // 
    // console.log(assignment_map.get ('a_title') ); 
    // console.log(assignment_map.get ('a_description') ); 
    // console.log(assignment_map.get ('a_subjectdate') ); 
    // console.log(assignment_map.get ('a_oralmark') ); 
    // console.log(assignment_map.get ('a_totalmark') );
    // console.log(assignment_map.size ); 

    //

    // 
    var trTable = document.getElementById("assignment-table");

    //
    var row = trTable.insertRow(1);

        row.addEventListener("mouseover", mouseover) ;
        row.addEventListener("mouseout", mouseout) ;

        function mouseover(){
            row.style.backgroundColor = "rgb(246, 243, 241)" ;
        }
        
        function mouseout(){
            row.style.backgroundColor = "rgb(251, 249, 248)" ;
        }

    // 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    //  

    cell1.innerHTML = assignment_map.get ('a_title') ;
    cell2.innerHTML = assignment_map.get ('a_description') ;
    cell3.innerHTML = assignment_map.get ('a_subjectdate') ;
    cell4.innerHTML = assignment_map.get ('a_oralmark') ;
    cell5.innerHTML = assignment_map.get ('a_totalmark') ;

    //

    document.getElementById('assignment_formIsValidated').innerHTML = "Successfully submitted" ; 
    setTimeout(function(){
        document.getElementById('assignment_formIsValidated').innerHTML = ""
    }, 2900)

    //

    assignmentTitle  = document.forms["assignment_form"]["assignment_title"].value = "";
    assignmentDescription = document.forms["assignment_form"]["assignment_description"].value = "";
    assignSubjectDate = document.forms["assignment_form"]["assign_subject_date"].value = "";
    assignOralMark = document.forms["assignment_form"]["assign_oralMark"].value = "";
    assignTotalMark = document.forms["assignment_form"]["assign_totalMark"].value = "";

    }
    event.preventDefault();
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// STUDENT /////////////////////////////////////////////////////////////////////////////////////////////////////////


function student_getInputValue(){
    var studentFirstName  = document.forms["student_form"]["student_firstname"].value;
    var studentLastName = document.forms["student_form"]["student_lastname"].value;
    var studentDob = document.forms["student_form"]["student_dob"].value;
    var studentTutionFees = document.forms["student_form"]["student_tutionFees"].value;

            ///// Dates ////

            // Date of birth
            var S_year = studentDob.slice(0, 4);
            var S_month = studentDob.slice(5, 7);
            var S_day = studentDob.slice(8,10);

            var S_date = S_day + "/" + S_month + "/" + S_year ;


    // Defining errorText variables with a default value
    var Error_studentFirstName = Error_studentLastName = Error_studentDob = Error_studentTutionFees = true;

        // Validate Student First Name
        if(studentFirstName == "") {
            document.getElementById('student_firstname_error').innerHTML = " * First name is required "
            setTimeout(function(){
                document.getElementById('student_firstname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(studentFirstName) === false) {
                document.getElementById('student_firstname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('student_firstname_error').innerHTML = "";
                }, 2000)
              } else {
                document.getElementById('student_firstname_error').innerHTML = ""
                Error_studentFirstName = false;
                }
            }

        // Validate Student Last Name
        if(studentLastName == "") {
            document.getElementById('student_lastname_error').innerHTML = " * Last name is required "
            setTimeout(function(){
                document.getElementById('student_lastname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(studentLastName) === false) {
                document.getElementById('student_lastname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('student_lastname_error').innerHTML = "";
                }, 2000)
              } else {
                document.getElementById('student_lastname_error').innerHTML = ""
                Error_studentLastName = false;
                }
            }

        // Validate Student Date of Birth
        if(studentDob == "") {
            document.getElementById('student_dob_error').innerHTML = " * Date of birth is required "
            setTimeout(function(){
                document.getElementById('student_dob_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('student_dob_error').innerHTML = ""
            Error_studentDob = false;
            }

        // Validate Student's Tuition Fees
        if(studentTutionFees == "") {
            document.getElementById('student_tutionFees_error').innerHTML = " * Tuition fees are required "
            setTimeout(function(){
                document.getElementById('student_tutionFees_error').innerHTML = "";
            }, 2000)
        } else {
            var studentTutionFees = parseInt(studentTutionFees);
            if (studentTutionFees > 10000 || studentTutionFees < 2500){ 
            document.getElementById('student_tutionFees_error').innerHTML = " * Please enter a proper fee ammount ";
            setTimeout(function(){
                document.getElementById('student_tutionFees_error').innerHTML = "";
            }, 2000)
            } else {
            document.getElementById('student_tutionFees_error').innerHTML = ""
            Error_studentTutionFees = false;
            }
        }
// Prevent the form from being submitted if there are any errtexts

if( (Error_studentFirstName || Error_studentLastName || Error_studentDob || Error_studentTutionFees) == true ) {
    return false;
} else {


    //  [""][""]
    let student_map = new Map();
    student_map.set ('s_fname', studentFirstName); 
    student_map.set ('s_lname', studentLastName); 
    student_map.set ('s_dob', S_date); 
    student_map.set ('s_tuitionfees', studentTutionFees); 

    // 
    // console.log(student_map.get ('s_fname') ); 
    // console.log(student_map.get ('s_lname') ); 
    // console.log(student_map.get ('s_dob') ); 
    // console.log(student_map.get ('s_tuitionfees') ); 
    // console.log(student_map.size);  

    // 
    var trTable = document.getElementById("student-table");

    // 
    var row = trTable.insertRow(1);

        row.addEventListener("mouseover", mouseover) ;
        row.addEventListener("mouseout", mouseout) ;

        function mouseover(){
            row.style.backgroundColor = "rgb(246, 243, 241)" ;
        }
        
        function mouseout(){
            row.style.backgroundColor = "rgb(251, 249, 248)" ;
        }

    // 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Add some text to the new cells:    

    cell1.innerHTML = student_map.get ('s_fname') ;
    cell2.innerHTML = student_map.get ('s_lname') ;
    cell3.innerHTML = student_map.get ('s_dob') ;
    cell4.innerHTML = student_map.get ('s_tuitionfees') ;

    //
    document.getElementById('student_formIsValidated').innerHTML = "Successfully submitted" ;
    setTimeout(function(){
        document.getElementById('student_formIsValidated').innerHTML = ""
    }, 2900)

    //
    studentFirstName  = document.forms["student_form"]["student_firstname"].value = "";
    studentLastName = document.forms["student_form"]["student_lastname"].value = "";
    studentDob = document.forms["student_form"]["student_dob"].value = "";
    studentTutionFees = document.forms["student_form"]["student_tutionFees"].value = "";
    }
    event.preventDefault();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// TRAINER per COURSE //////////////////////////////////////////////////////////////////////////////////////////////


function trainer_course_getInputValue(){
    var TcFirstName = document.forms["trainer_course_form"]["Tc_fname"].value;
    var TcLastName = document.forms["trainer_course_form"]["Tc_lname"].value;
    var TcCourseTitle = document.forms["trainer_course_form"]["Tc_course_title"].value;
    var TcCourseStartdate = document.forms["trainer_course_form"]["Tc_course_startdate"].value;
    var TcCourseEnddate = document.forms["trainer_course_form"]["Tc_course_endtdate"].value;

            ///// Dates ////

            // Start Date
            var TC_Syear = TcCourseStartdate.slice(0, 4);
            var TC_Smonth = TcCourseStartdate.slice(5, 7);
            var TC_Sday = TcCourseStartdate.slice(8,10);

            var TC_Sdate = TC_Sday + "/" + TC_Smonth + "/" + TC_Syear ;

            var TC_theDateS = TC_Sday + TC_Smonth + TC_Syear;
            var TC_theDateSNum = parseInt(TC_theDateS);

            // End Date

            var TC_Eyear = TcCourseEnddate.slice(0, 4);
            var TC_Emonth = TcCourseEnddate.slice(5, 7);
            var TC_Eday = TcCourseEnddate.slice(8,10);
            
            var TC_Edate = TC_Eday + "/" + TC_Emonth + "/" + TC_Eyear ;

            var TC_theDateE = TC_Eday + TC_Emonth + TC_Eyear;
            var TC_theDateENum = parseInt(TC_theDateE);

            

    // Defining errorText variables with a default value
    var Error_TcFirstName = Error_TcLastName = Error_TcCourseTitle = Error_TcCourseStartdate = Error_TcCourseEnddate = true;

        // Validate Trainer First Name
        if(TcFirstName == "") {
            document.getElementById('Tc_fname_error').innerHTML = " * First name is required "
            setTimeout(function(){
                document.getElementById('Tc_fname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(TcFirstName) === false) {
                document.getElementById('Tc_fname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('Tc_fname_error').innerHTML = "";
                }, 2000)
              } else {
                document.getElementById('Tc_fname_error').innerHTML = ""
                Error_TcFirstName = false;
                }
            }

        // Validate Trainer Last Name
        if(TcLastName == "") {
            document.getElementById('Tc_lname_error').innerHTML = " * Last name is required "
            setTimeout(function(){
                document.getElementById('Tc_lname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(TcLastName) === false) {
                document.getElementById('Tc_lname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('Tc_lname_error').innerHTML = "";
                }, 2000)
              } else {
                document.getElementById('Tc_lname_error').innerHTML = ""
                Error_TcLastName = false;
                }
            }

        // Validate Trainer Course Title
        if(TcCourseTitle == "") {
            document.getElementById('Tc_course_title_error').innerHTML = " * Subject is required "
            setTimeout(function(){
                document.getElementById('Tc_course_title_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('Tc_course_title_error').innerHTML = ""
            Error_TcCourseTitle = false;
            }

        // Validate Trainer's Course Start Date
        if(TcCourseStartdate == "") {
            document.getElementById('Tc_course_startdate_error').innerHTML = " * Start date is required "
            setTimeout(function(){
                document.getElementById('Tc_course_startdate_error').innerHTML = "";
            }, 2000)
        } else{ 
            if(TC_theDateSNum >= TC_theDateENum ){
                document.getElementById('Tc_course_startdate_error').innerHTML = " * Date is not proper "
                setTimeout(function(){
                    document.getElementById('Tc_course_startdate_error').innerHTML = "";
                }, 2000)
            } else {
            document.getElementById('Tc_course_startdate_error').innerHTML = ""
            Error_TcCourseStartdate = false;
            }
        }

        // Validate Trainer's Course End Date
        if(TcCourseEnddate == "") {
            document.getElementById('Tc_course_endtdate_error').innerHTML = " * End date is required "
            setTimeout(function(){
                document.getElementById('Tc_course_endtdate_error').innerHTML = "";
            }, 2000)
        } else{ 
            if(TC_theDateSNum >= TC_theDateENum){
                document.getElementById('Tc_course_endtdate_error').innerHTML = " * Date is not proper " 
                setTimeout(function(){
                    document.getElementById('Tc_course_endtdate_error').innerHTML = "";
                }, 2000)
            } else {
            document.getElementById('Tc_course_endtdate_error').innerHTML = ""
            Error_TcCourseEnddate = false;
            }
        }

// Prevent the form from being submitted if there are any errtexts

if( (Error_TcFirstName || Error_TcLastName || Error_TcCourseTitle || Error_TcCourseStartdate || Error_TcCourseEnddate) == true ) {
    return false;
} else {
    
    let tc_map = new Map();
    tc_map.set ('tc_fname', TcFirstName); 
    tc_map.set ('tc_lname', TcLastName); 
    tc_map.set ('tc_coursetitle', TcCourseTitle); 
    tc_map.set ('tc_coursestartdate', TC_Sdate); 
    tc_map.set ('tc_courseenddate', TC_Edate); 

    // // Map keeps the type, so these two are different:
    // console.log(tc_map.get ('tc_fname') ); 
    // console.log(tc_map.get ('tc_lname') ); 
    // console.log(tc_map.get ('tc_coursetitle') ); 
    // console.log(tc_map.get ('tc_coursestartdate') ); 
    // console.log(tc_map.get ('tc_courseenddate') );
    // console.log(tc_map.size); 

    // 
    var trTable = document.getElementById("tc-table");

    // 
    var row = trTable.insertRow(1);

        row.addEventListener("mouseover", mouseover) ;
        row.addEventListener("mouseout", mouseout) ;

        function mouseover(){
            row.style.backgroundColor = "rgb(246, 243, 241)" ;
        }
        
        function mouseout(){
            row.style.backgroundColor = "rgb(251, 249, 248)" ;
        }

    // 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // 

    cell1.innerHTML = tc_map.get ('tc_fname') ;
    cell2.innerHTML = tc_map.get ('tc_lname') ;
    cell3.innerHTML = tc_map.get ('tc_coursetitle') ;
    cell4.innerHTML = tc_map.get ('tc_coursestartdate') ;
    cell5.innerHTML = tc_map.get ('tc_courseenddate');

    document.getElementById('trainerCourse_formIsValidated').innerHTML = "Successfully submitted"
    setTimeout(function(){
        document.getElementById('trainerCourse_formIsValidated').innerHTML = ""
    }, 2900)
    //
    TcFirstName = document.forms["trainer_course_form"]["Tc_fname"].value = "" ;
    TcLastName = document.forms["trainer_course_form"]["Tc_lname"].value = "" ;
    TcCourseTitle = document.forms["trainer_course_form"]["Tc_course_title"].value = "" ;
    TcCourseStartdate = document.forms["trainer_course_form"]["Tc_course_startdate"].value = "" ;
    TcCourseEnddate = document.forms["trainer_course_form"]["Tc_course_endtdate"].value = "" ;
    }
    event.preventDefault();
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// ASSIGNMENT per COURSE //////////////////////////////////////////////////////////////////////////////////////////////////

function assignment_course_getInputValue(){
    var AcTitle = document.forms["assignment_course_form"]["Ac_title"].value;
    var AcDescription = document.forms["assignment_course_form"]["Ac_description"].value;
    var AsDate = document.forms["assignment_course_form"]["Ac_date"].value;
    var AsOralMark = document.forms["assignment_course_form"]["Ac_oralMark"].value;
    var AsTotalMark = document.forms["assignment_course_form"]["Ac_totalMark"].value;
    var AsCourseTitle = document.forms["assignment_course_form"]["Ac_courseTitle"].value;
    var AsCourseStartdate = document.forms["assignment_course_form"]["Ac_courseStartdate"].value;
    var AsCourseEnddate = document.forms["assignment_course_form"]["Ac_courseEndtdate"].value;

            ///// Dates ////

            // Start Date
            var Ac_Syear = AsCourseStartdate.slice(0, 4);
            var Ac_Smonth = AsCourseStartdate.slice(5, 7);
            var Ac_Sday = AsCourseStartdate.slice(8,10);

            var Ac_Sdate = Ac_Sday + "/" + Ac_Smonth + "/" + Ac_Syear ;

            var Ac_theDateS = Ac_Sday + Ac_Smonth + Ac_Syear;
            var Ac_theDateSNum = parseInt(Ac_theDateS);

            // End Date

            var Ac_Eyear = AsCourseEnddate.slice(0, 4);
            var Ac_Emonth = AsCourseEnddate.slice(5, 7);
            var Ac_Eday = AsCourseEnddate.slice(8,10);
            
            var Ac_Edate = Ac_Eday + "/" + Ac_Emonth + "/" + Ac_Eyear

            var Ac_theDateE = Ac_Eday + Ac_Emonth + Ac_Eyear;
            var Ac_theDateENum = parseInt(Ac_theDateE);

            // Subject Date
            var Ac_Subyear = AsDate.slice(0, 4);
            var Ac_Submonth = AsDate.slice(5, 7);
            var Ac_Subday = AsDate.slice(8,10);

            var Ac_Subdate = Ac_Subday + "/" + Ac_Submonth + "/" + Ac_Subyear

            var Ac_theDateSub = Ac_Subday + Ac_Submonth + Ac_Subyear;
            var Ac_theDateSubNum = parseInt(Ac_theDateSub);

            // Date Now

            var Ac_today = new Date();
            var Ac_today = Ac_today.toISOString();
            console.log(Ac_today);

            var Ac_todayYear = Ac_today.slice(0, 4);
            var Ac_todayMonth = Ac_today.slice(5, 7);
            var Ac_todayDay = Ac_today.slice(8,10);

            var Ac_todayDate = Ac_todayYear + Ac_todayMonth + Ac_todayDay;
            var Ac_todayDateNum = parseInt(Ac_todayDate);


    // Defining errorText variables with a default value
    var Error_AcTitle = Error_AcDescription = Error_AsDate = Error_AsOralMark = Error_AsTotalMark = Error_AsCourseTitle 
        = Error_AsCourseStartdate = Error_AsCourseEnddate = true;

        // Validate Assignment's title
        if(AcTitle == "") {
            document.getElementById('Ac_title_error').innerHTML = " * Title is required " ;
            setTimeout(function(){
                document.getElementById('Ac_title_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('Ac_title_error').innerHTML = "" ;
            Error_AcTitle = false;
            }

        // Validate Assignment's Description
        if(AcDescription == "") {
            document.getElementById('Ac_description_error').innerHTML = " * Description is required " ;
            setTimeout(function(){
                document.getElementById('Ac_description_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('Ac_description_error').innerHTML = "" ;
            Error_AcDescription = false;
            }

        // Validate Assignment's Date
        if(AsDate == "") {
            document.getElementById('Ac_date_error').innerHTML = " * Subject date is required " ;
            setTimeout(function(){
                document.getElementById('Ac_date_error').innerHTML = "";
            }, 2000)
        } else{
            if(Ac_theDateSubNum >= Ac_todayDateNum){
                document.getElementById('Ac_date_error').innerHTML = " * Subject date is not proper " ;
                setTimeout(function(){
                document.getElementById('Ac_date_error').innerHTML = "";
            }, 2000)
            }
        else {
            document.getElementById('Ac_date_error').innerHTML = "" ;
            Error_AsDate = false;
            } }

        // Validate Assignment's Oral Mark
        if(AsOralMark == "") {
            document.getElementById('Ac_oralMark_error').innerHTML = " * Oral mark is required " ;
            setTimeout(function(){
                document.getElementById('Ac_oralMark_error').innerHTML = "";
            }, 2000)
        } else {
            var AsOralMark = parseInt(AsOralMark);
            if (AsOralMark > 100 || AsOralMark < 0){ 
            document.getElementById('Ac_oralMark_error').innerHTML = " * Mark must be 0 to 100 " ;
            setTimeout(function(){
                document.getElementById('Ac_oralMark_error').innerHTML = "";
            }, 2000)
            } else {
            document.getElementById('Ac_oralMark_error').innerHTML = "" ;
            Error_AsOralMark = false;
            }
        }

        // Validate Assignment's Total Mark
        if(AsTotalMark == "") {
            document.getElementById('Ac_totalMark_error').innerHTML = " * Total mark is required " ;
            setTimeout(function(){
                document.getElementById('Ac_totalMark_error').innerHTML = "";
            }, 2000)
        } else {
            var AsTotalMark = parseInt(AsTotalMark);
            if (AsTotalMark > 100 || AsTotalMark < 0){ 
            document.getElementById('Ac_totalMark_error').innerHTML = " * Mark must be 0 to 100 " ;
            setTimeout(function(){
                document.getElementById('Ac_totalMark_error').innerHTML = "";
            }, 2000)
            } else {
            document.getElementById('Ac_totalMark_error').innerHTML = "" ;
            Error_AsTotalMark = false;
            }
        }

        // Validate Assignment's Course Title
        if(AsCourseTitle == "") {
            document.getElementById('Ac_courseTitle_error').innerHTML = " * Course title is required " ;
            setTimeout(function(){
                document.getElementById('Ac_courseTitle_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('Ac_courseTitle_error').innerHTML = "" ;
            Error_AsCourseTitle = false;
            }

        // Validate Assignment's Course Start Date
        if(AsCourseStartdate == "") {
            document.getElementById('Ac_courseStartdate_error').innerHTML = " * Start date is required " ;
            setTimeout(function(){
                document.getElementById('Ac_courseStartdate_error').innerHTML = "";
            }, 2000)
        } else{
            if(Ac_theDateSNum >= Ac_theDateENum){
                document.getElementById('Ac_courseStartdate_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                    document.getElementById('Ac_courseStartdate_error').innerHTML = "";
                }, 2000)
            }
            else {
            document.getElementById('Ac_courseStartdate_error').innerHTML = "" ;
            Error_AsCourseStartdate = false;
            } }

        // Validate Assignment's Course End Date
        if(AsCourseEnddate == "") {
            document.getElementById('Ac_courseEndtdate_error').innerHTML = " * End date is required " ;
            setTimeout(function(){
                document.getElementById('Ac_courseEndtdate_error').innerHTML = "";
            }, 2000)
        }  else{
            if(Ac_theDateSNum >= Ac_theDateENum){
                document.getElementById('Ac_courseEndtdate_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                    document.getElementById('Ac_courseEndtdate_error').innerHTML = "";
                }, 2000)
            }else {
            document.getElementById('Ac_courseEndtdate_error').innerHTML = ""
            Error_AsCourseEnddate = false;
            } }

if( (Error_AcTitle || Error_AcDescription || Error_AsDate || Error_AsOralMark || Error_AsTotalMark || Error_AsCourseTitle 
    || Error_AsCourseStartdate || Error_AsCourseEnddate) == true ) {
    return false;
} else {

    let ac_map = new Map();
    ac_map.set ('ac_title', AcTitle); 
    ac_map.set ('ac_description', AcDescription); 
    ac_map.set ('ac_date', Ac_Subdate); 
    ac_map.set ('ac_oralmark', AsOralMark); 
    ac_map.set ('ac_totalmark', AsTotalMark); 
    ac_map.set ('ac_coursetitle', AsCourseTitle); 
    ac_map.set ('ac_coursestartdate', Ac_Sdate); 
    ac_map.set ('ac_courseenddate', Ac_Edate);

    // // Map keeps the type, so these two are different:
    // console.log(ac_map.get ('ac_title') ); 
    // console.log(ac_map.get ('ac_description') ); 
    // console.log(ac_map.get ('ac_date') ); 
    // console.log(ac_map.get ('ac_oralmark') ); 
    // console.log(ac_map.get ('ac_totalmark') );
    // console.log(ac_map.get ('ac_coursetitle') ); 
    // console.log(ac_map.get ('ac_coursestartdate') ); 
    // console.log(ac_map.get ('ac_courseenddate') );
    // console.log(ac_map.size); 

    // 
    var trTable = document.getElementById("ac-table");

    // 
    var row = trTable.insertRow(1);

        row.addEventListener("mouseover", mouseover) ;
        row.addEventListener("mouseout", mouseout) ;

        function mouseover(){
            row.style.backgroundColor = "rgb(246, 243, 241)" ;
        }
        
        function mouseout(){
            row.style.backgroundColor = "rgb(251, 249, 248)" ;
        }

    //
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    //     

    cell1.innerHTML = ac_map.get ('ac_title') ;
    cell2.innerHTML = ac_map.get ('ac_description') ;
    cell3.innerHTML = ac_map.get ('ac_date') ;
    cell4.innerHTML = ac_map.get ('ac_oralmark') ;
    cell5.innerHTML = ac_map.get ('ac_totalmark') ;
    cell6.innerHTML = ac_map.get ('ac_coursetitle') ;
    cell7.innerHTML = ac_map.get ('ac_coursestartdate');
    cell8.innerHTML = ac_map.get ('ac_courseenddate') ;

    //
    document.getElementById('assignment_course_formIsValidated').innerHTML = "Successfully submitted" ;
    setTimeout(function(){
        document.getElementById('assignment_course_formIsValidated').innerHTML = ""
    }, 2900)

    //
    AcTitle = document.forms["assignment_course_form"]["Ac_title"].value = "" ;
    AcDescription = document.forms["assignment_course_form"]["Ac_description"].value = "" ;
    AsDate = document.forms["assignment_course_form"]["Ac_date"].value = "" ;
    AsOralMark = document.forms["assignment_course_form"]["Ac_oralMark"].value = "" ;
    AsTotalMark = document.forms["assignment_course_form"]["Ac_totalMark"].value = "" ;
    AsCourseTitle = document.forms["assignment_course_form"]["Ac_courseTitle"].value = "" ;
    AsCourseStartdate = document.forms["assignment_course_form"]["Ac_courseStartdate"].value = "" ;
    AsCourseEnddate = document.forms["assignment_course_form"]["Ac_courseEndtdate"].value = "" ;
    }
    event.preventDefault();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// ASIGNMENT per COURSE per STUDENT ////////////////////////////////////////////////////////////////////////////////


function assignment_course_student_getInputValue(){
    var AscTitle = document.forms["assignment_course_student_form"]["Asc_title"].value;
    var AscDescription = document.forms["assignment_course_student_form"]["Asc_description"].value;
    var AscDate = document.forms["assignment_course_student_form"]["Asc_date"].value;
    var AscOralMark = document.forms["assignment_course_student_form"]["Asc_oralMark"].value;
    var AscTotalMark = document.forms["assignment_course_student_form"]["Asc_totalMark"].value;
    var AscCourseTitle = document.forms["assignment_course_student_form"]["Asc_courseTitle"].value;
    var AscCourseStartdate = document.forms["assignment_course_student_form"]["Asc_courseStartdate"].value;
    var AscCourseEnddate = document.forms["assignment_course_student_form"]["Asc_courseEndtdate"].value;
    var AscStudentFname = document.forms["assignment_course_student_form"]["Asc_student_fname"].value;
    var AscStudentLname = document.forms["assignment_course_student_form"]["Asc_student_lname"].value;

            ///// Dates ////

            // Start Date
            var Asc_Syear = AscCourseStartdate.slice(0, 4);
            var Asc_Smonth = AscCourseStartdate.slice(5, 7);
            var Asc_Sday = AscCourseStartdate.slice(8,10);

            var Asc_Sdate = Asc_Sday + "/" + Asc_Smonth + "/" + Asc_Syear ;

            var Asc_theDateS = Asc_Sday + Asc_Smonth + Asc_Syear;
            var Asc_theDateSNum = parseInt(Asc_theDateS);

            // End Date

            var Asc_Eyear = AscCourseEnddate.slice(0, 4);
            var Asc_Emonth = AscCourseEnddate.slice(5, 7);
            var Asc_Eday = AscCourseEnddate.slice(8,10);
            
            var Asc_Edate = Asc_Eday + "/" + Asc_Emonth + "/" + Asc_Eyear;

            var Asc_theDateE = Asc_Eday + Asc_Emonth + Asc_Eyear;
            var Asc_theDateENum = parseInt(Asc_theDateE);

            // Subject Date
            var Asc_Subyear = AscDate.slice(0, 4);
            var Asc_Submonth = AscDate.slice(5, 7);
            var Asc_Subday = AscDate.slice(8,10);

            var Asc_Subdate = Asc_Subday + "/" + Asc_Submonth + "/" + Asc_Subyear;

            var Asc_theDateSub = Asc_Subday + Asc_Submonth + Asc_Subyear;
            var Asc_theDateSubNum = parseInt(Asc_theDateSub);

            // Date Now

            var Asc_today = new Date();
            var Asc_today = Asc_today.toISOString();

            var Asc_todayYear = Asc_today.slice(0, 4);
            var Asc_todayMonth = Asc_today.slice(5, 7);
            var Asc_todayDay = Asc_today.slice(8,10);

            var Asc_todayDate = Asc_todayYear + Asc_todayMonth + Asc_todayDay;
            var Asc_todayDateNum = parseInt(Asc_todayDate);

    // Defining errorText variables with a default value
    var Error_AscTitle = Error_AscDescription = Error_AscDate = Error_AscOralMark = Error_AscTotalMark = Error_AscCourseTitle 
        = Error_AscCourseStartdate = Error_AscCourseEnddate = Error_AscStudentFname = Error_AscStudentLname = true;

        // Validate Assignment's title
        if(AscTitle == "") {
            document.getElementById('Asc_title_error').innerHTML = " * Title is required " ;
            setTimeout(function(){
                document.getElementById('Asc_title_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('Asc_title_error').innerHTML = "" ;
            Error_AscTitle = false;
            }

        // Validate Assignment's Description
        if(AscDescription == "") {
            document.getElementById('Asc_description_error').innerHTML = " * Description is required " ;
            setTimeout(function(){
                document.getElementById('Asc_description_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('Asc_description_error').innerHTML = "" ;
            Error_AscDescription = false;
            }

        // Validate Assignment's Date
        if(AscDate == "") {
            document.getElementById('Asc_date_error').innerHTML = " * Subject date is required " ;
            setTimeout(function(){
                document.getElementById('Asc_date_error').innerHTML = "";
            }, 2000)
        } else{
            if(Asc_theDateSubNum >= Asc_todayDateNum){
                document.getElementById('Asc_date_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                document.getElementById('Asc_date_error').innerHTML = "";
            }, 2000)
            }else {
            document.getElementById('Asc_date_error').innerHTML = "" ;
            Error_AscDate = false;
            } }

        // Validate Assignment's Oral Mark
        if(AscOralMark == "") {
            document.getElementById('Asc_oralMark_error').innerHTML = " * Oral mark is required " ;
            setTimeout(function(){
                document.getElementById('Asc_oralMark_error').innerHTML = "";
            }, 2000)
        } else {
            var AscOralMark = parseInt(AscOralMark);
            if (AscOralMark > 100 || AscOralMark < 0){ 
            document.getElementById('Asc_oralMark_error').innerHTML = " * Value from 0 to 100 " ;
            setTimeout(function(){
                document.getElementById('Asc_oralMark_error').innerHTML = "";
            }, 2000)
            } else {
            document.getElementById('Asc_oralMark_error').innerHTML = "" ;
            Error_AscOralMark = false;
            }
        }

        // Validate Assignment's Total Mark
        if(AscTotalMark == "") {
            document.getElementById('Asc_totalMark_error').innerHTML = " * Total mark is required " ;
            setTimeout(function(){
                document.getElementById('Asc_totalMark_error').innerHTML = "";
            }, 2000)
        } else {
            var AscTotalMark = parseInt(AscTotalMark);
            if (AscTotalMark > 100 || AscTotalMark < 0){ 
            document.getElementById('Asc_totalMark_error').innerHTML = " * Value from 0 to 100 " ;
            setTimeout(function(){
                document.getElementById('Asc_totalMark_error').innerHTML = "";
            }, 2000)
            } else {
            document.getElementById('Asc_totalMark_error').innerHTML = "" ;
            Error_AscTotalMark = false;
            }
        }

        // Validate Assignment's Course Title
        if(AscCourseTitle == "") {
            document.getElementById('Asc_courseTitle_error').innerHTML = " * Course title is required " ;
            setTimeout(function(){
                document.getElementById('Asc_courseTitle_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('Asc_courseTitle_error').innerHTML = "" ;
            Error_AscCourseTitle = false;
            }

        // Validate Assignment's Course Start Date
        if(AscCourseStartdate == "") {
            document.getElementById('Asc_courseStartdate_error').innerHTML = " * Start date is required " ;
            setTimeout(function(){
                document.getElementById('Asc_courseStartdate_error').innerHTML = "";
            }, 2000)
        } else{
            if(Asc_theDateSNum >= Asc_theDateENum){
                document.getElementById('Asc_courseStartdate_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                document.getElementById('Asc_courseStartdate_error').innerHTML = "";
            }, 2000)}
        else {
            document.getElementById('Asc_courseStartdate_error').innerHTML = "" ;
            Error_AscCourseStartdate = false;
            } }

        // Validate Assignment's Course End Date
        if(AscCourseEnddate == "") {
            document.getElementById('Asc_courseEndtdate_error').innerHTML = " * End date is required " ;
            setTimeout(function(){
                document.getElementById('Asc_courseEndtdate_error').innerHTML = "";
            }, 2000)
        } else{
            if(Asc_theDateSNum >= Asc_theDateENum){
                document.getElementById('Asc_courseEndtdate_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                document.getElementById('Asc_courseEndtdate_error').innerHTML = "";
            }, 2000) }
        else {
            document.getElementById('Asc_courseEndtdate_error').innerHTML = "" ;
            Error_AscCourseEnddate = false;
            } }

        // Validate Student's First Name
        if(AscStudentFname == "") {
            document.getElementById('Asc_student_fname_error').innerHTML = " * First name is required " ;
            setTimeout(function(){
                document.getElementById('Asc_student_fname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(AscStudentFname) === false) {
                document.getElementById('Asc_student_fname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('Asc_student_fname_error').innerHTML = "";
                }, 2000)
              } else {
                document.getElementById('Asc_student_fname_error').innerHTML = "" ;
                Error_AscStudentFname = false;
                }
            }

        // Validate Student's Last Name
        if(AscStudentLname == "") {
            document.getElementById('Asc_student_lname_error').innerHTML = " * Last name is required " ;
            setTimeout(function(){
                document.getElementById('Asc_student_lname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(AscStudentLname) === false) {
                document.getElementById('Asc_student_lname_error').innerHTML = " * Please enter a valid name " ;
                setTimeout(function(){
                    document.getElementById('Asc_student_lname_error').innerHTML = "";
                }, 2000)
              } else {
                document.getElementById('Asc_student_lname_error').innerHTML = "" ;
                Error_AscStudentLname = false;
                }
            }


if( (Error_AscTitle || Error_AscDescription || Error_AscDate || Error_AscOralMark || Error_AscTotalMark || Error_AscCourseTitle 
    || Error_AscCourseStartdate || Error_AscCourseEnddate || Error_AscStudentFname || Error_AscStudentLname) == true ) { 
        return false;
} else {
    
    let asc_map = new Map();
    asc_map.set ('asc_title', AscTitle); 
    asc_map.set ('asc_description', AscDescription); 
    asc_map.set ('asc_date', Asc_Subdate); 
    asc_map.set ('asc_oralmark', AscOralMark); 
    asc_map.set ('asc_totalmark', AscTotalMark); 
    asc_map.set ('asc_coursetitle', AscCourseTitle); 
    asc_map.set ('asc_coursestartdate', Asc_Sdate); 
    asc_map.set ('asc_courseenddate', Asc_Edate); 
    asc_map.set ('asc_studentfname', AscStudentFname); 
    asc_map.set ('asc_studentlname', AscStudentLname); 

    // // 
    // console.log(asc_map.get ('asc_title') ); 
    // console.log(asc_map.get ('asc_description') ); 
    // console.log(asc_map.get ('asc_date') ); 
    // console.log(asc_map.get ('asc_oralmark') ); 
    // console.log(asc_map.get ('asc_totalmark') );
    // console.log(asc_map.get ('asc_coursetitle') ); 
    // console.log(asc_map.get ('asc_coursestartdate') ); 
    // console.log(asc_map.get ('asc_courseenddate') ); 
    // console.log(asc_map.get ('asc_studentfname') ); 
    // console.log(asc_map.get ('asc_studentlname') );
    // console.log(asc_map.size); 

    // 
    var trTable = document.getElementById("acs-table");

    // 
    var row = trTable.insertRow(1);

        row.addEventListener("mouseover", mouseover) ;
        row.addEventListener("mouseout", mouseout) ;

        function mouseover(){
            row.style.backgroundColor = "rgb(246, 243, 241)" ;
        }
        
        function mouseout(){
            row.style.backgroundColor = "rgb(251, 249, 248)" ;
        }

    // 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

    //     

    cell1.innerHTML = asc_map.get ('asc_title') ;
    cell2.innerHTML = asc_map.get ('asc_description') ;
    cell3.innerHTML = asc_map.get ('asc_date') ;
    cell4.innerHTML = asc_map.get ('asc_oralmark') ;
    cell5.innerHTML = asc_map.get ('asc_totalmark') ;
    cell6.innerHTML = asc_map.get ('asc_coursetitle') ;
    cell7.innerHTML = asc_map.get ('asc_coursestartdate') ;
    cell8.innerHTML = asc_map.get ('asc_courseenddate') ;
    cell9.innerHTML = asc_map.get ('asc_studentfname') ;
    cell10.innerHTML = asc_map.get ('asc_studentlname') ;

    //
    document.getElementById('assignment_course_student_formIsValidated').innerHTML = "Successfully submitted" ;
    setTimeout(function(){
        document.getElementById('assignment_course_student_formIsValidated').innerHTML = ""
    }, 2900)

    //
    AscTitle = document.forms["assignment_course_student_form"]["Asc_title"].value = "" ;
    AscDescription = document.forms["assignment_course_student_form"]["Asc_description"].value = "" ;
    AscDate = document.forms["assignment_course_student_form"]["Asc_date"].value = "" ;
    AscOralMark = document.forms["assignment_course_student_form"]["Asc_oralMark"].value = "" ;
    AscTotalMark = document.forms["assignment_course_student_form"]["Asc_totalMark"].value = "" ;
    AscCourseTitle = document.forms["assignment_course_student_form"]["Asc_courseTitle"].value = "" ;
    AscCourseStartdate = document.forms["assignment_course_student_form"]["Asc_courseStartdate"].value = "" ;
    AscCourseEnddate = document.forms["assignment_course_student_form"]["Asc_courseEndtdate"].value = "" ;
    AscStudentFname = document.forms["assignment_course_student_form"]["Asc_student_fname"].value = "" ;
    AscStudentLname = document.forms["assignment_course_student_form"]["Asc_student_lname"].value = "" ;
    }
    event.preventDefault();

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// STUDENT per COURSE //////////////////////////////////////////////////////////////////////////////////////////////

function student_course_getInputValue(){
    var ScFirstName = document.forms["student_course_form"]["Sc_fname"].value;
    var ScLastName = document.forms["student_course_form"]["Sc_lname"].value;
    var ScCourseTitle = document.forms["student_course_form"]["Sc_courseTitle"].value;
    var ScCourseStartdate = document.forms["student_course_form"]["Sc_courseStartdate"].value;
    var ScCourseEnddate = document.forms["student_course_form"]["Sc_courseEndtdate"].value;

            ///// Dates ////

            // Start Date
            var ScSyear = ScCourseStartdate.slice(0, 4);
            var ScSmonth = ScCourseStartdate.slice(5, 7);
            var ScSday = ScCourseStartdate.slice(8,10);

            var ScSdate = ScSday + "/" + ScSmonth + "/" + ScSyear

            var Sc_theDateS = ScSday + ScSmonth + ScSyear;
            var Sc_theDateSNum = parseInt(Sc_theDateS);

            // End Date

            var ScEyear = ScCourseEnddate.slice(0, 4);
            var ScEmonth = ScCourseEnddate.slice(5, 7);
            var ScEday = ScCourseEnddate.slice(8,10);
            
            var ScEdate = ScEday + "/" + ScEmonth + "/" + ScEyear

            var Sc_theDateE = ScEday + ScEmonth + ScEyear;
            var Sc_theDateENum = parseInt(Sc_theDateE);

    // Defining errorText variables with a default value
    var Error_ScFirstName = Error_ScLastName = Error_ScCourseTitle = Error_ScCourseStartdate = Error_ScCourseEnddate = true;

        // Validate Student's First Name
        if(ScFirstName == "") {
            document.getElementById('Sc_fname_error').innerHTML = " * First name is required " ;
            setTimeout(function(){
                document.getElementById('Sc_fname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(ScFirstName) === false) {
                document.getElementById('Sc_fname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('Sc_fname_error').innerHTML = "";
                }, 2000)
              } else {
            document.getElementById('Sc_fname_error').innerHTML = "" ;
            Error_ScFirstName = false;
            }
        }

        // Validate Student's Last Name
        if(ScLastName == "") {
            document.getElementById('Sc_lname_error').innerHTML = " * Last name is required " ;
            setTimeout(function(){
                document.getElementById('Sc_lname_error').innerHTML = "";
            }, 2000)
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if(regex.test(ScLastName) === false) {
                document.getElementById('Sc_lname_error').innerHTML = " * Please enter a valid name ";
                setTimeout(function(){
                    document.getElementById('Sc_lname_error').innerHTML = "";
                }, 2000)
              } else {
            document.getElementById('Sc_lname_error').innerHTML = "" ;
            Error_ScLastName = false;
            }
        }

        // Validate Course Title
        if(ScCourseTitle == "") {
            document.getElementById('Sc_courseTitle_error').innerHTML = " * Title  is required " ;
            setTimeout(function(){
                document.getElementById('Sc_courseTitle_error').innerHTML = "";
            }, 2000)
        } else {
            document.getElementById('Sc_courseTitle_error').innerHTML = "" ;
            Error_ScCourseTitle = false;
            }

        // Validate Course Start Date
        if(ScCourseStartdate == "") {
            document.getElementById('Sc_courseStartdate_error').innerHTML = " * Start date is required " ;
            setTimeout(function(){
                document.getElementById('Sc_courseStartdate_error').innerHTML = "";
            }, 2000)
        } else{
            if(Sc_theDateSNum >= Sc_theDateENum){
                document.getElementById('Sc_courseStartdate_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                document.getElementById('Sc_courseStartdate_error').innerHTML = "";
            }, 2000)
            } else {
            document.getElementById('Sc_courseStartdate_error').innerHTML = "" ;
            Error_ScCourseStartdate = false;
            } 
        }

        // Validate Course End Date
        if(ScCourseEnddate == "") {
            document.getElementById('Sc_courseEndtdate_error').innerHTML = " * End date is required " ;
            setTimeout(function(){
                document.getElementById('Sc_courseEndtdate_error').innerHTML = "";
            }, 2000)
        } else{
            if(Sc_theDateSNum >= Sc_theDateENum){
                document.getElementById('Sc_courseEndtdate_error').innerHTML = " * Date is not proper " ;
                setTimeout(function(){
                document.getElementById('Sc_courseEndtdate_error').innerHTML = "";
            }, 2000)}  else {
            document.getElementById('Sc_courseEndtdate_error').innerHTML = "" ;
            Error_ScCourseEnddate = false;
            } }



if( (Error_ScFirstName || Error_ScLastName || Error_ScCourseTitle || Error_ScCourseStartdate || Error_ScCourseEnddate) == true ) { 
        return false;
} else {

    let sc_map = new Map();
    sc_map.set ('sc_fname', ScFirstName); 
    sc_map.set ('sc_lname', ScLastName); 
    sc_map.set ('sc_coursetitle', ScCourseTitle); 
    sc_map.set ('sc_coursestartdate', ScSdate); 
    sc_map.set ('sc_courseenddate', ScEdate); 

    // // 
    // console.log(sc_map.get ('sc_fname') ); 
    // console.log(sc_map.get ('sc_lname') ); 
    // console.log(sc_map.get ('sc_coursetitle') ); 
    // console.log(sc_map.get ('sc_coursestartdate') ); 
    // console.log(sc_map.get ('sc_courseenddate') );
    // console.log(sc_map.size ); 

    // 
    var trTable = document.getElementById("sc-table");

    // 
    var row = trTable.insertRow(1);

        row.addEventListener("mouseover", mouseover) ;
        row.addEventListener("mouseout", mouseout) ;

        function mouseover(){
            row.style.backgroundColor = "rgb(246, 243, 241)" ;
        }
        
        function mouseout(){
            row.style.backgroundColor = "rgb(251, 249, 248)" ;
        }

    // 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:    

    cell1.innerHTML = sc_map.get ('sc_fname') ;
    cell2.innerHTML = sc_map.get ('sc_lname') ;
    cell3.innerHTML = sc_map.get ('sc_coursetitle') ;
    cell4.innerHTML = sc_map.get ('sc_coursestartdate') ;
    cell5.innerHTML = sc_map.get ('sc_courseenddate') ;

    //
    document.getElementById('student_course_formIsValidated').innerHTML = "Successfully submitted" ;
    setTimeout(function(){
        document.getElementById('student_course_formIsValidated').innerHTML = ""
    }, 2900)

    //
    ScFirstName = document.forms["student_course_form"]["Sc_fname"].value = "" ;
    ScLastName = document.forms["student_course_form"]["Sc_lname"].value = "" ;
    ScCourseTitle = document.forms["student_course_form"]["Sc_courseTitle"].value = "" ;
    ScCourseStartdate = document.forms["student_course_form"]["Sc_courseStartdate"].value = "" ;
    ScCourseEnddate = document.forms["student_course_form"]["Sc_courseEndtdate"].value = "" ;
    }
    event.preventDefault();
}

