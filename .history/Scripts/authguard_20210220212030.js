"use strict";

(() =>{
    // checking if the user is not login
    if(!sessionStorage.getItem("user"))
    {
    // redirect to login page
    location.href = "login.html";
    }
})();