// function ValidateEmail(mail) 
// { 
//  var per=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (per.test(document.wrapper.myform.field.value))
//   {
//       document.field.style.color="red";
//     return (true);
//   }
//     alert("You have entered an invalid email address!");
//     document.field.style.color="red";
//     return (false);
// }


function validatedata() {
    var ptrn = /^([^0-9\W]*)$/;
    if (ptrn.test(document.wrapper.myform.field.value)) {
        document.wrapper.myform.field.style.backgroundColor = 'green';
       // document.getElementById("u_small").textContent = " Username is Valid";
        //document.getElementById("u_small").style.color = "green";
    } else {
        document.wrapper.myform.field.backgroundColor = 'red';
    //document.getElementById("u_small").textContent = " Username is Invalid";
       // document.getElementById("u_small").style.color = "red";
    }
}
document.myform.u_field.addEventListener("blur", validatedata);






