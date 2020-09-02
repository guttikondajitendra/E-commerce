import React from 'react';
import './sign-in&sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SigninSignup = () => (
     <div className='signinsignup'>
         <SignIn />
         <SignUp />
     </div>
 );
 export default SigninSignup;