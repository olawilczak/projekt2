import { useFormik } from "formik";
import { basicSchema } from "./schemas";
import axios from "axios";

const onSubmit = async (values, actions) => {
  try {
    const response = await axios.post('http://localhost:9000/users', values);
    console.log(response.data);
    actions.resetForm();
  } catch (error) {
    console.error(error);
  }
};

const Formula = () => {
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "linear-gradient(to bottom right,#024,#402)",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <div style={loginPageStyle}>
      <h1 className="logo2">Registration Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name" color="white">Name</label>
        <input
          value={values.name}
          onChange={handleChange}
          id="name"
          type="name"
          placeholder="Enter your name"
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />

        {errors.name && touched.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </form>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Formula;
