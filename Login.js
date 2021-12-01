import React from 'react' ;

class Login extends React.Component {

    state = {username: '', password: ''};

    SubmitForm() {

        //Function which defines where the entered username and password
        // has to be sent for authetication.
        //If the username is present in the database , then check password . 
        //Otherwise : show invalid username or password.
    }

    render(){
    return (
        <div>
           
            <form classname="" onSubmit={SubmitForm }>

            <label>Username</label>
            <input type="text" id="username" name="username" value={this.state.username} 
            onChange={(e) => this.setState({ name: e.target.value })}/>

            <label>Password</label>
            <input type="password" id="password" name="password" value={this.state.password} 
            onChange={(e) => this.setState({ name: e.target.value })}/>
            <button type="submit">Submit</button> 
            </form>
            
            
        </div>
    )
}
}

export default Login ;


 