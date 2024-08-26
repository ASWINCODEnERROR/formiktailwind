import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginFormschema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must have at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain letters")
    .matches(/\d/, "Password must contain numbers")
    .required("Password is required"),
});

const Loginn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginFormschema}
      onSubmit={(values, { resetForm }) => {
        setLoading(true);

        setTimeout(() => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          navigate("/home");
          resetForm();
          setLoading(false);
        }, 2000);
      }}
    >
      {({ resetForm }) => (
        <Form className="border max-w-md p-5 mt-20 mx-auto rounded shadow-md">
          <div className="container">
            <h1 className="font-bold">Login</h1>

            <div className="mb-4 m-3">
              <label htmlFor="email" className="block font-normal">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="border block p-2 mt-1 w-full bg-white text-black"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4 m-3">
              <label htmlFor="password" className="block font-normal">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="border block p-2 mt-1 w-full bg-white text-black"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4 ">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-3 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
                    </svg>
                    Loading...
                  </span>
                ) : (
                  "login"
                )}
              </button>
              <button
                type="button"
                onClick={() => resetForm()}
                className="bg-gray-500 text-white ml-2 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Reset
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Loginn;
