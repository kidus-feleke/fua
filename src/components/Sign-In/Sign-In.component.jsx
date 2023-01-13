import React from "react";
 
import './Sign-In.styles.scss';
import FormInput from "../Form-Input/Form-Input.component";
import CustomButton from "../Custom-Button/Custom-button.component";
import {auth, signInWithGoogle} from '../../Firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();
        const {email, password}=this.state;
         try{   
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'', password: ''})
         }catch(e){
            console.error(e)
         }
        
    }

    handleChange=event=>{
        const {value, name}=event.target;
        this.setState({[name]:value})
    }

render(){
    return(
        <div className="sign-in">
        <h2 className="title" >Already have an account?</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput 
             name="email"
             type="email" 
             value={this.state.email}
             handleChange={this.handleChange} 
             label='Email'
             required />
            
           
            <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange} 
                label='Password'
                required/>
                
            
            <div className="button">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
            </div>
            
            
            
        </form>
        </div>
    )
}
}
export default SignIn;