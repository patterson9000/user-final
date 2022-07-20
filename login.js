function login(){
    console.log("login successful");
    //get the value from the form
    let txtPass=$("#txtPassword").val();
    let userEmail=$("#txtEmail").val();
    //use a flag
let flag=true;
    //get the users from the localstorage
    let users=readUser();

    for(i=0;i<users.length;i++){
        let user=users[i];
        if(user.email==userEmail && user.password==txtPass){
         
            window.location="users.html";
          
        }else{
            flag=false;
        }
    }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);
        }
           
    }
    //travel the user list

    //comopare the input value with the values from the LS
function init(){
    $("#loginBtn").click(login);

}
window.onload=init;
