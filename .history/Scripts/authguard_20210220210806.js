"use strict";

(function(){
// checking if the user is login
if(!sessionStorage.getItem("user"))
{
  // redirect to secure area
  location.href = "login.html";
}
})();