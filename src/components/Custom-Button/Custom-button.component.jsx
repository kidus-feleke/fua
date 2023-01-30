import React from "react";
 
import './Custom-button.styles.scss';

const CustomButton=({children, isGoogleSignIn,inverted, ...otherProps})=>(
<button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'googleSignIn' : ''} custom-button`} {...otherProps}>
    {children}
</button>
) 
export default CustomButton;