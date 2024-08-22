import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firbase";

const Login=()=>{

    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const email=useRef();
    const password=useRef();
    const handleButtonClick=()=>{
        
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message=checkValidData(email.current.value,password.current.value);
        // console.log(message);
        setErrorMessage(message);
        if(message!=null) return;
        // Signin signup logic
        if(!isSignInForm){  //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ "_" +errorMessage);
        });
        }else{
            //sign in login
        }

    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"></img>
            </div>

            <form
            onSubmit={(e)=>{
                e.preventDefault();
            }}
             className="bg-black bg-opacity-80 absolute w-4/12 mx-auto my-36 right-0 left-0 text-white">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
                    {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-4 bg-gray-600 w-9/12"></input>}
                    <input
                    ref={email}
                    type="text" placeholder="Email Address" className="p-2 my-4 bg-gray-600 w-9/12"></input>
                    <input
                    ref={password}
                    type="password" placeholder="Password" className="p-2 my-4 bg-gray-600 w-9/12"></input>
                    <p className="text-red-500">{errorMessage}</p>
                    <button
                        
                        className="p-4 my-4 bg-red-600 w-9/12 rounded-md"
                        onClick={handleButtonClick}>
                        {isSignInForm?"Sign In":"Sign Up"}
                    </button>
                </div>
                
                <p className="py-4 px-6 mx-6 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign up now.":"Already Registered? Sign In Now"}</p>
                <p className="text-sm mx-6 px-6 my-6">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </form>
        </div>
    )
}
export default Login;