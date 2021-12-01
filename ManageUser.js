import React from 'react'

const ManageUser = (props) => {

   // Default admin user , always shows in user's list
   const adminuser ={
       id : "1",
       username : "Komal Singh",
       email : " komal@abc.com",
       role : " admin"

   }
    
   //onclick method which opens the Adduser component and enables to create a new user .

    const renderedList = props.map((username) => {
        return (
          // for each user , a entry is created.
          <table
          id={id}
          username={username}
          email={email}
          role={role}
          />
        );
      });

      
      return (
        <>
        <button onclick={onclick}>Add</button>
        <div className="">
          //A table containing columns of id , username , email , role , action
          <div className="">{renderedList}</div>
        </div>
        </>
      );
}

export default ManageUser ;
