function displayUsers(userArray){
    
    //travel the userArray
    let tr=""
    for(let i=0;i<userArray.length;i++){
        let user=userArray[i];
        tr+=`
        <tr class="user">
        <td>${user.firstName}<td>
        <td>${user.lastName}<td>
        <td>${user.email}<td>
        <td>${user.password}<td>
        <td>${user.confirm}<td>
        <td>${user.payment}<td>
        <td>${user.color}<td>
        <td> <button class="btn btn-danger">Delete</button><td>
        </tr>
        `; 
   

    //get the user
    //create the html row element
 }   //append the row to the html table
    document.getElementById("userTable").innerHTML=tr;
 
}
function init(){
    
    let users=readUser();
    displayUsers(users);
}

window.onload=init;
