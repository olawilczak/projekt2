import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
    .string()
    .min(8)
    .matches(passwordRules, {message: "Please create a stronger password"})
    .required("Required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"),null],"Passwords must match")
    .required("Required")
})

