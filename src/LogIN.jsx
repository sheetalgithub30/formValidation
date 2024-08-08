import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function LogIN() {
  const[isSubmit,setIsSubmit] = useState(true);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values,action) => {
        // console.log(values);
        alert("Form Submitted")
        action.resetForm()
        setIsSubmit(true)
      },
    });

    useEffect(()=>{
        console.log(values);
        if(values.name == '' || values.email== '' || values.password=='' || values.confirm_password==''){

        }else{
          setIsSubmit(false)
        }
    },[values])
    

  return (
    <div className="flex h-screen justify-center items-center h-[30rem] max-h-[32rem] w-[60vw]">
      <div className="bg-white px-6 w-[50%] h-full pt-12 max-md:w-[80vw]">
        <h1 className="text-3xl text-yellow-700 ">Welcome!</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <div className="border-[2px] flex flex-col p-2 m-2 w-full rounded-md">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="outline-none"
            ></input>
            {errors.name && touched.name ? (
              <p className="text-red-500">{errors.name}</p>
            ) : null}
          </div>
          <div className="border-[2px] flex flex-col p-2 m-2 w-full rounded-md">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="outline-none"
            ></input>
            {errors.email && touched.email ? (
              <p className="text-red-500">{errors.email}</p>
            ) : null}
          </div>
          <div className="border-[2px] flex flex-col p-2 m-2 w-full rounded-md">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="outline-none"
            ></input>
            {errors.password && touched.password ? (
              <p className="text-red-500">{errors.password}</p>
            ) : null}
          </div>
          <div className="border-[2px] flex flex-col p-2 m-2 w-full rounded-md">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="outline-none"
            ></input>
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-red-500">{errors.confirm_password}</p>
            ) : null}
          </div>
          <button className={`m-2 text-white px-6 py-2 ${isSubmit ?'bg-amber-300 cursor-not-allowed':'bg-amber-600'}`}
          disabled ={isSubmit}
          >
            SIGN UP
          </button>
        </form>
      </div>
      <div className="w-[50%] h-full max-md:hidden">
        <img
          src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          className="h-full"
        ></img>
      </div>
    </div>
  );
}

export default LogIN;
