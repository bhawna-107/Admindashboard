import React, { useState } from "react";
import bluebg from "../assets/blue-bg.png";
import googleicon from "../assets/google-icon 1.png";
import appleicon from "../assets/apple 1.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword, updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errmsg, seterrmsg] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (values.name === "" || values.email === "" || values.pass === "") {
      seterrmsg("Fill all fields");
      return;
    }
    seterrmsg("");
   try{
  
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.pass);
    console.log(userCredential.user);
    const user = userCredential.user;
    await updateProfile(user,{
        displayName : `${values.name}` ,
    })
    // await db.collection('users').doc(user.uid).set({
    //   email: values.email
    // })

    await setDoc(doc(db, "users", user.uid), {
      email: values.email,
      Name: values.name
    });
    navigate('/');
   }
   catch(err){ 

    seterrmsg(err.message);
    console.log("Error", err.message)};
  };

  const handleSignInwithGoogle = async(e)=>{
    e.preventDefault();
    try{
       const userCredential= await signInWithPopup(auth, googleProvider);
       const user = userCredential.user
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          Name: values.name
        });
        navigate('/');
    }
    catch(err){
        seterrmsg(err.message);
    }

  }
  return (
    <div className="h-[682px] flex flex-row bg-graywhite">
      <div className=" flex flex-row h-full w-[720px] relative md:block hidden ">
        <img className="object-contain h-full " src={bluebg} alt="" />
        <h1 className="absolute text-white top-[40px] left-[40px] font-bold text-xl ">
          LOGO
        </h1>
        <h1 className="absolute text-white top-[300px] left-[150px] font-bold text-5xl">
          Board.
        </h1>
        <div className="flex flex-row absolute w-12 h-8 gap-6 left-[80px] top-[580px]">
          <img src={github} alt="github" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={discord} alt="discord" />
        </div>
      </div>
      <div className="flex flex-row md:mx-0 sm:mx-20 mx-10">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-3xl mb-2">Sign Up</h1>
          <p className="mb-5">Sign Up to your account</p>

          <div className="flex flex-row gap-4 mb-6">
            <div className="w-fit-content h-auto py-1 px-4 rounded-[20px] bg-white flex flex-row gap-4">
              <img src={googleicon} alt="googleicon" />
              <button onClick={handleSignInwithGoogle} className="text-zinc-400">Sign In with google</button>
            </div>
            <div className="w-fit-content h-auto py-1 px-4 rounded-[20px] bg-white flex flex-row gap-4">
              <img src={appleicon} alt="appleicon" />
              <button className="text-zinc-400">Sign In with Apple</button>
            </div>
          </div>

          <div className="w-[410px]  bg-white rounded-[10px]">
            <div className="px-8 py-8">
              <div className="flex gap-4 flex-col">
                
                  <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                      onChange={handleInputChange}
                      name="name"
                      value={values.name}
                      type="text"
                      placeholder="enter your name"
                      className="w-full h-[30px] p-1 bg-gray-100 rounded-[5px]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label>Email Address</label>
                    <input
                      onChange={handleInputChange}
                      name="email"
                      value={values.email}
                      type="email"
                      placeholder="enter your email"
                      className="w-full h-[30px] p-1 bg-gray-100 rounded-[5px]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label>Password</label>
                    <input
                      onChange={handleInputChange}
                      name="pass"
                      value={values.pass}
                      type="password"
                      placeholder="enter your password"
                      className="w-full h-[30px] p-1 bg-gray-100 rounded-[5px]"
                    />
                  </div>

                  <p className="text-blue-500">Forgot password?</p>
                  <p className="text-red-500 font-bold">{errmsg}</p>
                  <div className="flex flex-row justify-center items-center">
                    <div className={`w-full h-12 bg-blue-500 rounded-[10px] flex items-center justify-center`}>
                      <button onClick={handleSubmission} className="text-white ">
                        Sign Up
                      </button>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center mt-2 flex-wrap px-16">
           <p> Already have an account?</p>
            <Link className="text-blue-500" to="/login"> Login here </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
