"use strict";

(() =>{
    // checking if the user is login
    if(sessionStorage.getItem("user"))
    {
        // redirect to secure area
        location.href = "contact-list.html";
    }
})();