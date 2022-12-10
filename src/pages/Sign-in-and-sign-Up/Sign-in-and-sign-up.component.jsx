import React from "react";

import './Sign-in-and-sign-up.styles.scss';
import SignIn from "../../components/Sign-In/Sign-In.component";
import SignUp from "../../components/Sign-up/Sign-up.component";

const SignInAndSignUp=()=>(
    <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
    </div>
);
export default SignInAndSignUp;