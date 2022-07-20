const KEY="users";
function saveUser(userObj){
    let oldData=readUser();
    oldData.push(userObj);
    let value= JSON.stringify(oldData);
    //send the user to the local storage
    localStorage.setItem(KEY,value);
}
function readUser(){
    let data=localStorage.getItem(KEY);
    console.log(data);//<-jaon
    if(!data){//is not data
        return[];
    }else{
//we have data
        let list=JSON.parse(data);
        return list;
    }
}
function readUser(){
    let data=localStorage.getItem
    (KEY);//
    if(!data){
        return [];
    }else{
        let list=JSON.parse(data);
        return list;
    }
}
