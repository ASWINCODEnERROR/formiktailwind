import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { JSON} from "react-router-dom";
import { useNavigate } from "react-router-dom";



const SignupFormschema = Yup.object({
  email: Yup.string()
    .email("Please correct your email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "password must have 8 charrr..")
    .matches(/[a-zA-Z]/, "passwrord must contain letters")
    .matches(/\d/, "password must contain numbers.")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password  missmatch")
    .required("confirm password is requied."),
});

const Register = () => {

    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupFormschema,
    onSubmit: (values) => {
        navigate('/otpform');
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="border max-w-md p-5 mt-20 mx-auto rounded shadow-md"
    >
      <div className="container">
        <h1 className="font-bold">Signup</h1>
        <div className="mb-4 m-3">
          <div>
            <label className="block font-normal">Email</label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="border block p-2 mt-1 w-full bg-white text-black"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
        </div>

        <div className="mb-4 m-3">
          <div>
            <label className="block font-normal">Password: </label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="border block p-2 mt-1 w-full bg-white text-black"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
        </div>
        <div className="mb-4 m-3">
          <div>
            <label className="block font-normal">Confirm Password:</label>
          </div>
          <div>
            <input
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="border block p-2 mt-1 w-full bg-white text-black"
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
