import Header from "./Header";
import {useState} from 'react';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }
    return (
        <div>
           <Header />
           <div className="absolute" >
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg" 
                alt="background-image" />
           </div>

           <form className="absolute my-36 right-0 left-0 mx-auto w-3/12 p-12 bg-black items-center text-white bg-opacity-85 ">
            <h1 className="text-3xl py-4">
                {isSignInForm ? "Sign In" :"Sign Up"}
            </h1>
            {!isSignInForm && (
                <input type="text" placeholder="Full Name" 
                className="p-2 my-4 bg-gray-800
                text-yellow-200 w-full" 
                />
            )}

            <input type="text" placeholder="Email or Phone number" 
            className="p-2 my-4 bg-gray-800
            text-yellow-200 w-full" 
            />

            <input type="password" placeholder="Password" 
            className="p-2 my-4 bg-gray-800
            text-yellow-200 w-full" 
            />

            <button className="p-2 my-6 bg-red-700
            w-full rounded-lg" type="submit">
                {isSignInForm? "Sign In" : "Sign Up"}
            </button>

            <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
               {isSignInForm ? " New to Netflix? Sign up now.":  "Already Registered? Sign In now."}
            </p>
           </form>
        </div>
    )
}

export default Login;