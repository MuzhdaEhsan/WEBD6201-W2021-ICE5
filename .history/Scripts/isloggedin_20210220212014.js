"use strict";

(() =>{
    // checking if the user is not login
    if(sessionStorage.getItem("user"))
    {
        // redirect to secure area
        location.href = "contact-list.html";
    }
})();