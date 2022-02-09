console.log("WELCOME TO LOGIN AND SING UP PAGE")
const a=require("readline-sync")
var fs=require('fs')
var dic={}
var i=0;
while(i<=0){
    var facebook=a.question("enter a 1 for singup or enter a 2 for login:")
    if (facebook=="1"){
        mobileno=a.question("enter your mobile number ")
        if(mobileno>0){
            console.log("resister ")
        }else{
            console.log("alreday exist mb")
        }
        var username=a.question("enter your username :")
        console.log("In your password at least uppercase or lowercase letter,✅✅")
        console.log("In your password have at least one special charcter✅✅ ")
        console.log("In your password have at least one numbers✅✅")
        password=a.question("create a passwrod ")
        passd=(/[a-zA-Z0-9!@#$%^&*]{6,16}$/)
            if(password.match(passd) ){
                cofirmpasswrod=a.question("confirmed password✅")
                if (password==cofirmpasswrod){
                    console.log("confirmed password✅")
                    console.log("congracts  "+username+"  you are sign up succesfully")
                }else{
                    console.log("incorrect password❌")
                break;}
            }else{
                console.log("plese add special charcter❌")
            break;}
            console.log("enter your personal details :")
            let firstname=a.question("enter your first name:")
            let lastname=a.question("enter your lastname :")
            let Dob=a.question("enter a your birth_date in following :")
            let gender=a.question("write your gender :")
            console.log("YOU SUCCESEFULLY SIGN UP ")
            var dic={"username":username,"mobileno": mobileno,"password":password,"persondetails":{"first_name":firstname,"last_name":lastname,"Date_Of_Birth":Dob,"Gender":gender,"mobile_number":mobileno}}
            let mystr=JSON.stringify(dic,null,4)
            fs.writeFileSync(username+" .json",mystr)

        break;
    
    }else if(facebook=="2"){
        var user_name=a.question("Enter your user name :")
        var pass_word=a.question("enter a password: ")
        var check=fs.readFileSync(user_name+" .json");
        var file=JSON.parse(check);
        if (user_name==file["username"]){
            if (pass_word==file["password"]){
                console.log("*your personal details *")
                console.log("  first_name=",file["persondetails"]["first_name"])
                console.log("  last_name=",file["persondetails"]["last_name"])
                console.log("  Date_Of_Birth=",file["persondetails"]["Date_Of_Birth"])
                console.log("  mobile_number=",file["persondetails"]["mobile_number"])
            break;
            }else{
                console.log("Incorrect Password ❌")
            break;}
        }else{
            console.log("Username is incorrect❌")
        break;}

    }

}         

//         cofirmpasswrod=a.questionInt("confrom your passwrod ")
//         if(passwrod==cofirmpasswrod){
//             console.log("created successfully")
//         }

//         var dict={"mobilenumber":mobileno,"username":username,"password":cofirmpasswrod}
//         var dict1=JSON.stringify(dict)
//     // console.log(dict1)
//     // var fs=require("fs")
//         fs.writeFileSync("login.json",dict1)
//     // console.log(fs)
    


//  }   
// else{
//     if(facebook=="2"){
//         var username1=a.question("enter your username ")
//         var password=a.questionInt("enter your password")
//         if (username1==username){
//             if(password==passwrod){
//                 // var dict1=JSON.parse(dict)
//                 // fs.readFileSync("login.json",dict1)
//                 console.log("login succesfully")
//                 console.log("welcome to facebook")
//             }
//         }
    
//         var dict2=JSON.parse(dict)
//         fs.readFileSync("login.json",dict2)
//         console.log(dict2)
    
//     }
//     // var dict2=JSON.parse(dict)
//     // fs.writeFileSync("login.json",dict1)



// var dict={"mobilenumber":mobileno,"username":username,"password":cofirmpasswrod}
//     var dict1=JSON.stringify(dict)
//     // console.log(dict1)
//     // var fs=require("fs")
//     fs.writeFileSync("login.json",dict1)
//     // console.log(fs)
    


