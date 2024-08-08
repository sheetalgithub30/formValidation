import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string()
    .email()
    .required("Email is required")
    .test('is-same','Email must be regex@gmail.com',function(value){
        return value === "regex@gmail.com"
    })
    ,
  password: Yup.string().required("Please enter your password")
  .test('is-same','Password must be r__M_9',function(value){
    return value === "rishiME@199"
}),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
