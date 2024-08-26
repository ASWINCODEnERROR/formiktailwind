import React, { useState, useRef, useEffect } from "react";
import { Formik, useFormik } from "formik";

 
const validate = (values) => {
  const errors = {};
  if (Object.values(values.otp).some((data) => data === "")) {
    errors.otp = "Please full fill the OTP";
  }
  return errors;
};
const Otpform = () => {
    const formik = useFormik({

        initialValues: {
          otp: Array.from({ length: 6 }).fill(""),
        },
        validate,
        onSubmit: (values) => {
          console.log(values.otp.join(""));
        },
      });
      console.log(formik.values);
    
      const inputRef = useRef({});
    
      useEffect(() => {
        inputRef.current[0].focus();
    
        inputRef.current[0].addEventListener("paste", pasteText);
        return () => inputRef.current[0].removeEventListener("paste", pasteText);
      }, []);
    
      const pasteText = (event) => {
        const pastedText = event.clipboardData.getData("text");
        const feildValues = {};
        Object.keys(otp).forEach((keys, index) => {
          fieldValues[keys] = pastedText[index];
        });
    
        setOpt(feildValues);
        inputRef.current[5].focus(); 
      };
      const handleChange = (event, index) => {
        const { value } = event.target;
    
        if (/[a-z]/gi.test(value)) return;
    
        const currentOTP = [...formik.values.otp];
        currentOTP[index] = value.slice(-1);
    
        formik.setValues((prev) => ({
          ...prev,
          otp: currentOTP,
        }));
    
        if (value && index < 5) {
          inputRef.current[index + 1].focus();
        }
      };
      const handleBackspace = (event, index) => {
        if (event.key === "Backspace") {
          if (index > 0) {
            inputRef.current[index - 1].focus();
          }
        }
      };
    
      const renderInput = () => {
        return formik.values.otp.map((value, index) => (
          <input
            ref={(element) => (inputRef.current[index] = element)}
            key={index}
            type="text"
            value={value}
            name={index}
            className="w-16 h-16 rounded-md text-center text-xl mr-3"
            onChange={(event) => handleChange(event, index)}
            onKeyUp={(event) => handleBackspace(event, index)}
          />
        ));
      };
    
      return (
        <div>
          <form action="">
            <h3 className="text-3xl mb-10 mt-20"> OTP</h3>
            <Formik>
              <div>{renderInput()}</div>
            </Formik>
            {formik.errors.otp && (
              <p className="mt-3 text-sm text-red-500">fill the fields properly</p>
            )}
            <button
              type="button"
              className="mt-4 w-32 border-solid bg-[#3b3b3b] rounded hover:bg-[#252525]"
              onClick={formik.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      );
    };

export default Otpform
