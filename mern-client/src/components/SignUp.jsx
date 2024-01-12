import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';

const SignUp = () => {
    let navigate = useNavigate();
    const [error,setError] = useState(false);
    
    const handleSignup = (event) => {
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password = form.password.value;


        const userlogin = () => {
            if (email === "aswin" && password === "12345678") {
                console.log(email, password);
                navigate("/admin/dashboard");
                form.reset();
            } else {
                form.reset();
                setError(true);
            }
        };
        
        userlogin(); 
    
    }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold">Admin Login</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <form onSubmit={handleSignup} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input id="email" name="email" type="text" className="peer  h-10 w-96 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Email address" />
                               
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Password" />
                               
                            </div>
                            {/* <p>If you have an account, Please <Link to={"/login"} className='text-blue-700 underline'>Login</Link> Here</p> */}
                            <div className="relative">
                                <button className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-green-300 ">Login</button>
                            </div>
                        </form>
                        {error && (
                <Alert color="failure" icon={HiInformationCircle}>
                    <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                </Alert>
            )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp