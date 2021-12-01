import React  from "react";
class AddUser extends React.Component {

    state = {
        username: "",
        email: "",
        contact:"",
        password:"",
      };
    
      add = (e) => {
        e.preventDefault();
        if (this.state.username === "" || this.state.email === "" || this.state.contact === "" || this.state.password === "") {
          alert("All the fields are mandatory!");
          return;
        }
        
        this.setState({ name: "", email: "" , contact:"",password:""});
       
      };


    render() {
    return (
        <div>
        
            <form classname="" onSubmit={this.add}>

            <label>User name</label>
            <input type="text" id="username" name="username" value={this.state.username} 
            onChange={(e) => this.setState({ name: e.target.value })}/>
            <small>Username field is case sensitive</small>

            <label>Email</label>
            <input type="email" id="email" name="email" value={this.state.email} 
            onChange={(e) => this.setState({ name: e.target.value })}/>

            <label>Contact no</label>
            <input type="tel" id="contact" name="contact" placeholder="123-45-678"
             pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required value={this.state.contact} 
            onChange={(e) => this.setState({ name: e.target.value })}/>

            <label>Password</label>
            <input type="password" id="password" name="password" value={this.state.password} 
            onChange={(e) => this.setState({ name: e.target.value })}/>

           <button type="submit">Submit</button> 
           <button type="cancel">Cancel</button> 

            </form>
        </div>
    )
}
}

export default AddUser ;
