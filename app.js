let generateBtn = document.querySelector(".generate_btn button");
let userName = document.querySelectorAll(".user_name h3");
let userGender = document.querySelectorAll(".user_gender p");
let userCountry = document.querySelectorAll(".user_country p");
let userNationality = document.querySelectorAll(".user_nationality p");
let userEmail = document.querySelectorAll(".user_email p");
let userDob = document.querySelectorAll(".user_dob p");
let userImg = document.querySelectorAll(".user_img img");
let imgOne = document.querySelector("#img1");
let imgTwo = document.querySelector("#img2");
let imgThree = document.querySelector("#img3");





userName.textContent = "hello"; 

generateBtn.addEventListener("click", generateUser);

function generateUser() {
    fetch('https://randomuser.me/api/?results=3')
    .then(function(res){
        return res.json()
    })

    .then(function(data){
        console.log(data.results)
        console.log(data.results[0].name);


        imgOne.src = data.results[0].picture.large;
        imgTwo.src = data.results[1].picture.large;
        imgThree.src = data.results[2].picture.large

        // userImg.forEach(function(user_img){
        //     user_img.src = data.results[0].picture.large;
            

        // })
        // userName.textContent = "/Hello";
        // userName.textContent = data.results[0].name.first.last;
        // userName.textContent = combined_string;
        // const combinedString =  `${data.results[0].name.title} + " " ${data.results[0].name.first} ${data.results[0].name.last}`;
        combined_string = data.results[0].name["title"] + ". " + data.results[0].name["first"] + " " + data.results[0].name["last"]
        console.log(combined_string);

        userName.forEach(function(user_name){
            // user_name.innerText = data.results[0].name["title"] + ". " + data.results[0].name["first"] + " " + data.results[0].name["last"]; 
            user_name.innerText = combined_string;
        })
        userCountry.forEach(function(user_country){
            user_country.innerText = data.results[0].location.country;
        })
        userNationality.forEach(function(user_nationality){
            user_nationality.innerText = data.results[0].nat;
        })

        userGender.forEach(function(user_gender){
            user_gender.innerText = data.results[0].gender;
        })
        userEmail.forEach(function(user_email){
            user_email.innerText = data.results[0].email;
        })

        // userImg.src = data.results.picture.large;
       

    })
}
setInterval(generateUser, 3000)
generateUser()

// async function get() {
//     let response = await fetch('https://randomuser.me/api/?results');
//     let data = await data.json();
//     return data;
// }

// get() 

// names = await get()

// https://github.com/edwardtimsack/Random_User_App.
// https://github.com/edwardtimsack/Random_User_App.githttps://github.com/edwardtimsack/Random_User_App.git
// https://github.com/edwardtimsack/Random_User_App.git
// https://github.com/edwardtimsack/Random_User_App.git