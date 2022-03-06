import { useState } from "react";

const useForm = validate => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    // const [viewSignInPhone, setViewSignInPhone] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        // const data = {
        //     username: values.username,
        //     password: values.password
        // }
        // if (data.username === "shakyanischal686@gmail.com" && data.password === "123456") {
        //     // const token = "testToken";
        //     // const test = token;
        //     // localStorage.setItem('token', test);
        //     setViewSignInPhone(true);
        // }
        // else {
        //     console.log("Wrong username or password!"); 
        //     alert("Wrong Username or Password");
        // }
    }

    return{ handleChange, values, errors, handleSubmit };
}

export default useForm;