import React from "react";

const Header = (props) => {

  // 2 props will be taken : 
  // 1. Shows the page name (Either Login , ManageUser and AddUser)
  // 2.On the top right of header : shows " Welcome <user> , you have logged in 
  //as admin " Also 2 links: Change Password(takes to a page where new password is to be entered) 
  //and Logout(takes back to login page) .
  return (
    <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            
            </div>
        </nav>
  );
};

export default Header;
