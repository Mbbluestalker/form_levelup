let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");
let email = document.getElementById("emailaddress");
let age = document.getElementById("age");
let zipcode = document.getElementById("zipcode");
let male = document.getElementById("male");
let female = document.getElementById("female");
let result1 = document.getElementById("result1");


/* let resFname = fname.value;
let resLname = lname.value; */



function finish(){
    document.getElementById("details").style.visibility = "visible";
    if(fname.value !== "" && lname.value !== "" && email.value !== "" && zipcode.value !== "" && age.value !==""){
        welcome = "Thanks for signing up <br/> Your details are: <br/>";
        result1.innerHTML = welcome + "<br/>"  + fname.value + " " + lname.value + "<br/>" + email.value +
        "<br/>" + zipcode.value + "<br/>" + age.value + "<br/>";
    }else{
        result1.innerHTML = "Please  Fill Out The Form";
    }
  
        
        
}



