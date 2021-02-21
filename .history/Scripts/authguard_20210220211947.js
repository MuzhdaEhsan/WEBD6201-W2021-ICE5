"use strict";

(() =>{
    // checking if the user is login
    if(!sessionStorage.getItem("user"))
    {
    // redirect to login page
    location.href = "login.html";
    }
})();